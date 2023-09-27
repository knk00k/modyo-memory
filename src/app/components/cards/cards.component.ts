import { Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { AnimalResponse, Entry } from '../../interfaces/animal-response.model';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // Use ViewChild to get a reference to the congratulations modal button
  @ViewChild('congratsModalButton') congratsModalButton!: ElementRef;

  // EventEmitter to emit events when a card is clicked
  cardClicked = new EventEmitter<number>();

  deck: Entry[] = [];
  matchedCards: Entry[] = [];
  flippedCards: boolean[] = [];

  // Use ViewChild to get a reference to the congratulations modal button
  modalButton = document.getElementById('congratsModalButton');
  
  constructor(  private animalService: AnimalService,
                private scoreService: ScoreService  ) {}

  ngOnInit(): void {
    // Load animal images when initializing the component
    this.loadAnimalImages();
  }

  // Method to load animal images from the service
  loadAnimalImages() {
    this.animalService.getAnimalImages().subscribe(
      (data: AnimalResponse) => {
        const cards = data.entries;
        const shuffleCards = this.shuffleArray(cards);
        const cardsToPlay = shuffleCards.slice(0, 10);

        // Duplicate the cards and then shuffle them
        this.deck = cardsToPlay.concat(cardsToPlay);
        this.deck = this.shuffleArray(this.deck);

      },
      (error) => {
        console.error('Error loading animal images: ', error);
      }
    );
  }

  // Method to shuffle an array
  shuffleArray(array: any[]): any[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // Method to handle click on a card
  flipCard(index: number) {
    const flippedCount = this.flippedCards.filter((flipped) => flipped).length;
  
    if (flippedCount < 2 && !this.flippedCards[index]) {
      this.flippedCards[index] = true;
      this.cardClicked.emit(index);
  
      if (flippedCount === 1) {
        setTimeout(() => {
          this.checkForMatch();
        }, 600);
      }
    }
  }

  // Method to check if a card is flipped
  isFlipped(index: number): boolean {
    return this.flippedCards[index];
  }
  
  // Method to check if two cards are a match
  checkForMatch() {
    const flippedIndices = this.flippedCards
      .map((flipped, index) => (flipped ? index : -1))
      .filter((index) => index !== -1);

    if (flippedIndices.length === 2) {
      const card1 = this.deck[flippedIndices[0]];
      const card2 = this.deck[flippedIndices[1]];

      if (card1.meta.uuid === card2.meta.uuid) {

        // Update the score and add matching cards
        this.scoreService.updateHits(this.scoreService.getHits() + 1);
        this.matchedCards.push(card1, card2);

        // If all cards are matched, open the congratulations modal
        if (this.matchedCards.length === this.deck.length) {
          this.congratsModalButton.nativeElement.click();
        }

      } else {
        
        // If they don't match, increase the error count
        this.scoreService.updateMisses(this.scoreService.getMisses() + 1);
      }
    }

    // Reset flipped cards
    this.flippedCards = this.flippedCards.map(() => false);
  }

  // Method to check if a card is matched
  isMatched(card: Entry): boolean {
    return this.matchedCards.some((matchedCard) => matchedCard.meta.uuid === card.meta.uuid);
  }
}

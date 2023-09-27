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

  @ViewChild('congratsModalButton') congratsModalButton!: ElementRef;

  cardClicked = new EventEmitter<number>();

  deck: Entry[] = [];
  matchedCards: Entry[] = [];
  flippedCards: boolean[] = [];

  modalButton = document.getElementById('congratsModalButton');
  
  constructor(  private animalService: AnimalService,
                private scoreService: ScoreService  ) {}

  ngOnInit(): void {
    this.loadAnimalImages();
  }

  loadAnimalImages() {
    this.animalService.getAnimalImages().subscribe(
      (data: AnimalResponse) => {
        const cards = data.entries;
        const shuffleCards = this.shuffleArray(cards);
        const cardsToPlay = shuffleCards.slice(0, 10);

        this.deck = cardsToPlay.concat(cardsToPlay);
        this.deck = this.shuffleArray(this.deck);

      },
      (error) => {
        console.error('Error loading animal images: ', error);
      }
    );
  }

  shuffleArray(array: any[]): any[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

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

  isFlipped(index: number): boolean {
    return this.flippedCards[index];
  }
  
  checkForMatch() {
    const flippedIndices = this.flippedCards
      .map((flipped, index) => (flipped ? index : -1))
      .filter((index) => index !== -1);

    if (flippedIndices.length === 2) {
      const card1 = this.deck[flippedIndices[0]];
      const card2 = this.deck[flippedIndices[1]];

      if (card1.meta.uuid === card2.meta.uuid) {
        this.scoreService.updateHits(this.scoreService.getHits() + 1);
        this.matchedCards.push(card1, card2);

        if (this.matchedCards.length === this.deck.length) {
          this.congratsModalButton.nativeElement.click();
        }

      } else {
        this.scoreService.updateMisses(this.scoreService.getMisses() + 1);
      }
    }

    this.flippedCards = this.flippedCards.map(() => false);
  }

  isMatched(card: Entry): boolean {
    return this.matchedCards.some((matchedCard) => matchedCard.meta.uuid === card.meta.uuid);
  }
}

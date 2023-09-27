import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsComponent } from './cards.component';
import { AnimalService } from '../../services/animal.service';
import { ScoreService } from '../../services/score.service';
import { of } from 'rxjs';
import { AnimalResponse, ContentType, Type, Space, Locale, VersionType } from '../../interfaces/animal-response.model';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let animalService: jasmine.SpyObj<AnimalService>;
  let scoreService: jasmine.SpyObj<ScoreService>;

  beforeEach(() => {
    animalService = jasmine.createSpyObj('AnimalService', ['getAnimalImages']);
    
    scoreService = jasmine.createSpyObj('ScoreService', ['updateHits', 'updateMisses', 'getHits', 'getMisses']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardsComponent],
      providers: [
        { provide: AnimalService, useValue: animalService },
        { provide: ScoreService, useValue: scoreService }
      ]
    });
  
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load animal images on init', () => {
    const mockAnimalResponse: AnimalResponse = {
      entries: [
        {
          meta: {
            name: 'Nombre del animal',
            slug: 'slug-del-animal',
            tags: [],
            type: Type.Game,
            uuid: 'uuid-del-animal',
            space: Space.Animals,
            author: {},
            locale: Locale.Es,
            excerpt: 'Descripción breve',
            private: false,
            targets: [],
            category: null,
            created_at: new Date(),
            updated_at: new Date(),
            published_at: new Date(),
            unpublish_at: null,
            version_type: VersionType.Current,
            category_name: null,
            category_slug: null,
            available_locales: [Locale.Es],
          },
          fields: {
            image: {
              url: 'URL de la imagen',
              tags: [],
              uuid: 'uuid-de-la-imagen',
              title: 'Título de la imagen',
              alt_text: null,
              description: null,
              content_type: ContentType.ImageJPEG,
            },
          },
        },
      ],
      meta: {
        total_entries: 1,
        per_page: 1,
        current_page: 1,
        total_pages: 1,
      },
    };
    
    
    animalService.getAnimalImages.and.returnValue(of(mockAnimalResponse));

    fixture.detectChanges();

    expect(animalService.getAnimalImages).toHaveBeenCalled();
    expect(component.deck.length).toBeGreaterThan(0);
  });

  it('should flip cards when clicked', () => {
    component.deck = [
      // Mock entry data
    ];
    const index = 0;

    component.flipCard(index);

    expect(component.flippedCards[index]).toBe(true);
  });

});

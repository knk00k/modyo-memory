import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AnimalService } from './animal.service';
import { ContentType, Type, Space, Locale, VersionType } from '../interfaces/animal-response.model';


describe('AnimalService', () => {
  let service: AnimalService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnimalService]
    });
    service = TestBed.inject(AnimalService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get animal images', () => {
    const mockResponse = {
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

    service.getAnimalImages().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiUrl']); // Accede a la propiedad privada apiUrl
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});

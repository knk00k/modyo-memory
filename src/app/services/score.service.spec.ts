import { TestBed, inject } from '@angular/core/testing';
import { ScoreService } from './score.service';

describe('ScoreService', () => {
  let service: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreService]
    });
    service = TestBed.inject(ScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize hits and misses to zero', () => {
    expect(service.getHits()).toBe(0);
    expect(service.getMisses()).toBe(0);
  });

  it('should update hits', () => {
    service.updateHits(5);
    expect(service.getHits()).toBe(5);
  });

  it('should update misses', () => {
    service.updateMisses(3);
    expect(service.getMisses()).toBe(3);
  });
});

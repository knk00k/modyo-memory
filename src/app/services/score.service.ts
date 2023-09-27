import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private hits = 0;
  private misses = 0;

  constructor() {}

  updateHits(hits: number) {
    this.hits = hits;
  }

  updateMisses(misses: number) {
    this.misses = misses;
  }

  getHits() {
    return this.hits;
  }

  getMisses() {
    return this.misses;
  }

  resetScore() {
    this.hits = 0;
    this.misses = 0;
  }
}

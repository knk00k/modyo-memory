import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private hits = 0;
  private misses = 0;

  constructor() {}

  // Method to update the number of hits
  updateHits(hits: number) {
    this.hits = hits;
  }

  // Method to update the number of misses
  updateMisses(misses: number) {
    this.misses = misses;
  }

  // Method to retrieve the current number of hits
  getHits() {
    return this.hits;
  }

  // Method to retrieve the current number of misses
  getMisses() {
    return this.misses;
  }

}

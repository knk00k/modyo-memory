import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimalResponse } from '../interfaces/animal-response.model';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl = 'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20';

  constructor( private http: HttpClient ) { }

  // Method to retrieve animal images from the API
  getAnimalImages(): Observable<AnimalResponse> {
    return this.http.get<AnimalResponse>(this.apiUrl)
  }
}

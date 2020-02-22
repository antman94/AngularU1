import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @desc General service for getting json data
 */

@Injectable({
  providedIn: 'root'
})

export class UsersService {


  constructor(private http: HttpClient) { }

  /**
   * @desc Returns a json observable to the caller.
   * @param url - The endpoint to be fetched.
   */
  getUsers(url) {
    return this.http.get('https://jsonplaceholder.typicode.com/'+ url);
  }
}

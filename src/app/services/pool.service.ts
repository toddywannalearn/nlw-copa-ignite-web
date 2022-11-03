import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { take, tap } from 'rxjs';


export interface IPool{
  count: number;
}

export interface IUser{
  count: number;
}

export interface IGuess{
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class PoolService {

  private readonly API = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  
  getPoolsCount() {
    return this.http.get<IPool>(this.API + '/pools/count');
  }

  getGuessesCount() {
    return this.http.get<IGuess>(this.API + '/guesses/count');
  }

  getUsersCount() {
    return this.http.get<IUser>(this.API + '/users/count');
  }

  createPool(poolName: String) {
    return this.http.post(this.API + '/pools', {"title": poolName}).pipe(
      take(1),
      tap(console.log)
    );
  }

}

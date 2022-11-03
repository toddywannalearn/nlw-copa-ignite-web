import { PoolService } from './../services/pool.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: number = 0;
  pools: number = 0;
  guesses: number = 0;

  constructor(private service: PoolService) { }

  ngOnInit(): void {
    this.service.getPoolsCount().subscribe(data => this.pools = data.count);
    this.service.getGuessesCount().subscribe(data => this.guesses = data.count);
    this.service.getUsersCount().subscribe(data => this.users = data.count);
  }

  createPool(event: String) {
    this.service.createPool(event).subscribe(res => console.log(res));
  }

}

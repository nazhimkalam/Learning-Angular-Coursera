import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      // Simulate a delay
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      // Simulate a delay
      setTimeout(
        () => resolve(LEADERS.filter((leader) => leader.featured)[0]),
        2000
      );
    });
  }
}

import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;',
  },
  animations: [flyInOut(), expand()],
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private leaderService: LeaderService) {}

  ngOnInit(): void {
    this.leaderService
      .getLeaders()
      .subscribe((result) => (this.leaders = result));
  }
}

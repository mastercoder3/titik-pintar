import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.page.html',
  styleUrls: ['./score-board.page.scss'],
})
export class ScoreBoardPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
clickToPrizeCollectionPage(){
  this.router.navigate(['prizes-collection']);
}
}

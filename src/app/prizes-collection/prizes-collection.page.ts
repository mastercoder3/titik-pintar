import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-prizes-collection',
  templateUrl: './prizes-collection.page.html',
  styleUrls: ['./prizes-collection.page.scss'],
})
export class PrizesCollectionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
clickToBack(){
  this.router.navigate(['score-board']);
}
}

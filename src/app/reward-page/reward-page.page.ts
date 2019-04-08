import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reward-page',
  templateUrl: './reward-page.page.html',
  styleUrls: ['./reward-page.page.scss'],
})
export class RewardPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  

  ClickToMathPage(){
    this.router.navigate(['math-page']);
  }
}

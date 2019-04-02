import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-math-page',
  templateUrl: './math-page.page.html',
  styleUrls: ['./math-page.page.scss'],
})
export class MathPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
ClickBacktoHome(){
  this.router.navigate(['home']);
}
ClicktoQuestionPage(){
  this.router.navigate(['math-question-page']);
}
}

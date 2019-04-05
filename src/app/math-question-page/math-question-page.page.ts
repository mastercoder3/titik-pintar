import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../services.service';



@Component({
  selector: 'app-math-question-page',
  templateUrl: './math-question-page.page.html',
  styleUrls: ['./math-question-page.page.scss'],
})
export class MathQuestionPagePage implements OnInit {

  constructor(private helper:ServicesService, public modalControler:ModalController) { }

  ngOnInit() {
  }
  openModal(){
    this.helper.presentModal()
  }

  isWrong = false;
  isright = false;
  checkAnswer(){
    this.isWrong = true;
    setTimeout( () => {
    this.helper.presentModal2();
    },500);
  }
  checkAnswer1(){
    this.isright = true;
    setTimeout( () => {
      this.helper.presentModal3();
      },500);
  }
}

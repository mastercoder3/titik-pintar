import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { AudioService } from '../audio.service';


 
@Component({
  selector: 'app-math-question-page',
  templateUrl: './math-question-page.page.html',
  styleUrls: ['./math-question-page.page.scss'],
})
export class MathQuestionPagePage implements OnInit {

  questions;
  current;
  index:number = 0;
  isAnswerRight=[false,false,false,false];
  isAnswerWrong=[false,false,false,false];

  constructor(private helper:ServicesService,private http: Http, public modalControler:ModalController, private audio:AudioService) { }

  ngOnInit() {
    this.helper.getLanguage().subscribe(res =>{
      if(res ==='en'){
        this.getQuestions('Q&A-eng')
        .subscribe(res =>{
          this.questions = res;
          this.current = this.questions[0];
          this.index = 0;
        });
      }
      else{
        this.getQuestions('Q&A')
        .subscribe(res =>{
          this.questions = res;
          this.current = this.questions[0];
          this.index = 0;
        });
      }
    })
    
    }
    

  getQuestions(val){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');    
       let options = new RequestOptions({ headers: myHeaders });
    return this.http.get('./assets/i18n/'+val+'.json',options)
    .pipe(map((this.extractData)))
  }

  extractData(res){
    let body = res.json();
    return body;
  }

  openModal(){
    this.helper.presentModal();
    this.audio.createExit();
  }
  // async presentToast() {
  //   const toast = await this.toast.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000,
  //     position: 'top',
  //     cssClass: 'toastclass'
 
  //   });
  //   toast.present();
  // }

  isWrong = false;
  isright = false;
  checkAnswer(val){
    if(val === this.current.rightAns){
      this.checkAnswer1();
      this.isAnswerRight[val-1] = true;
    }
    else{
      this.isAnswerWrong[val-1] = true;
       this.isWrong = true;
    this.playWorngAudio();
    setTimeout( () => {
      this.helper.presentModal2(this.index,this.questions.length,this.current.answerStatement).then( res =>{
         this.helper.onDismiss().then(res =>{
           this.index++;
           if(this.index !== this.questions.length  ){
            this.index;
            this.current = this.questions[this.index];
           }
           else{
             this.index = 0;
             this.current = this.questions[this.index];
           }
           this.isAnswerRight=[false,false,false,false];
           this.isAnswerWrong=[false,false,false,false];
      })
      })
     
      },500);
    }
   
  }
  checkAnswer1(){
    this.isright = true;
    this.playCorrectAudio();
    setTimeout( () => {
      let id = Math.floor(Math.random()*4)+1
      this.helper.presentModalToaster(id);
      this.helper.presentModal3(this.index,this.questions.length,this.current.answerStatement).then( res =>{
         this.helper.onDismiss().then(res =>{
           this.index++;
           if(this.index !== this.questions.length  ){
            this.index;
            this.current = this.questions[this.index];
           }
           else{
             this.index = 0;
             this.current = this.questions[this.index];
           }
           this.modalControler.dismiss();
           this.isAnswerRight=[false,false,false,false];
           this.isAnswerWrong=[false,false,false,false];
      })
      })
     
      },500);
  }


  playCorrectAudio(){
    let id = Math.floor(Math.random() * 3) + 1;
    if(id === 1){
      this.audio.createCorrectAnswer();
    }
    else if(id === 2){
       this.audio.createBoom();
    }
    else if(id === 3){
      this.audio.createFlawless();
    }
  }

  playWorngAudio(){
    let id = Math.floor(Math.random() * 3) + 1;
    if(id === 1){
      this.audio.createWrongAnswer()
    }
    else if(id === 2){
      this.audio.createLetmehelp();
    }
    else if(id === 3){
      this.audio.createSorry();
    }
  }




}

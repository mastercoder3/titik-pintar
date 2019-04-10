import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../services.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';


 
@Component({
  selector: 'app-math-question-page',
  templateUrl: './math-question-page.page.html',
  styleUrls: ['./math-question-page.page.scss'],
})
export class MathQuestionPagePage implements OnInit {

  questions;
  current;
  index:number = 0;

  constructor(private helper:ServicesService,private http: Http, public modalControler:ModalController, private toast: ToastController) { }

  ngOnInit() {
    this.getQuestions()
      .subscribe(res =>{
        this.questions = res;
        this.current = this.questions[0];
        this.index = 0;
      })
  }

  getQuestions(){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');    
       let options = new RequestOptions({ headers: myHeaders });
    return this.http.get('./assets/i18n/Q&A.json',options)
    .pipe(map((this.extractData)))
  }

  extractData(res){
    let body = res.json();
    return body;
  }

  openModal(){
    this.helper.presentModal()
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
  checkAnswer(){
    this.isWrong = true;
    setTimeout( () => {
      this.helper.presentModal2(this.index,this.questions.length).then( res =>{
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
           this.isWrong = false;
      })
      })
     
      },500);
  }
  checkAnswer1(){
    this.isright = true;
    setTimeout( () => {
      let id = Math.floor(Math.random()*4)+1
      this.helper.presentModalToaster(id);
      this.helper.presentModal3(this.index,this.questions.length).then( res =>{
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
           this.isright = false;
           this.modalControler.dismiss();
      })
      })
     
      },500);
  }
}

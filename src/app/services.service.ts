import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MathPageModalComponent } from '../app/math-page-modal/math-page-modal.component';
import {ModalWrongAnsComponent} from '../app/modal-wrong-ans/modal-wrong-ans.component';
import { ModalRightAnsComponent } from './modal-right-ans/modal-right-ans.component';
import {ModalToasterComponent} from './modal-toaster/modal-toaster.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Mymodal

  language: BehaviorSubject<string>;

  constructor(public modalController: ModalController) {
    this.language = new BehaviorSubject<string>(localStorage.getItem('language'));
   }

   setLanguage(value): void{
     this.language.next(value)
   }

   getLanguage(): Observable<string>{
     return this.language.asObservable();
   }



  async presentModal() {
    this.Mymodal = await this.modalController.create({
      component: MathPageModalComponent,
      componentProps: { value: 123 },
      cssClass: 'custom-modal'
    });
  
    return await this.Mymodal.present();
  }
  closeModal(){
    this.Mymodal.dismiss()
  }

  async presentModal2(value,val,right) {
    this.Mymodal = await this.modalController.create({
      component: ModalWrongAnsComponent,
      componentProps: { value: value, length: val, right: right},
      cssClass: 'custom-modal2'
    });
    
  
    return await this.Mymodal.present();
  }

  async presentModal3(value,val,right) {
    this.Mymodal = await this.modalController.create({
      component: ModalRightAnsComponent,
      componentProps: { value: value, length: val, right: right },
      cssClass: 'custom-modal3',
      showBackdrop: false
    });
    
    return await this.Mymodal.present();
  }

  async presentModalToaster(val) {
    this.Mymodal = await this.modalController.create({
      component:ModalToasterComponent,
      componentProps: { type: val },
      cssClass: 'custom-modaltoaster',
      backdropDismiss: false
    });
    
    return await this.Mymodal.present();
  }


  async onDismiss(){
    return await this.Mymodal.onDidDismiss();
  }

  }



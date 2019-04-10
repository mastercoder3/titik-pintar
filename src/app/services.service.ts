import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MathPageModalComponent } from '../app/math-page-modal/math-page-modal.component';
import {ModalWrongAnsComponent} from '../app/modal-wrong-ans/modal-wrong-ans.component';
import { ModalRightAnsComponent } from './modal-right-ans/modal-right-ans.component';
import {ModalToasterComponent} from './modal-toaster/modal-toaster.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Mymodal
  constructor(public modalController: ModalController) { }

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

  async presentModal2(value,val) {
    this.Mymodal = await this.modalController.create({
      component: ModalWrongAnsComponent,
      componentProps: { value: value, length: val },
      cssClass: 'custom-modal2'
    });
    
  
    return await this.Mymodal.present();
  }

  async presentModal3(value,val) {
    this.Mymodal = await this.modalController.create({
      component: ModalRightAnsComponent,
      componentProps: { value: value, length: val },
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



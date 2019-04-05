import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MathPageModalComponent } from '../app/math-page-modal/math-page-modal.component';
import {ModalWrongAnsComponent} from '../app/modal-wrong-ans/modal-wrong-ans.component';
import { ModalRightAnsComponent } from './modal-right-ans/modal-right-ans.component';

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

  async presentModal2() {
    this.Mymodal = await this.modalController.create({
      component: ModalWrongAnsComponent,
      componentProps: { value: 123 },
      cssClass: 'custom-modal2'
    });
  
    return await this.Mymodal.present();
  }
  async presentModal3() {
    this.Mymodal = await this.modalController.create({
      component: ModalRightAnsComponent,
      componentProps: { value: 123 },
      cssClass: 'custom-modal3'
    });
  
    return await this.Mymodal.present();
  }

  }



import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-toaster',
  templateUrl: './modal-toaster.component.html',
  styleUrls: ['./modal-toaster.component.scss'],
})
export class ModalToasterComponent implements OnInit {

  @Input() type;

  constructor(private modal: ModalController) { }

  ngOnInit() {
    // setTimeout( () => {
    //   this.modal.dismiss(); 
    // }, 3000)
  }

  cross(){
    this.modal.dismiss();
  }

}

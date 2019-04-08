import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-right-ans',
  templateUrl: './modal-right-ans.component.html',
  styleUrls: ['./modal-right-ans.component.scss'],
})
export class ModalRightAnsComponent implements OnInit {

  constructor( private router:Router, private helper: ModalController) { }

  ngOnInit() {}

  async ClickToRewardPage(){
    const modal = await this.helper.getTop();
    modal.dismiss();
    this.router.navigate(['reward-page']);
  }
}

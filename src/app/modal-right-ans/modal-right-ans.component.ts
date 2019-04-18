import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-modal-right-ans',
  templateUrl: './modal-right-ans.component.html',
  styleUrls: ['./modal-right-ans.component.scss'],
})
export class ModalRightAnsComponent implements OnInit {

  constructor( private router:Router, private helper: ModalController, private audio:AudioService) { }

  @Input() value: number;
  @Input() length: number;
  @Input() right: string;

  ngOnInit() {
  }

  ClickToRewardPage(){
    if(this.length-1 === this.value){
      this.openFinish();
    }
    else{
      this.helper.dismiss();
    }
  }

  async openFinish(){
    const modal = await this.helper.getTop();
    modal.dismiss();
    this.router.navigate(['reward-page']);
    this.audio.createSound(13);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-math-page-modal',
  templateUrl: './math-page-modal.component.html',
  styleUrls: ['./math-page-modal.component.scss'],
})
export class MathPageModalComponent implements OnInit {

  constructor(private router:Router,private helper: ModalController) { }

  ngOnInit() {}

  async ClickbacktoHome(){
    const modal = await this.helper.getTop();
    modal.dismiss();
    this.router.navigate(['home']);
  }
}

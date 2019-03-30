import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-ovo-version',
  templateUrl: './store-ovo-version.page.html',
  styleUrls: ['./store-ovo-version.page.scss'],
})
export class StoreOVOVersionPage implements OnInit {
  selector: string = "avatars";
  constructor() { }

  ngOnInit() {
  }
  changeSwitchCase(val){
    this.selector = val;
  }
}

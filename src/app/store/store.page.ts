import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  selector: string = "avatars";
  constructor() { }

  ngOnInit() {
  }
  changeSwitchCase(val){
    this.selector = val;
  }
}

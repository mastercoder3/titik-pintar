import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friend-page',
  templateUrl: './friend-page.page.html',
  styleUrls: ['./friend-page.page.scss'],
})
export class FriendPagePage implements OnInit {

  constructor(
      private router:Router
  ) { }

  ngOnInit() {
  }
  ClicktoProfilepage() {
    this.router.navigate(['profile']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-footer3',
  templateUrl: './footer3.component.html',
  styleUrls: ['./footer3.component.scss'],
})
export class Footer3Component implements OnInit {

  constructor(private router: Router, private audio: AudioService) { }

  ngOnInit() {}

  openHomePage(){
    this.router.navigate(['home']);
    
    this.audio.createSound(1);
  }
  openStorePage(){
    if(localStorage.getItem('key1')==='store-ovo-version'){
      this.router.navigate(['store-ovo-version']);
    }
    else if(localStorage.getItem('key1')==='store'){
      this.router.navigate(['store']);
    }
    else{
      this.router.navigate(['store']);
    }

    this.audio.createSound(0);
    
  }
  openFriendPage(){
    this.router.navigate(['friend-page']);
  }
 
}


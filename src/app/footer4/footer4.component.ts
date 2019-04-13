import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-footer4',
  templateUrl: './footer4.component.html',
  styleUrls: ['./footer4.component.scss'],
})
export class Footer4Component implements OnInit {

  constructor(private router: Router, private audio: AudioService) { }

  ngOnInit() {}
  openHomePage(){
    this.router.navigate(['home']);
    
    this.audio.createLetsGo();
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

    this.audio.createGoodies();
    
  }
  openRankpage(){
    this.router.navigate(['score-board']);
  }
 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss'],
})
export class Footer1Component implements OnInit {

  constructor(private router: Router, private audio: AudioService) { }

  ngOnInit() {}
  
  openStorePage(){
    this.router.navigate(['store']);
   
    this.audio.createGoodies();
    
  }
 
}

import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  audioStatus = '25';
  volume = '75';
  goto= '';

  constructor(private audio: AudioService, private router:Router) { }

  ngOnInit() {
    this.volume = (this.audio.getReactionVolume() * 100 ).toString();
    if(this.volume === '0')
      this.volume = 'off';

    
    this.audioStatus = (this.audio.getBgVolume() * 100).toString()
    if(this.audioStatus === '0'){
      this.audioStatus = 'off';
    }
  }

  changeAudio(){
    if(this.audioStatus === 'off'){
      this.audio.off();
      localStorage.setItem('vol','off');
    }
    else{
      this.audio.on();
      localStorage.setItem('vol', this.audioStatus);
      this.audio.setVolume(parseInt(this.audioStatus) / 100);
    }
  }

  setVolume(){
    if(this.volume === 'off'){
      this.audio.setReactionVolume(0);
      this.audio.offReactionVolume();
    }
    else{
      this.audio.setReactionVolume(parseInt(this.volume) / 100);
    }
  }

  ClicktoBack(){
    this.router.navigate(['home']);
  }
  ClicktoOvoStore(){
    this.router.navigate(['store-ovo-version']);
  }
  ClicktoCoinStore(){
    this.router.navigate(['store']);
  }

  goToPage(){
    if(this.goto === 'ovo'){
      localStorage.setItem('key1','store-ovo-version');
    }
    else if(this.goto === 'coin'){
      localStorage.setItem('key1','store');
      
    }
  }
}

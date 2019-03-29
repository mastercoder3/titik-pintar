import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  audioStatus = 'on';
  volume = '50';

  constructor(private audio: AudioService) { }

  ngOnInit() {
  }

  changeAudio(){
    if(this.audioStatus === 'on'){
      this.audio.on();
    }
    else{
      this.audio.off();
    }
  }

  setVolume(){
    this.audio.setVolume(parseInt(this.volume) / 100);
  }

}

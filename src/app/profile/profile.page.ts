import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  audioStatus = '25';
  volume = '75';

  constructor(private audio: AudioService) { }

  ngOnInit() {
  }

  changeAudio(){
    if(this.audioStatus === 'off'){
      this.audio.off();
    }
    else{
      this.audio.on();
      this.audio.setVolume(parseInt(this.audioStatus) / 100);
    }
  }

  setVolume(){
    if(this.audioStatus === 'off'){
      this.audio.setReactionVolume(0);
    }
    else{
      this.audio.setReactionVolume(parseInt(this.volume) / 100);
    }
  }

}

import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  bgVolume = .25;
  reactionVolume = .75;
  audioGoodies:string;
  lang;
  englishSounds= [
    'assets/audio/Goodies.mp3',
    'assets/audio/Lets-go.mp3',
    'assets/audio/Your-back.mp3',
    'assets/audio/Not-available-yet.mp3',
    'assets/audio/English.mp3',
    'assets/audio/Music-off.mp3',
    'assets/audio/Sound-off.mp3',
    'assets/audio/Avatars.mp3',
    'assets/audio/Gifts.mp3',
    'assets/audio/Quiz.mp3',
    'assets/audio/Correct.mp3',
    'assets/audio/Nope.mp3',
    'assets/audio/Exit.mp3',
    'assets/audio/Youve-done-it.mp3',
     'assets/audio/Time.mp3'
    ,'assets/audio/Boom.mp3'
    ,'assets/audio/Flawless.mp3',
    'assets/audio/Letmehelp.mp3'
    , 'assets/audio/Sorry.mp3'
    , 'assets/audio/Maths.mp3'
  ];
  indSounds=[  'assets/audio/Goodies-ind.mp3',
  'assets/audio/Lets-go-ind.mp3',
  'assets/audio/Your-back-ind.mp3',
  'assets/audio/Not-available-yet-ind.mp3',
  'assets/audio/Bahasa-ind.mp3',
  'assets/audio/Music-off-ind.mp3',
  'assets/audio/Sound-off-ind.mp3',
  'assets/audio/Avatars-ind.mp3',
  'assets/audio/Gifts-ind.mp3',
  'assets/audio/Quiz-ind.mp3',
  'assets/audio/Correct-ind.mp3',
  'assets/audio/Nope-ind.mp3',
  'assets/audio/Exit-ind.mp3',
  'assets/audio/Youve-done-it-ind.mp3',
   'assets/audio/Time-ind.mp3'
  ,'assets/audio/Boom-ind.mp3'
  ,'assets/audio/Flawless-ind.mp3',
  'assets/audio/Letmehelp-ind.mp3'
  , 'assets/audio/Sorry-ind.mp3'
  , 'assets/audio/Maths-ind.mp3'];

  constructor(private nativeAudio: NativeAudio) {  
    this.lang = localStorage.getItem('language');
   }

   setLang(lang){
     this.lang = lang;
   }

  createAudio(){
    this.nativeAudio.preloadComplex('uniqueId1', 'assets/audio/this-is-happiness.mp3', this.bgVolume, 1, 0)
    .then(res => {
      this.nativeAudio.play('uniqueId1');
      this.nativeAudio.loop('uniqueId1');

    }, err =>{
       this.nativeAudio.play('uniqueId1');
    });
  }

  createSound(val,start?){
    if(this.reactionVolume !== 0){
      if(start){
        let x = ''
        if(this.lang === 'ind')
          x =this.indSounds[val];
        else
          x = this.englishSounds[val]
          this.nativeAudio.preloadComplex('uniqueId2', x, this.reactionVolume, 1, 0)
          .then(res => {
            this.nativeAudio.play('uniqueId2')
          });
      }
      else{
         this.nativeAudio.unload('uniqueId2').then( res => {
        let x = ''
        if(this.lang === 'ind')
          x =this.indSounds[val];
        else
          x = this.englishSounds[val]
          this.nativeAudio.preloadComplex('uniqueId2', x, this.reactionVolume, 1, 0)
          .then(res => {
            this.nativeAudio.play('uniqueId2')
          });
      })
      }
     
    }
 
  }

  off(){
    this.bgVolume = 0;
    this.nativeAudio.stop('uniqueId1');
  }

  getBgVolume(){
    return this.bgVolume;
  }

  on(){
    this.nativeAudio.play('uniqueId1');
  }


  setVolume(val){
    this.nativeAudio.setVolumeForComplexAsset('uniqueId1', val)
  }

  setReactionVolume(val){
    this.reactionVolume = val;
  }

  offReactionVolume(){
    this.reactionVolume = 0;
  }

  getReactionVolume(){
    return this.reactionVolume;
  }

  languageSwitcher(lang){
    this.lang = lang; 
  }
}

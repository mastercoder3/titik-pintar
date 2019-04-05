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

  constructor(private nativeAudio: NativeAudio) {  
    this.lang = localStorage.getItem('language');
   }

   initializeAudio(lang){
    if(lang === 'en'){
      this.nativeAudio.preloadComplex('uniqueId2', 'assets/audio/Goodies.mp3', this.reactionVolume, 1, 0)
      .then(res => {
        
      }, err =>{
      });
  
      this.nativeAudio.preloadComplex('uniqueId4', 'assets/audio/Lets-go.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
  
      });
  
      this.nativeAudio.preloadComplex('uniqueId3', 'assets/audio/Your-back.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
        
      });
  
      this.nativeAudio.preloadComplex('uniqueId5', 'assets/audio/Not-available-yet.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });
    }
    else{
      this.nativeAudio.preloadComplex('uniqueId6', 'assets/audio/Goodies-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
        
      }, err =>{
      });
  
      this.nativeAudio.preloadComplex('uniqueId7', 'assets/audio/Lets-go-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
  
      });
  
      this.nativeAudio.preloadComplex('uniqueId8', 'assets/audio/Your-back-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
        
      });
  
      this.nativeAudio.preloadComplex('uniqueId9', 'assets/audio/Not-available-yet-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });
    }
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

  createGoodies(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId6', this.reactionVolume)
        this.nativeAudio.play('uniqueId6');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId2', this.reactionVolume)
    this.nativeAudio.play('uniqueId2');
      }

    }
 
  }

  createLetsGo(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId7', this.reactionVolume)
        this.nativeAudio.play('uniqueId7');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId4', this.reactionVolume)
    this.nativeAudio.play('uniqueId4');
      }
    }
 
  }

  createYourBack(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId8', this.reactionVolume)
        this.nativeAudio.play('uniqueId8');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId3', this.reactionVolume)
    this.nativeAudio.play('uniqueId3');
      }
    }
 
  }

  createNotAvailable(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId9', this.reactionVolume)
        this.nativeAudio.play('uniqueId9');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId5', this.reactionVolume)
    this.nativeAudio.play('uniqueId5');
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
    this.initializeAudio(lang);    
  }
}

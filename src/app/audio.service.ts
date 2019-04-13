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

      this.nativeAudio.preloadComplex('uniqueId11', 'assets/audio/English.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId12', 'assets/audio/Music-off.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId14', 'assets/audio/Sound-off.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId17', 'assets/audio/Avatars.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId19', 'assets/audio/Gifts.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId21', 'assets/audio/Quiz.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId23', 'assets/audio/Correct.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      
      this.nativeAudio.preloadComplex('uniqueId25', 'assets/audio/Nope.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId27', 'assets/audio/Exit.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId29', 'assets/audio/Youve-done-it.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      
      this.nativeAudio.preloadComplex('uniqueId31', 'assets/audio/Time.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId33', 'assets/audio/Boom.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId35', 'assets/audio/Flawless.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId37', 'assets/audio/Letmehelp.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId39', 'assets/audio/Sorry.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId41', 'assets/audio/Maths.mp3', this.reactionVolume, 1, 0)
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

      this.nativeAudio.preloadComplex('uniqueId10', 'assets/audio/Bahasa-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });



      this.nativeAudio.preloadComplex('uniqueId13', 'assets/audio/Music-off-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId15', 'assets/audio/Sound-off-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId16', 'assets/audio/Avatars-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId18', 'assets/audio/Gifts-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId20', 'assets/audio/Quiz-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });



      this.nativeAudio.preloadComplex('uniqueId22', 'assets/audio/Correct-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId24', 'assets/audio/Nope-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });


      this.nativeAudio.preloadComplex('uniqueId26', 'assets/audio/Exit-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });



      this.nativeAudio.preloadComplex('uniqueId28', 'assets/audio/Youve-done-it-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });



      this.nativeAudio.preloadComplex('uniqueId30', 'assets/audio/Time-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId32', 'assets/audio/Boom-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId34', 'assets/audio/Flawless-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId36', 'assets/audio/Letmehelp-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId38', 'assets/audio/Sorry-ind.mp3', this.reactionVolume, 1, 0)
      .then(res => {
  
      }, err =>{
      });

      this.nativeAudio.preloadComplex('uniqueId40', 'assets/audio/Maths-ind.mp3', this.reactionVolume, 1, 0)
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

  createLanguageChange(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId10', this.reactionVolume)
        this.nativeAudio.play('uniqueId10');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId11', this.reactionVolume)
    this.nativeAudio.play('uniqueId11');
      }
    }
  }
  createMusicChange(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId13', this.reactionVolume)
        this.nativeAudio.play('uniqueId13');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId12', this.reactionVolume)
    this.nativeAudio.play('uniqueId12');
      }
    }
  }
  createVolumeChange(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId15', this.reactionVolume)
        this.nativeAudio.play('uniqueId15');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId14', this.reactionVolume)
    this.nativeAudio.play('uniqueId14');
      }
    }
  }
  createAvatarChange(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId16', this.reactionVolume)
        this.nativeAudio.play('uniqueId16');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId17', this.reactionVolume)
    this.nativeAudio.play('uniqueId17');
      }
    }
  }
  createGiftsChange(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId18', this.reactionVolume)
        this.nativeAudio.play('uniqueId18');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId19', this.reactionVolume)
    this.nativeAudio.play('uniqueId19');
      }
    }
  }
  createQuestionPageSound(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId20', this.reactionVolume)
        this.nativeAudio.play('uniqueId20');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId21', this.reactionVolume)
    this.nativeAudio.play('uniqueId21');
      }
    }
  }
  createCorrectAnswer(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId22', this.reactionVolume)
        this.nativeAudio.play('uniqueId22');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId23', this.reactionVolume)
    this.nativeAudio.play('uniqueId23');
      }
    }
  }
  createBoom(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId32', this.reactionVolume)
        this.nativeAudio.play('uniqueId32');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId33', this.reactionVolume)
    this.nativeAudio.play('uniqueId33');
      }
    }
  }
  createFlawless(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId34', this.reactionVolume)
        this.nativeAudio.play('uniqueId34');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId35', this.reactionVolume)
    this.nativeAudio.play('uniqueId35');
      }
    }
  }
  createWrongAnswer(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId24', this.reactionVolume)
        this.nativeAudio.play('uniqueId24');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId25', this.reactionVolume)
    this.nativeAudio.play('uniqueId25');
      }
    }
  }
  createLetmehelp(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId36', this.reactionVolume)
        this.nativeAudio.play('uniqueId36');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId37', this.reactionVolume)
    this.nativeAudio.play('uniqueId37');
      }
    }
  }
  createSorry(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId38', this.reactionVolume)
        this.nativeAudio.play('uniqueId38');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId39', this.reactionVolume)
    this.nativeAudio.play('uniqueId39');
      }
    }
  }
  createExit(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId26', this.reactionVolume)
        this.nativeAudio.play('uniqueId26');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId27', this.reactionVolume)
    this.nativeAudio.play('uniqueId27');
      }
    }
  }
  createYouhaveDoneit(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId28', this.reactionVolume)
        this.nativeAudio.play('uniqueId28');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId29', this.reactionVolume)
    this.nativeAudio.play('uniqueId29');
      }
    }
  }
  createDateAndTime(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId30', this.reactionVolume)
        this.nativeAudio.play('uniqueId30');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId31', this.reactionVolume)
    this.nativeAudio.play('uniqueId31');
      }
    }
  }
  createMath(){
    if(this.reactionVolume !== 0){
      if(this.lang === 'ind'){
        this.nativeAudio.setVolumeForComplexAsset('uniqueId40', this.reactionVolume)
        this.nativeAudio.play('uniqueId40');
      }
      else{
    this.nativeAudio.setVolumeForComplexAsset('uniqueId41', this.reactionVolume)
    this.nativeAudio.play('uniqueId41');
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

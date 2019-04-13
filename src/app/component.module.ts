import  { NgModule } from '@angular/core';
import { Footer1Component } from './footer1/footer1.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Footer2Component } from './footer2/footer2.component';
import { Footer3Component } from './footer3/footer3.component';
import { Footer4Component } from './footer4/footer4.component';

@NgModule({
    declarations: [Footer1Component,Footer2Component, Footer3Component, Footer4Component],
    imports: [ CommonModule, IonicModule],
    exports: [Footer1Component, Footer2Component,Footer3Component,Footer4Component],
})
export class FeatureModule {}
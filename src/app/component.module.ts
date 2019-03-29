import  { NgModule } from '@angular/core';
import { Footer1Component } from './footer1/footer1.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
    declarations: [Footer1Component,Footer2Component],
    imports: [ CommonModule, IonicModule],
    exports: [Footer1Component, Footer2Component],
})
export class FeatureModule {}
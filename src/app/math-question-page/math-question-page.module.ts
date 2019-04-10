import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MathQuestionPagePage } from './math-question-page.page';
import { FeatureModule } from '../component.module';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: MathQuestionPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    IonicModule,
    FeatureModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MathQuestionPagePage]
})
export class MathQuestionPagePageModule {}

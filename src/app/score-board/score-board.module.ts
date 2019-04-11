import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScoreBoardPage } from './score-board.page';
import { FeatureModule } from '../component.module';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ScoreBoardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureModule,
    TranslateModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScoreBoardPage]
})
export class ScoreBoardPageModule {}

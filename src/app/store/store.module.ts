import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StorePage } from './store.page';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureModule } from '../component.module';


const routes: Routes = [
  {
    path: '',
    component: StorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FeatureModule,
    IonicModule,
      TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StorePage]
})
export class StorePageModule {}

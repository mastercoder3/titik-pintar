import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoreOVOVersionPage } from './store-ovo-version.page';
import { FeatureModule } from '../component.module';

const routes: Routes = [
  {
    path: '',
    component: StoreOVOVersionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeatureModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoreOVOVersionPage]
})
export class StoreOVOVersionPageModule {}

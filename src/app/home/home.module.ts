import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FeatureModule } from '../component.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProfilePage } from '../profile/profile.page';


@NgModule({
  imports: [
    CommonModule,
    FeatureModule,  
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

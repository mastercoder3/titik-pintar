import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'featured-screen', loadChildren: './featured-screen/featured-screen.module#FeaturedScreenPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'store-ovo-version', loadChildren: './store-ovo-version/store-ovo-version.module#StoreOVOVersionPageModule' },
  { path: 'math-page', loadChildren: './math-page/math-page.module#MathPagePageModule' },
  { path: 'math-question-page', loadChildren: './math-question-page/math-question-page.module#MathQuestionPagePageModule' },
  { path: 'reward-page', loadChildren: './reward-page/reward-page.module#RewardPagePageModule' },
  { path: 'score-board', loadChildren: './score-board/score-board.module#ScoreBoardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

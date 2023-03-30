import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllQuestionsComponent } from "./components/allQuestions/allQuestions.component";
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [
    AllQuestionsComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    RouterModule.forChild(routes),
  ]
})
export class AllQuestionsModule {}

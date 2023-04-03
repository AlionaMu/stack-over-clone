import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import {AllQuestionsComponent} from './components/allQuestions/allQuestions.component'
import { AllQuestionsService } from './services/allQuestions.service'
import { GetAllQuestionsEffect } from './store/effects/getAllQuestions.effect'
import { reducers } from './store/reducers'

const routes: Routes = [
  {
    path: '',
    component: AllQuestionsComponent,
  },
]

@NgModule({
  declarations: [AllQuestionsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetAllQuestionsEffect]),
    StoreModule.forFeature('allQuestions', reducers),
    RouterModule.forChild(routes)
  ],
  providers: [AllQuestionsService],
})
export class AllQuestionsModule {}

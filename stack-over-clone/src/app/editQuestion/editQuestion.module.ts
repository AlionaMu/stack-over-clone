import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {QuestionFormModule} from 'src/app/shared/modules/questionForm/questionForm.module'
// import { LoadingModule } from '../shared/modules/loading/loading.module';
import {EditQuestionComponent} from './components/editQuestion/editQuestion.component'
import {EditQuestionService} from '../shared/services/editQuestion.service'
import {SharedQuestionService} from '../shared/services/sharedQuestion.service'
import {GetQuestionEffect} from './store/effects/getQuestion.effect'
import {UpdateQuestionEffect} from './store/effects/updateQuestion.effect'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'questions/:slug/edit',
    component: EditQuestionComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuestionFormModule,
    // LoadingModule,
    EffectsModule.forFeature([GetQuestionEffect, UpdateQuestionEffect]),
    StoreModule.forFeature('editQuestion', reducers),
  ],
  declarations: [EditQuestionComponent],
  providers: [EditQuestionService, SharedQuestionService],
})
export class EditQuestionModule {}

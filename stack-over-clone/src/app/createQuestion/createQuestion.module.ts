import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {QuestionFormModule} from '../shared/modules/questionForm/questionForm.module'
import {CreateQuestionService} from './services/createQuestion.service'
import {CreateQuestionEffect} from './store/effects/createQuestion.effect'
import {CreateQuestionComponent} from './components/createQuestion/createQuestion.component'
import {EffectsModule} from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


const routes = [
  {
    path: 'questions/new',
    component: CreateQuestionComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuestionFormModule,
    EffectsModule.forFeature([CreateQuestionEffect]),
    StoreModule.forFeature('createQuestion', reducers),
    AngularFirestoreModule
  ],
  declarations: [CreateQuestionComponent],
  providers: [CreateQuestionService]
})
export class CreateQuestionModule {}

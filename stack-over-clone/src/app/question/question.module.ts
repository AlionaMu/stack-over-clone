import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {QuestionService} from 'src/app/question/services/question.service'
import {GetQuestionEffect} from './store/effects/getQuestion.effect'
import {DeleteQuestionEffect} from './store/effects/deleteQuestion.effect'
import {reducers} from './store/reducers'
import {CommentFormComponent} from './components/commentForm/commentForm.component'
import {QuestionComponent} from './components/question/question.component'
import {SharedQuestionService} from '../shared/services/sharedQuestion.service'
import {MatButtonModule} from '@angular/material/button'
import {ReactiveFormsModule} from '@angular/forms'
import {EditQuestionService} from 'src/app/shared/services/editQuestion.service'
import {UpdateQuestionEffect} from './store/effects/updateQuestion.effect'
import {ConvertDataService} from '../shared/services/convertData.service'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatIconModule} from '@angular/material/icon'

// import { LoadingModule } from '../shared/modules/loading/loading.module';
// import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
// import { TagListModule } from '../shared/modules/tagList/tagList.module';

const routes = [
  {
    path: 'questions/:slug',
    component: QuestionComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      GetQuestionEffect,
      DeleteQuestionEffect,
      UpdateQuestionEffect,
    ]),
    StoreModule.forFeature('question', reducers),
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    // LoadingModule,
    // ErrorMessageModule,
    // TagListModule,
  ],
  declarations: [QuestionComponent, CommentFormComponent],
  exports: [],
  providers: [
    SharedQuestionService,
    QuestionService,
    EditQuestionService,
    ConvertDataService,
  ],
})
export class QuestionModule {}

import {FilterByAuthorPipe} from './pipes/filterByAuthor.pipe'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {AllQuestionsComponent} from './components/allQuestions/allQuestions.component'
import {AllQuestionsService} from './services/allQuestions.service'
import {GetAllQuestionsEffect} from './store/effects/getAllQuestions.effect'
import {reducers} from './store/reducers'

import {isAnsweredPipe} from './pipes/isAnswered.pipe'
import {FilterByDatePipe} from './pipes/filterByDate.pipe'
import {FilterByTagPipe} from './pipes/filterByTag.pipe'
import {SortByDatePipe} from './pipes/sortByDate.pipe'

import {AddButtonComponent} from './components/addButton/addButton.component'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

const routes: Routes = [
  {
    path: '',
    component: AllQuestionsComponent,
  },
]

@NgModule({
  declarations: [
    AllQuestionsComponent,
    AddButtonComponent,
    isAnsweredPipe,
    FilterByDatePipe,
    FilterByTagPipe,
    SortByDatePipe,
    FilterByAuthorPipe,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetAllQuestionsEffect]),
    StoreModule.forFeature('allQuestions', reducers),
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
  ],
  providers: [AllQuestionsService],
})
export class AllQuestionsModule {}

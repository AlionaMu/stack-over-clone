import {SettingsService} from './../../shared/services/settings.service'
import {AngularFirestore} from '@angular/fire/compat/firestore'
import {getFirestore} from '@angular/fire/firestore'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {QuestionInputInterface} from 'src/app/shared/types/questionInput.interface'
import {SettingPanelService} from '../services/settingPanel.service'

@Component({
  selector: 'app-setting-panel',
  templateUrl: './settingPanel.component.html',
  styleUrls: ['./settingPanel.component.scss'],
})
export class SettingPanelComponent implements OnInit {
  initialValues: QuestionInputInterface = {
    title: '',
    body: '',
    tags: [],
    date: 0,
    slug: '',
    comments: [],
  }

  public isSubmitting$: Observable<boolean | null> = {} as Observable<boolean>
  public backendErrors$: Observable<BackendErrorsInterface | null> =
    {} as Observable<BackendErrorsInterface | null>

  public isSettingsOpen: boolean = false

  constructor(
    private store: Store,
    public service: SettingPanelService,
    public firestore: AngularFirestore,
    public settingsService: SettingsService,
  ) {}

  ngOnInit(): void {}

  toggleResultsPanel(): void {
    this.isSettingsOpen = !this.isSettingsOpen
  }

  clickIsAnswered(value: boolean | null): void {
    this.settingsService.setAnswered(value)
  }
}

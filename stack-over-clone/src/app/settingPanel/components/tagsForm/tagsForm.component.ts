import {SettingsService} from 'src/app/shared/services/settings.service'
import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {QuestionCategory} from 'src/app/shared/constants'
import {SetMapToArrayService} from 'src/app/shared/services/setMapToArray.service'

@Component({
  selector: 'app-tags-form',
  templateUrl: './tagsForm.component.html',
  styleUrls: ['./tagsForm.component.scss'],
})
export class TagsFormComponent implements OnInit {
  public form: FormGroup = {} as FormGroup
  public tags: string[] = Object.values(QuestionCategory)
  public tagsSet = new Map()
  public tagsArray: string[] = []

  constructor(
    private fb: FormBuilder,
    public settingsService: SettingsService,
    public service: SetMapToArrayService,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  onCheckboxChange($event: any) {
    this.tagsSet.set(
      $event.target.value,
      !this.tagsSet.get($event.target.value),
    )
    this.settingsService.setFilterByTag(
      this.service.setMapToArray(this.tagsSet),
    )
  }

  initializeForm(): void {
    this.form = this.fb.group({
      tags: [this.tags],
    })
  }
}

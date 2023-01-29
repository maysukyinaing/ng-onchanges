import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit{
  versionForm = new FormGroup(
    {version:new FormControl('',[Validators.pattern('([0-9]+)\.([0-9]+)\.([0-9]+)')])}
  )
  versionName:string = '0.0.0'

  constructor() {
  }
  ngOnInit(): void {
    this.versionForm.get('version')?.setValue(this.versionName)
  }
  formSubmit() {
    if(!this.versionForm.valid) {
      alert('Invalid version value.Please use symatic versioning')
      return;
    }
    this.versionName = this.versionForm.get('version')?.value!;
  }

}

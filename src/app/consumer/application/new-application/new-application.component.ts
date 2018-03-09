import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  newApplicationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    // New application form for user.
    this.newApplicationForm = new FormGroup({
      'applicantName': new FormControl(null),
      'fatherName_husbandName': new FormControl(null),
      'contactNumber': new FormControl(null),
      'email': new FormControl(null),
      'connectionAddress': new FormControl(null),
      'permanentAddress': new FormControl(null),
      'aadharNumber': new FormControl(null),
      'connectionCategory': new FormControl(null),
      'connectionType': new FormControl(null),
      'loadDemand': new FormControl(null),
      'voltageSupply': new FormControl(null)
    });
  }
  onNewApplicationSubmit() {
    console.log(this.newApplicationForm.value);
  }
}

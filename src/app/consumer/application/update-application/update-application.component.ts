import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {
  updateApplicationForm: FormGroup;
  constructor() { }

  ngOnInit() {
  //  Update Application form of user
    this.updateApplicationForm = new FormGroup({

    });
  }

}

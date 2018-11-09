import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  legalCheckbox:            boolean = false;
  vehicles:                 object;
  input:                    object;
  updateMileage = new FormGroup({
    updateMileageInput: new FormControl('')
  });

  constructor() { }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  onSubmit(): void {
    if (this.legalCheckbox) {
    console.log('click the update form', this.updateMileage.value);
    }
  }

  ngOnInit() {

    /* To Do: think of a better way to use the dynamic forms instead of the regular reactive form*/

    this.vehicles = [
      {
        vehicle: '2016 RAM 1500 SLT',
        mileage: 0,
        lastupdate: '10/10/10'
      },
      {
        vehicle: '1998 HONDA CR-V LX',
        mileage: 100,
        lastupdate: '10/10/10'
      }
    ];
  }

}

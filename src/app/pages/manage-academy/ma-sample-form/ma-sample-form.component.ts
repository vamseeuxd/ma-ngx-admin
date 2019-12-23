import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import * as _ from 'lodash';
import {StudentDetails} from '../../../@ma-core/student-details/student-details.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./ma-sample-form.component.scss'],
  templateUrl: './ma-sample-form.component.html',
})
export class MaSampleFormComponent {

  /*  --------------------------------------------------------------------------  */
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  /*  --------------------------------------------------------------------------  */
  studentTypeOptions = [
    {label: 'DAY SCHOLAR', value: 'DAY SCHOLAR'},
    {label: 'HOSTEL', value: 'HOSTEL'},
  ];
  classOptions = [
    {label: '1st', value: '1'},
    {label: '2nd', value: '2'},
  ];
  nationalityOptions = [
    {label: 'Indian', value: '1'},
    {label: 'American', value: '2'},
  ];
  categoryOptions = [
    {label: 'EWS', value: 'EWS'},
    {label: 'GENERAL', value: 'GENERAL'},
    {label: 'OBC', value: 'OBC'},
    {label: 'SC/ST', value: 'SC/ST'},
    {label: 'STAFF', value: 'STAFF'},
  ];
  religionOptions = [
    {'label': '--Select Religion--', 'value': '--Select Religion--'},
    {'label': 'Muslim', 'value': 'Muslim'},
    {'label': 'Sikh', 'value': 'Sikh'},
    {'label': 'Christian', 'value': 'Christian'},
    {'label': 'Buddhist', 'value': 'Buddhist'},
    {'label': 'Jainism', 'value': 'Jainism'},
    {'label': 'Others', 'value': 'Others'},
    {'label': 'Hindu', 'value': 'Hindu'},
  ];
  studentDetails = [
    {defaultValue: 'Vamsee Kalyan', required: true, type: 'input', fieldName: 'studentFirstName'},
    {defaultValue: '', required: false, type: 'input', fieldName: 'middleName'},
    {defaultValue: '', required: true, type: 'input', fieldName: 'lastName'},
    {defaultValue: '', required: true, type: 'select', fieldName: 'gender', options: this.genderOptions},
    {defaultValue: '', required: true, type: 'input', fieldName: 'dateOfBirth'},
    {defaultValue: '', required: true, type: 'select', fieldName: 'category', options: this.categoryOptions},
    {defaultValue: '', required: true, type: 'input', fieldName: 'studentType', options: this.studentTypeOptions},
    {defaultValue: '', required: true, type: 'select', fieldName: 'class', options: this.classOptions},
    {defaultValue: '', required: false, type: 'input', fieldName: 'motherTongue'},
    {defaultValue: '', required: true, type: 'input', fieldName: 'emailId'},
    {defaultValue: '', required: false, type: 'select', fieldName: 'religion', options: this.religionOptions},
    {defaultValue: '', required: false, type: 'input', fieldName: 'previousSchool'},
    {defaultValue: '', required: true, type: 'input', fieldName: 'mobileNo'},
    {defaultValue: '', required: false, type: 'input', fieldName: 'telephone'},
    {defaultValue: '', required: true, type: 'select', fieldName: 'nationality', options: this.nationalityOptions},
    {defaultValue: '', required: false, type: 'input', fieldName: 'studentPhoto'},
  ];

  /*  --------------------------------------------------------------------------  */
  constructor(private studentDetailsService: StudentDetails) {

    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: this.studentDetails.map(
          controller => {
            return {
              key: controller.fieldName,
              id: controller.fieldName,
              type: controller.type,
              defaultValue: controller.defaultValue,
              name: controller.fieldName,
              className: 'col-4 col-md-4 col-sm-6 col-xs-12 col-lg-4 col-xl-4',
              templateOptions: {
                label: _.startCase(controller.fieldName),
                required: controller.required,
                options: controller.options ? controller.options : [],
              },
            };
          },
        ),
      },
    ];
    this.studentDetailsService.addItem('vamsee Kalyan');
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }

  /*  --------------------------------------------------------------------------  */
}

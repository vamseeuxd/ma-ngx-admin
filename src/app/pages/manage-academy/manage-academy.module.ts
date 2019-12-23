import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import {ThemeModule} from '../../@theme/theme.module';
import {MaSampleFormComponent} from './ma-sample-form/ma-sample-form.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {validationMessages} from './form-validation-messages';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormlyModule.forRoot({validationMessages: validationMessages}),
    FormlyBootstrapModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    MaSampleFormComponent,
  ],
})
export class ManageAcademyModule {
}

import { NgModule } from '@angular/core';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatTableModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import { AddDialog } from '../mgt01/mgt010301/add-dialog.component';
import { SelectFunComponent } from '../mgt01/mgt010301/select-fun/select-fun.component';

export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatMomentDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS }
  ],
  entryComponents: [AddDialog, SelectFunComponent]
})
export class ShareModule { }

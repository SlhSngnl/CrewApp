import { Component , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crew } from '../crew.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-crew-popup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, TranslateModule,ReactiveFormsModule],
  templateUrl: './crew-popup.component.html',
  styleUrl: './crew-popup.component.css'
})

export class CrewPopupComponent {
    crewForm: FormGroup;
    editMode = false;
  
    constructor(
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<CrewPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { crew: Crew }
    ) {
      this.editMode = !!data.crew; 
      this.crewForm = this.formBuilder.group({
        firstName: [data?.crew?.firstName || '', Validators.required],
        lastName: [data?.crew?.lastName || '', Validators.required],
        nationality: [data?.crew?.nationality || '', Validators.required],
        title: [data?.crew?.title || '', Validators.required],
        daysOnBoard: [data?.crew?.daysOnBoard || '', Validators.required],
        dailyRate: [data?.crew?.dailyRate || '', Validators.required],
        currency: [data?.crew?.currency || '', Validators.required],
        totalIncome: [data?.crew?.totalIncome || '', Validators.required]
      });
    }
  
    Save(): void {
      if (this.crewForm.valid) {
        this.dialogRef.close(this.crewForm.value); 
      }
    }
  
    Cancel(): void {
      this.dialogRef.close();
    }
  }
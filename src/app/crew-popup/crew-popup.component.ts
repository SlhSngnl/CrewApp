import { Component , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormArray} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { Crew } from '../crew.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { Certificate, CertificateService } from '../certificate.service';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core'; 


@Component({
  selector: 'app-crew-popup',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, TranslateModule,ReactiveFormsModule,MatDatepicker,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './crew-popup.component.html',
  styleUrl: './crew-popup.component.css',
  providers: [
    provideNativeDateAdapter()
  ],
})

export class CrewPopupComponent {
    crewForm: FormGroup;
    editMode = false;
    certificateList:Certificate[];
  
    constructor(
      private certificateService: CertificateService,
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<CrewPopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { crew: Crew }
    ) {
      this.certificateList=this.certificateService.getCertificateList();
      this.editMode = !!data.crew; 
      this.crewForm = this.formBuilder.group({
        id: [data?.crew?.id],
        firstName: [data?.crew?.firstName || '', Validators.required],
        lastName: [data?.crew?.lastName || '', Validators.required],
        nationality: [data?.crew?.nationality || '', Validators.required],
        title: [data?.crew?.title || '', Validators.required],
        daysOnBoard: [data?.crew?.daysOnBoard || '', Validators.required],
        dailyRate: [data?.crew?.dailyRate || '', Validators.required],
        currency: [data?.crew?.currency || '', Validators.required],
        totalIncome: [data?.crew?.totalIncome || '', Validators.required],
        discount:0,
        certificates: this.formBuilder.array([])
      });

      if (data?.crew?.certificates) {
        this.setCertificates(data.crew.certificates);
      }

      this.crewForm.get('daysOnBoard')?.valueChanges.subscribe(() => this.calculateTotalIncome());
      this.crewForm.get('dailyRate')?.valueChanges.subscribe(() => this.calculateTotalIncome());
   
    }
    calculateTotalIncome() {
      const daysOnBoard = this.crewForm.get('daysOnBoard')?.value || 0;
      const dailyRate = this.crewForm.get('dailyRate')?.value || 0;
      const totalIncome = daysOnBoard * dailyRate;
      this.crewForm.get('totalIncome')?.setValue(totalIncome, { emitEvent: false });
    }

    get certificates(): FormArray {
      return this.crewForm.get('certificates') as FormArray;
    }
  
    setCertificates(certificates: any[]) {
      certificates.forEach(c => {
        this.certificates.push(this.createCertificateGroup(c)); 
      });
    }
  
    createCertificateGroup(certificate?: any): FormGroup {
      return this.formBuilder.group({
        type: [certificate?.type || '', Validators.required],
        issueDate: [certificate?.issueDate || '', Validators.required],
        expireDate: [certificate?.expireDate || '', Validators.required],
      });
    }
  
    addCertificate(): void {
      this.certificates.push(this.createCertificateGroup());
    }
  
    removeCertificate(index: number): void {
      this.certificates.removeAt(index);
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
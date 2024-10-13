import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormArray} from '@angular/forms';
import { CertificateService,Certificate } from '../certificate.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-certificate-type',
  standalone: true,
  imports: [    
    CommonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule, 
    TranslateModule,
    RouterModule,
    MatTableModule
  ],
  templateUrl: './certificate-type.component.html',
  styleUrl: './certificate-type.component.css'
})


export class CertificateTypeComponent {
  certificateList:Certificate[];
  certificateTypeForm: FormGroup;

  constructor(private fb: FormBuilder, private certificateService: CertificateService) {
    this.certificateList = certificateService.getCertificateList();
    this.certificateTypeForm = this.fb.group({
      type: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.certificateTypeForm.valid) {
      const newCertificateType = this.certificateTypeForm.value;
      this.certificateService.addCertificate(newCertificateType);
      this.certificateList = [...this.certificateService.getCertificateList()];
      this.certificateTypeForm.reset();
    }
  }
}

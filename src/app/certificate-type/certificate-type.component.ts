import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule,FormArray} from '@angular/forms';
import { CertificateService } from '../certificate.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


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
    RouterModule
  ],
  templateUrl: './certificate-type.component.html',
  styleUrl: './certificate-type.component.css'
})


export class CertificateTypeComponent {
  certificateTypeForm: FormGroup;

  constructor(private fb: FormBuilder, private certificateService: CertificateService) {
    this.certificateTypeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.certificateTypeForm.valid) {
      const newCertificateType = this.certificateTypeForm.value;
      this.certificateService.addCertificate(newCertificateType);
      this.certificateTypeForm.reset();
    }
  }
}

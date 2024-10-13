import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogContent,MatDialogActions,MatDialogRef } from '@angular/material/dialog';
import { MatList, MatListItem } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe,CommonModule } from '@angular/common';
import { PopupTitleComponent } from '../popup-title/popup-title.component'; 


@Component({
  selector: 'app-certificates-popup',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,MatList,MatListItem, TranslateModule,DatePipe,CommonModule,PopupTitleComponent],
  templateUrl: './certificates-popup.component.html',
  styleUrl: './certificates-popup.component.css'
})

export class CertificatesPopupComponent {
  constructor(public dialogRef: MatDialogRef<CertificatesPopupComponent>,@Inject(MAT_DIALOG_DATA) public data: { certificates: any[] }) {}

  Cancel(): void {
    this.dialogRef.close();
  }
}

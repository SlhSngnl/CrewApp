import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogContent,MatDialogActions } from '@angular/material/dialog';
import { MatList, MatListItem } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe,CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates-popup',
  standalone: true,
  imports: [MatDialogContent,MatDialogActions,MatList,MatListItem, TranslateModule,DatePipe,CommonModule],
  templateUrl: './certificates-popup.component.html',
  styleUrl: './certificates-popup.component.css'
})

export class CertificatesPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { certificates: any[] }) {}
}
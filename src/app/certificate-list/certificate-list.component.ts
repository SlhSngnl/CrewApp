import { Component, Input } from '@angular/core';
import { MatListItem , MatList } from '@angular/material/list';
import { CrewService } from '../crew.service';
import { Certificate } from '../certificate.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [CommonModule,MatList,MatListItem,TranslateModule],
  templateUrl: './certificate-list.component.html',
  styleUrl: './certificate-list.component.css'
})
export class CertificateListComponent {
@Input() crewId!:number;
certificates:Certificate[]=[];

constructor(private crewService:CrewService){}

ngOnInit() {
  if (this.crewId !== undefined) {
    this.certificates = this.crewService.getCertificatesByCrewId(this.crewId);
  }
}
}

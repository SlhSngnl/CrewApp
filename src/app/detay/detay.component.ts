import { Component } from '@angular/core';
import { CrewService, Crew } from '../crew.service';
import { ActivatedRoute } from '@angular/router';
import { MatTabGroup , MatTab } from '@angular/material/tabs'; 
import { MatList, MatListItem} from '@angular/material/list'; 
import { TranslateModule } from '@ngx-translate/core';
import { DatePipe , CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CertificateListComponent } from '../certificate-list/certificate-list.component';
@Component({
  selector: 'app-detay',
  standalone: true,
  imports: [MatTabGroup, MatTab, TranslateModule,MatList, MatListItem,DatePipe,CommonModule,RouterModule,MatButtonModule,CertificateListComponent],
  templateUrl: './detay.component.html',
  styleUrl: './detay.component.css'
})

export class DetayComponent {
  crew: Crew | undefined;

  constructor(
    private route: ActivatedRoute, 
    private crewService: CrewService 
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.crew = this.crewService.getCrewById(id); 
  }
}
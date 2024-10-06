import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { CrewService, Crew } from '../crew.service';
import { CrewPopupComponent } from '../crew-popup/crew-popup.component';
import { MatDialog } from '@angular/material/dialog'; 
import { CertificatesPopupComponent } from '../certificates-popup/certificates-popup.component';


@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    MatTableModule
  ],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css'
})

export class AnasayfaComponent {
crewList:Crew[];
visibleColumns:string[]= ['firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate', 'totalIncome', 'certificates','actions'];

constructor(private crewService: CrewService, private dialog:MatDialog) {
  this.crewList = this.crewService.getCrewList();
}

DeleteCrew(id: number): void {
  console.log(id);
  this.crewService.deleteCrew(id);  
  this.crewList = [...this.crewService.getCrewList()]; 
}

openCertificatesDialog(crew:Crew) {
  const dialogRef = this.dialog.open(CertificatesPopupComponent, {
    width: '500px',
    height:'500px',
    data: { certificates: crew.certificates },
  });

}

openAddCrewDialog(): void {
  const dialogRef = this.dialog.open(CrewPopupComponent, {
    width: '600px',
    data: { crew: null } 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.crewService.addCrew(result); 
      this.crewList = [...this.crewService.getCrewList()];
    }
  });
}

openEditCrewDialog(id: number): void {
  console.log(id)
  var index = this.crewList.findIndex(x=>x.id==id);
  var crew = this.crewList[index];
  const dialogRef = this.dialog.open(CrewPopupComponent, {
    width: '600px',
    data: { crew } 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.crewService.updateCrew(result); 
      this.crewList = [...this.crewService.getCrewList()]; 
    }
  });
}
}

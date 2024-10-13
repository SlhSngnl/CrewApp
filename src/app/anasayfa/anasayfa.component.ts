import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { CrewService, Crew } from '../crew.service';
import { CrewPopupComponent } from '../crew-popup/crew-popup.component';
import { MatDialog } from '@angular/material/dialog'; 
import { CertificatesPopupComponent } from '../certificates-popup/certificates-popup.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-anasayfa',
  standalone: true,
  imports: [
    TranslateModule,
    RouterModule,
    MatTableModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatError,
    MatIconModule
  ],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css'
})

export class AnasayfaComponent {
crewList:Crew[];
visibleColumns:string[]= ['firstName', 'lastName', 'nationality', 'title', 'daysOnBoard', 'dailyRate','discount', 'totalIncome','currency', 'certificates','actions'];
totalIncomeByCurrency: { [key: string]: number } = {};
currencies: string[] = [];

constructor(private crewService: CrewService, private dialog:MatDialog) {
  this.crewList = this.crewService.getCrewList();
  this.calculateTotalIncome();

}

DeleteCrew(id: number): void {
  console.log(id);
  this.crewService.deleteCrew(id);  
  this.crewList = [...this.crewService.getCrewList()]; 
  this.calculateTotalIncome();
}

discountIncome(discount: number,id:number) {
  this.crewService.discountIncome(discount,id);
  this.crewList = [...this.crewService.getCrewList()]; 
  this.calculateTotalIncome();
}

openCertificatesDialog(id:number) {
  const dialogRef = this.dialog.open(CertificatesPopupComponent, {
    width: '500px',
    height:'500px',
    data: { crewId: id },
  });

}

openAddCrewDialog(): void {
  const dialogRef = this.dialog.open(CrewPopupComponent, {
    width: '900px',
    maxWidth:'90vw',
    data: { crew: null } 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.crewService.addCrew(result); 
      this.crewList = [...this.crewService.getCrewList()];
      this.calculateTotalIncome();
    }
  });
  
}

openEditCrewDialog(id: number): void {
  console.log(id)
  var index = this.crewList.findIndex(x=>x.id==id);
  var crew = this.crewList[index];
  const dialogRef = this.dialog.open(CrewPopupComponent, {
    width: '900px',
    maxWidth:'90vw',
    data: { crew } 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.crewService.updateCrew(result); 
      this.crewList = [...this.crewService.getCrewList()];
      this.calculateTotalIncome(); 
    }
  });
}

calculateTotalIncome() {
  const incomeByCurrency: { [key: string]: number } = {};

  this.crewList.forEach(crew => {
    if (!incomeByCurrency[crew.currency]) {
      incomeByCurrency[crew.currency] = 0;
    }
    incomeByCurrency[crew.currency] += crew.totalIncome;
  });

  this.totalIncomeByCurrency = incomeByCurrency;
  this.currencies = Object.keys(this.totalIncomeByCurrency);
}

}

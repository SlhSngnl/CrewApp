import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { CrewService, Crew } from '../crew.service';

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

constructor(private crewService: CrewService) {
  this.crewList = this.crewService.getCrewList();
}

DeleteCrew(id: number): void {
  console.log(id);
  this.crewService.deleteCrew(id);  
  this.crewList = [...this.crewService.getCrewList()]; 
}

}

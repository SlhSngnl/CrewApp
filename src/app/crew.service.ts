import { Injectable } from '@angular/core';
import { Certificate, CertificateService } from './certificate.service';

export interface Crew {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  discount:number,
  totalIncome: number;
  certificates: Certificate[];
}


@Injectable({
  providedIn: 'root'
})
export class CrewService {
  constructor(private certificateService: CertificateService) {}

  crewList: Crew[] = [
    {
      id: 1,
      firstName: 'Salih',
      lastName: 'Şengönül',
      nationality: 'USA',
      title: 'Captain',
      daysOnBoard: 120,
      dailyRate: 200,
      currency: 'USD',
      discount:0,
      totalIncome: 24000,
      certificates: [
        { type: 'Driving License',description:"Driving License", issueDate: new Date(2015, 0, 1), expireDate: new Date(2025, 0, 1) }, // 1 Ocak 2015 - 1 Ocak 2025
        { type: 'Cooking Certificate',description:"Cooking Certificate", issueDate: new Date(2018, 1, 1), expireDate: new Date(2050, 0, 1) } // 1 Şubat 2018 - 1 Ocak 2050
      ]
    },
    {
      id: 2,
      firstName: 'Batuhan',
      lastName: 'Karahan',
      nationality: 'USA',
      title: 'Cooker',
      daysOnBoard: 100,
      dailyRate: 150,
      currency: 'EUR',
      discount:0,
      totalIncome: 15000,
      certificates: [
        { type: 'Cooking Certificate',description:"Cooking Certificate", issueDate: new Date(2018, 1, 1), expireDate: new Date(2050, 0, 1) } // 1 Şubat 2018 - 1 Ocak 2050
      ]
    },
    {
      id: 3,
      firstName: 'Tibet',
      lastName: 'Erol',
      nationality: 'USA',
      title: 'Mechanicer',
      daysOnBoard: 110,
      dailyRate: 180,
      currency: 'USD',
      discount:0,
      totalIncome: 19800,
      certificates: []
    },
    {
      id: 4,
      firstName: 'Enes',
      lastName: 'Eviz',
      nationality: 'USA',
      title: 'Engineer',
      daysOnBoard: 100,
      dailyRate: 170,
      currency: 'USD',
      discount:0,
      totalIncome: 17000,
      certificates: [
        { type: 'Engineer Certificate',description:"Engineer Certificate", issueDate: new Date(2015, 0, 1), expireDate: new Date(2025, 0, 1) } // 1 Ocak 2015 - 1 Ocak 2025
      ]
    },
    {
      id: 5,
      firstName: 'Mert',
      lastName: 'Tok',
      nationality: 'USA',
      title: 'Cooker',
      daysOnBoard: 120,
      dailyRate: 200,
      currency: 'USD',
      discount:0,
      totalIncome: 24000,
      certificates: [
        { type: 'Cooking Certificate',description:"Cooking Certificate", issueDate: new Date(2015, 0, 1), expireDate: new Date(2025, 0, 1) } // 1 Ocak 2015 - 1 Ocak 2025
      ]
    },
  ];

  getCrewList() {
    return this.crewList;
  }

  addCrew(newCrew: Crew) {
    var lastid=this.crewList[this.crewList.length-1].id;
    newCrew.id=lastid+1;
    this.setCertificatesDescription(newCrew.certificates);
    this.crewList.push(newCrew);
  }

  setCertificatesDescription(certificates:Certificate[]){
      certificates.forEach(certificate=>{
      certificate.description=this.certificateService.getCertificate(certificate.type||'')?.description;
    })
    
  }

  getCrewById(id: number): Crew | undefined {
    return this.crewList.find(crew => crew.id === id);
  }

  updateCrew(updatedCrew: Crew) {
    const index = this.crewList.findIndex(crew => crew.id === updatedCrew.id);
    this.setCertificatesDescription(updatedCrew.certificates);
    this.crewList[index] = updatedCrew;
  }

  deleteCrew(id: number) {
    const index = this.crewList.findIndex(crew => crew.id === id);
    this.crewList.splice(index, 1);
  }

  getCertificatesByCrewId(id:number){
    const index = this.crewList.findIndex(crew => crew.id === id);
    return this.crewList[index].certificates;
  }

  discountIncome(discount: number,id:number) {


    const index = this.crewList.findIndex(crew => crew.id === id);
    var crew = this.crewList[index];
    
    const totalIncomeWithoutDiscount = crew.daysOnBoard * crew.dailyRate;


    if(discount == null || discount == 0 || discount < 0 || discount > 100) 
      {
        this.crewList[index].totalIncome = totalIncomeWithoutDiscount;
    } 
    else 
    {
        this.crewList[index].totalIncome = totalIncomeWithoutDiscount - totalIncomeWithoutDiscount * discount / 100;
    }
  }
}

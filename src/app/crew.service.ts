import { Injectable } from '@angular/core';

export interface Crew {
  id:number,
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  totalIncome: number;
  certificates: Certificate[];
}

export interface Certificate {
  type: string;
  issueDate: Date;
  expiryDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  crewList: Crew[] = [
    {
      id:1,
      firstName: 'Salih',
      lastName: 'Şengönül',
      nationality: 'USA',
      title: 'Captain',
      daysOnBoard: 120,
      dailyRate: 200,
      currency: 'USD',
      totalIncome: 24000,
      certificates: [
        { type: 'Driving License', issueDate: new Date(1,1,2015), expiryDate: new Date(1,1,2025) }
      ]
    },
    {
        id:1,
        firstName: 'Batuhan',
        lastName: 'Karahan',
        nationality: 'USA',
        title: 'Cooker',
        daysOnBoard: 100,
        dailyRate: 150,
        currency: 'EUR',
        totalIncome: 15000,
        certificates: [
          { type: 'Cooking Certificate', issueDate: new Date(1,2,2018), expiryDate: new Date(1,1,2050) }
        ]
      },
      {
        id:1,
        firstName: 'Tibet',
        lastName: 'Erol',
        nationality: 'USA',
        title: 'Mechanicer',
        daysOnBoard: 110,
        dailyRate: 180,
        currency: 'USD',
        totalIncome: 19800,
        certificates: [
          
        ]
      },
      {
        id:1,
        firstName: 'Enes',
        lastName: 'Eviz',
        nationality: 'USA',
        title: 'Engineer',
        daysOnBoard: 100,
        dailyRate: 170,
        currency: 'USD',
        totalIncome: 17000,
        certificates: [
          { type: 'Engineer Certificate', issueDate: new Date(1,1,2015), expiryDate: new Date(1,1,2025) }
        ]
      },
      {
        id:1,
        firstName: 'Defne',
        lastName: 'Şengönül',
        nationality: 'USA',
        title: 'Cooker',
        daysOnBoard: 120,
        dailyRate: 200,
        currency: 'USD',
        totalIncome: 24000,
        certificates: [
          { type: 'Cooking Certificate', issueDate: new Date(1,1,2015), expiryDate: new Date(1,1,2025) }
        ]
      },
  ];

  getCrewList() {
    return this.crewList;
  }
}

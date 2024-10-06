import { Injectable } from '@angular/core';

export interface Crew {
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
  ];

  getCrewList() {
    return this.crewList;
  }
}

import { Injectable } from '@angular/core';



export interface Certificate {
  Name: string;
  Description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CertificateService {

    certificateList: Certificate[] = [
      {
        Name:"Driving License",
        Description: 'Driving License',
      },
      {
        Name:"Cooking Certificate",
        Description: 'Cooking Certificate',
      },
      {
        Name:"Engineer Certificate",
        Description: 'Engineer Certificate',
      },
      
  ];

  getCertificateList() {
    return this.certificateList;
  }

  addCertificate(newCertificate: Certificate) {
    this.certificateList.push(newCertificate);
  }




}

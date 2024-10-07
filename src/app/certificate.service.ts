import { Injectable } from '@angular/core';



export interface Certificate {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CertificateService {

    certificateList: Certificate[] = [
      {
        name:"Driving License",
        description: 'Driving License',
      },
      {
        name:"Cooking Certificate",
        description: 'Cooking Certificate',
      },
      {
        name:"Engineer Certificate",
        description: 'Engineer Certificate',
      },
      
  ];

  getCertificateList() {
    return this.certificateList;
  }

  addCertificate(newCertificate: Certificate) {
    this.certificateList.push(newCertificate);
  }




}

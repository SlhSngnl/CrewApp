import { Injectable } from '@angular/core';



export interface Certificate {
  type?: string;
  description?: string;
  issueDate?: Date;
  expireDate?: Date;
}

@Injectable({
  providedIn: 'root'
})

export class CertificateService {

    certificateList: Certificate[] = [
      {
        type:"Driving License",
        description: 'Driving License',
      },
      {
        type:"Cooking Certificate",
        description: 'Cooking Certificate',
      },
      {
        type:"Engineer Certificate",
        description: 'Engineer Certificate',
      },
      
  ];

  getCertificateList() {
    return this.certificateList;
  }

  getCertificate(type:string){
    return this.certificateList.find(x=>x.type===type);
  }

  addCertificate(newCertificate: Certificate) {
    this.certificateList.push(newCertificate);
  }




}

import { Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { DetayComponent } from './detay/detay.component';
import { CertificateTypeComponent } from './certificate-type/certificate-type.component';

export const routes: Routes = [
    {path:'', component:AnasayfaComponent},
    {path:'detay/:id', component:DetayComponent},
    {path:'certificate-type', component:CertificateTypeComponent}

];

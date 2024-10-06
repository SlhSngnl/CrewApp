import { Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { DetayComponent } from './detay/detay.component';

export const routes: Routes = [
    {path:'', component:AnasayfaComponent},
    {path:'detay/:id', component:DetayComponent}
];

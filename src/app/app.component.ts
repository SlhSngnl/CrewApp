import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrewApp';
  translate: TranslateService=inject(TranslateService);

  changeLanguage(language:string){
    this.translate.use(language);
  }
  
}

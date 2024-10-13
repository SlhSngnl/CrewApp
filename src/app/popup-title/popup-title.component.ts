import { Component,Input, Output,EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-popup-title',
  standalone: true,
  imports: [MatIcon,TranslateModule,MatButton],
  templateUrl: './popup-title.component.html',
  styleUrl: './popup-title.component.css'
})

export class PopupTitleComponent {
  @Input() title!:string;
  @Output() closeFunction: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.closeFunction.emit();
  }
}

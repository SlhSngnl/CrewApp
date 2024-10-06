import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPopupComponent } from './crew-popup.component';

describe('CrewPopupComponent', () => {
  let component: CrewPopupComponent;
  let fixture: ComponentFixture<CrewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

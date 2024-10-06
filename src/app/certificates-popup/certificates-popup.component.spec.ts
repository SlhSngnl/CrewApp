import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesPopupComponent } from './certificates-popup.component';

describe('CertificatesPopupComponent', () => {
  let component: CertificatesPopupComponent;
  let fixture: ComponentFixture<CertificatesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

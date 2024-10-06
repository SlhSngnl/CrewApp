import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetayComponent } from './detay.component';

describe('DetayComponent', () => {
  let component: DetayComponent;
  let fixture: ComponentFixture<DetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

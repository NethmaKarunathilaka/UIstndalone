import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubordinatAcntPopupComponent } from './new-subordinat-acnt-popup.component';

describe('NewSubordinatAcntPopupComponent', () => {
  let component: NewSubordinatAcntPopupComponent;
  let fixture: ComponentFixture<NewSubordinatAcntPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSubordinatAcntPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSubordinatAcntPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

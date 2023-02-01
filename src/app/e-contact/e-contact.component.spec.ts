import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContactComponent } from './e-contact.component';

describe('EContactComponent', () => {
  let component: EContactComponent;
  let fixture: ComponentFixture<EContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

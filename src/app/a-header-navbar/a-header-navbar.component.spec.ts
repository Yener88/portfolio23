import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHeaderNavbarComponent } from './a-header-navbar.component';

describe('AHeaderNavbarComponent', () => {
  let component: AHeaderNavbarComponent;
  let fixture: ComponentFixture<AHeaderNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AHeaderNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AHeaderNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSkillsComponent } from './c-skills.component';

describe('CSkillsComponent', () => {
  let component: CSkillsComponent;
  let fixture: ComponentFixture<CSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExperienceBlockComponent } from './our-experience-block.component';

describe('OurExperienceBlockComponent', () => {
  let component: OurExperienceBlockComponent;
  let fixture: ComponentFixture<OurExperienceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurExperienceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurExperienceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

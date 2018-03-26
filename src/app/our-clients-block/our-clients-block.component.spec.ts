import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsBlockComponent } from './our-clients-block.component';

describe('OurClientsBlockComponent', () => {
  let component: OurClientsBlockComponent;
  let fixture: ComponentFixture<OurClientsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClientsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

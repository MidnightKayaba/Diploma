import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAsBlockComponent } from './about-as-block.component';

describe('AboutAsBlockComponent', () => {
  let component: AboutAsBlockComponent;
  let fixture: ComponentFixture<AboutAsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

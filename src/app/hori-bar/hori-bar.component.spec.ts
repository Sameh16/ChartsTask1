import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriBarComponent } from './hori-bar.component';

describe('HoriBarComponent', () => {
  let component: HoriBarComponent;
  let fixture: ComponentFixture<HoriBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoriBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

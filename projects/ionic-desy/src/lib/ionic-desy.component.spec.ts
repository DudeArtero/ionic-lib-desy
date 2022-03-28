import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicDesyComponent } from './ionic-desy.component';

describe('IonicDesyComponent', () => {
  let component: IonicDesyComponent;
  let fixture: ComponentFixture<IonicDesyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicDesyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicDesyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

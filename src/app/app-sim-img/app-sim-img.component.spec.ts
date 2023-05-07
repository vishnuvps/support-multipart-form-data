import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSimImgComponent } from './app-sim-img.component';

describe('AppSimImgComponent', () => {
  let component: AppSimImgComponent;
  let fixture: ComponentFixture<AppSimImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSimImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSimImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

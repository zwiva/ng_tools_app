import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBarHomeComponent } from './mini-bar-home.component';

describe('MiniBarHomeComponent', () => {
  let component: MiniBarHomeComponent;
  let fixture: ComponentFixture<MiniBarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniBarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

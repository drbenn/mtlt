import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVolumeComponent } from './total-volume.component';

describe('TotalVolumeComponent', () => {
  let component: TotalVolumeComponent;
  let fixture: ComponentFixture<TotalVolumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVolumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

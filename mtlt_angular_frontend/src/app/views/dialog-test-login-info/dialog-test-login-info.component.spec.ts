import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTestLoginInfoComponent } from './dialog-test-login-info.component';

describe('DialogTestLoginInfoComponent', () => {
  let component: DialogTestLoginInfoComponent;
  let fixture: ComponentFixture<DialogTestLoginInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTestLoginInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTestLoginInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

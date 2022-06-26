import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactloginComponent } from './reactlogin.component';

describe('ReactloginComponent', () => {
  let component: ReactloginComponent;
  let fixture: ComponentFixture<ReactloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

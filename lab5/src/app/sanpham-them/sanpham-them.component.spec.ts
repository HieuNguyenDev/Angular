import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamThemComponent } from './sanpham-them.component';

describe('SanphamThemComponent', () => {
  let component: SanphamThemComponent;
  let fixture: ComponentFixture<SanphamThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

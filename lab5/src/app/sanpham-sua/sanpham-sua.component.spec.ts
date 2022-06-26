import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamSuaComponent } from './sanpham-sua.component';

describe('SanphamSuaComponent', () => {
  let component: SanphamSuaComponent;
  let fixture: ComponentFixture<SanphamSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

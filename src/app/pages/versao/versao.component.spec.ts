import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersaoComponent } from './versao.component';

describe('VersaoComponent', () => {
  let component: VersaoComponent;
  let fixture: ComponentFixture<VersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

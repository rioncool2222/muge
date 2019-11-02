import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesananPage } from './pesanan.page';

describe('PesananPage', () => {
  let component: PesananPage;
  let fixture: ComponentFixture<PesananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

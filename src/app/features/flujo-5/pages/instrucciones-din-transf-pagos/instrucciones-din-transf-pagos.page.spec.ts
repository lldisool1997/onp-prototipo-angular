import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesDinTransfPagosPage } from './instrucciones-din-transf-pagos.page';

describe('InstruccionesDinTransfPagosPage', () => {
  let component: InstruccionesDinTransfPagosPage;
  let fixture: ComponentFixture<InstruccionesDinTransfPagosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstruccionesDinTransfPagosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstruccionesDinTransfPagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

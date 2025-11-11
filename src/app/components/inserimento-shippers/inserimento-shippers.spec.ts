import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoShippers } from './inserimento-shippers';

describe('InserimentoShippers', () => {
  let component: InserimentoShippers;
  let fixture: ComponentFixture<InserimentoShippers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserimentoShippers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoShippers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

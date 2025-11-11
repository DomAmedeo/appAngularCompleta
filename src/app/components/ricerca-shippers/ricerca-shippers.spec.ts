import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaShippers } from './ricerca-shippers';

describe('RicercaShippers', () => {
  let component: RicercaShippers;
  let fixture: ComponentFixture<RicercaShippers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaShippers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaShippers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

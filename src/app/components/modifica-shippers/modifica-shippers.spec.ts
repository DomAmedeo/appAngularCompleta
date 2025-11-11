import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaShippers } from './modifica-shippers';

describe('ModificaShippers', () => {
  let component: ModificaShippers;
  let fixture: ComponentFixture<ModificaShippers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificaShippers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificaShippers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

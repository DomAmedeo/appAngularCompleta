import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencaShippers } from './elenca-shippers';

describe('ElencaShippers', () => {
  let component: ElencaShippers;
  let fixture: ComponentFixture<ElencaShippers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencaShippers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencaShippers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

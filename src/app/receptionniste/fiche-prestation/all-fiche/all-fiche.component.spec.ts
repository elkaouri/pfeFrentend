import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFicheComponent } from './all-fiche.component';

describe('AllFicheComponent', () => {
  let component: AllFicheComponent;
  let fixture: ComponentFixture<AllFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

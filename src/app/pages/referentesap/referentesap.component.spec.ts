import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentesapComponent } from './referentesap.component';

describe('ReferentesapComponent', () => {
  let component: ReferentesapComponent;
  let fixture: ComponentFixture<ReferentesapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferentesapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferentesapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

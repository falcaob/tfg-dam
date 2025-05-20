import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentesahComponent } from './referentesah.component';

describe('ReferentesahComponent', () => {
  let component: ReferentesahComponent;
  let fixture: ComponentFixture<ReferentesahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferentesahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferentesahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

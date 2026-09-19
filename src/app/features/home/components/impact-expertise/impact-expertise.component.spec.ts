import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactExpertiseComponent } from './impact-expertise.component';

describe('ImpactExpertiseComponent', () => {
  let component: ImpactExpertiseComponent;
  let fixture: ComponentFixture<ImpactExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

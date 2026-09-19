import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryPageComponent } from './industry-page.component';

describe('IndustryPageComponent', () => {
  let component: IndustryPageComponent;
  let fixture: ComponentFixture<IndustryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

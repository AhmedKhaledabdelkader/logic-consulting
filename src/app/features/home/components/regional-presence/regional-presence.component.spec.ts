import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalPresenceComponent } from './regional-presence.component';

describe('RegionalPresenceComponent', () => {
  let component: RegionalPresenceComponent;
  let fixture: ComponentFixture<RegionalPresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalPresenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

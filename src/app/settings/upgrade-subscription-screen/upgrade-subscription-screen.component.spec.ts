import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeSubscriptionScreenComponent } from './upgrade-subscription-screen.component';

describe('UpgradeSubscriptionScreenComponent', () => {
  let component: UpgradeSubscriptionScreenComponent;
  let fixture: ComponentFixture<UpgradeSubscriptionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeSubscriptionScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeSubscriptionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

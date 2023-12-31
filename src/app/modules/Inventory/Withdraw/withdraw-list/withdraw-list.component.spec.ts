import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawListComponent } from './withdraw-list.component';

describe('WithdrawListComponent', () => {
  let component: WithdrawListComponent;
  let fixture: ComponentFixture<WithdrawListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

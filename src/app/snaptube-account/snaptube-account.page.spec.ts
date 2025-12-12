import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnaptubeAccountPage } from './snaptube-account.page';

describe('SnaptubeAccountPage', () => {
  let component: SnaptubeAccountPage;
  let fixture: ComponentFixture<SnaptubeAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SnaptubeAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

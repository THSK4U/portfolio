import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglArticlesComponent } from './singl-articles.component';

describe('SinglArticlesComponent', () => {
  let component: SinglArticlesComponent;
  let fixture: ComponentFixture<SinglArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

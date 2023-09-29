import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategorieComponent } from './detailcategorie.component';

describe('DetailcategorieComponent', () => {
  let component: DetailcategorieComponent;
  let fixture: ComponentFixture<DetailcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

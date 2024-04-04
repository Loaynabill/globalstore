import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdeatilComponent } from './productdeatil.component';

describe('ProductdeatilComponent', () => {
  let component: ProductdeatilComponent;
  let fixture: ComponentFixture<ProductdeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductdeatilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductdeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

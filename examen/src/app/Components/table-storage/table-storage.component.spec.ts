import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStorageComponent } from './table-storage.component';

describe('TableStorageComponent', () => {
  let component: TableStorageComponent;
  let fixture: ComponentFixture<TableStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

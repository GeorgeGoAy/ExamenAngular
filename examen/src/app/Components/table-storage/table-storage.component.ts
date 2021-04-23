import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SaveRegisterService } from 'src/app/Service/save-register.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table-storage',
  templateUrl: './table-storage.component.html',
  styleUrls: ['./table-storage.component.css']
})
export class TableStorageComponent implements OnInit {

  displayedColumns: string[] = ['first', 'last', 'email', 'address', 'created', 'balance'];
  dataSource;
  @ViewChild(FormComponent , { static : true }) form: FormComponent;
  constructor(private saveRegister:SaveRegisterService) {
      this.loadData();
  }

  ngOnInit(): void {
    this.saveRegister.getClick().subscribe( () => {
      this.loadData();
    });
  }

  loadData(){
    let data = this.saveRegister.getRegistros();
    this.dataSource = new MatTableDataSource( data );
  }

  
}

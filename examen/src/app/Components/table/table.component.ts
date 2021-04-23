import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiConsumeService } from 'src/app/Service/api-consume.service';

export interface ApiConsume {
  first: string;
  last: string;
  email: string;
  address: string;
  created:string;
  balance:string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['first', 'last', 'email', 'address', 'created', 'balance'];
  dataSource;
  @ViewChild(MatPaginator , { static : true }) paginator: MatPaginator;
  constructor(private apiConsume:ApiConsumeService) { 
    apiConsume.getRandomApi().subscribe( reponse => {
      this.dataSource = new MatTableDataSource(reponse);
      this.paginator._intl.itemsPerPageLabel="Registros por pagina:";
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

}

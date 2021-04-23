import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';
import { ApiConsume } from '../Components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  constructor(private http:HttpClient) { }

  getRandomApi(){
    return this.http.get<any>(environment.apiEndPoint)
    .pipe(
      retry(1)
    );
  }
}

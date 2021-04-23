import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiConsume } from '../Components/table/table.component';

@Injectable({
  providedIn: 'root'
})
export class SaveRegisterService {
  clickEvent = new Subject<ApiConsume>(); 
  constructor() { }

  setRegister(objeto){
    let registros:any[] = [];
    
    if(localStorage.getItem("registro") != null){
      registros = JSON.parse(localStorage.getItem("registro") );
      registros.push(objeto);
      localStorage.setItem("registro",JSON.stringify(registros));
    }else{
      registros.push(objeto);
      localStorage.setItem("registro",JSON.stringify(registros));
    }
    this.setClick(objeto);
      
  }

  getRegistros(): Array<ApiConsume>{    
    return localStorage.getItem("registro") != null ? JSON.parse( localStorage.getItem("registro") ) : [];
  }

  setClick(objeto){
    this.clickEvent.next(objeto);
  }

  getClick(){
    return this.clickEvent.asObservable();
  }
}

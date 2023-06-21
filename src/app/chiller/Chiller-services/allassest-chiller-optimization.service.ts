import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AllassestChillerOptimizationService {
  constructor(private http: HttpClient) { }

  // readonly API_BASE_URL = environment.API_BASE_URL;

  // readonly ADDON = "ahuOragadam/";
  ss: string = "http://localhost:3000/api/chillerData";
  //GENERICS
  getAlarms() {
    // return this.http.get<any>(this.API_BASE_URL + this.ADDON + "alarms");
    return this.http.get<any>(this.ss);
  }

  createData(data: any) {
    return this.http.post<any>("http://localhost:3000/api/chillerData", data);
  }

  getByID(id: any) {
    return this.http.get<any>("http://localhost:3000/api/chillerData/" + id);
    // localhost:3000/api/chillerData/: id
  }
  approve(id: any, datasource: any) {
    return this.http.post<any>("http://localhost:3000/api/chillerData/approve/" + id, {});
  }
  reject(id: any, datasource: any) {
    return this.http.post<any>("http://localhost:3000/api/chillerData/reject/" + id, {});
  }

}

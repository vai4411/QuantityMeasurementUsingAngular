import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  constructor(private http: HttpClient) { }
  ngOnInit() {
 }

 loadConversionData(firstUnit:string,secondUnit:string,value:number){
   let data={
    firstSubUnit: firstUnit,
    quantity: value,
    secondSubUnit: secondUnit,
   }
  return this.http.post("http://localhost:8080/quantity/convert",data);
 }
}

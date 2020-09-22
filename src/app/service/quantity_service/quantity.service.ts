import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpService } from './../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class QuantityService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) { }

  quantityConversion(data) {
    return this.http.postService(data, this.baseUrl + 'convert');
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ConversionService } from '../../conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  firstUnit:string
  secondUnit:string
  quantity:number
  service:ConversionService
  constructor(service:ConversionService) {
    this.service=service;
  }

  ngOnInit(): void {
  }

  @Input() subUnit:[]

  getFirstUnit(unit:string){
    this.firstUnit=unit;
  }

  getSecondUnit(unit:string){
    this.secondUnit=unit;
  }

  getValue(quantity:number){
    this.quantity=quantity;
    this.service.loadConversionData(this.firstUnit,this.secondUnit,this.quantity).subscribe(a=> console.log(a));
  }


}

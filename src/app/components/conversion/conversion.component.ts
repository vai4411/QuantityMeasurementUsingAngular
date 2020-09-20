import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  firstUnit:string
  secondUnit:string
  quantity:number
  constructor() { }

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
  }
}

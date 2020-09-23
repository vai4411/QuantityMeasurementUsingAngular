import { Component, Input, OnInit ,SimpleChange,OnChanges} from '@angular/core';
import { QuantityService } from './../../service/quantity_service/quantity.service';
import { Quantity } from './../../model/quantity';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit, OnChanges {

  selectControl1="Feet"
  selectControl2="Inch"
  value1:number
  value2:number
  quantityService:QuantityService
  quantity:Quantity

  constructor(quantityService:QuantityService) {
    this.quantityService=quantityService;
  }

  ngOnInit(): void {
  }

  @Input() subUnit:[]

  ngOnChanges(changes: any) {
    if(changes.subUnit.previousValue==undefined ||
      changes.subUnit.currentValue.length!=changes.subUnit.previousValue.length)
    {
      this.selectControl1=changes.subUnit.currentValue[0]
      this.selectControl2=changes.subUnit.currentValue[1]
      this.value1=0
      if (changes.subUnit.currentValue.length == 2)
        this.value2=32
      else if (changes.subUnit.currentValue.length == 3) {
        this.value1=1
        this.value2=0.26
      }
      else{
        this.value1=1
        this.value2=12
      }
    }
  }

  convert(src:string){
    if( src === 'input1' || src === 'select1'){
      this.quantity = new Quantity(this.selectControl1,this.value1,this.selectControl2);
      this.quantityService
      .quantityConversion(this.quantity)
      .subscribe(response=> this.value2=response['result']);
    }
    else {
      this.quantity = new Quantity(this.selectControl2,this.value2,this.selectControl1);
        this.quantityService
        .quantityConversion(this.quantity)
        .subscribe(response=> this.value1=response['result']);
    }
  }
}

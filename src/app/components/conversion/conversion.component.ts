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
  value1:number=0
  value2:number=0
  service:QuantityService
  quantity:Quantity

  constructor(service:QuantityService) {
    this.service=service;
  }

  ngOnInit(): void {
  }

  @Input() subUnit:[]

  ngOnChanges(changes: any) {
    if(changes.subUnit.previousValue==undefined || changes.subUnit.currentValue.length!=changes.subUnit.previousValue.length)
    {
      this.selectControl1=changes.subUnit.currentValue[0]
      this.selectControl2=changes.subUnit.currentValue[1]
      this.value1=0
      if (changes.subUnit.currentValue.length == 2)
        this.value2=32
      else
        this.value2=0
    }
  }

  convert(src:string){
    if( src === 'input1' || src === 'select1'){
      this.quantity = new Quantity(this.selectControl1,this.value1,this.selectControl2);
      this.service.quantityConversion(this.quantity).subscribe(a=> this.value2=a['result'] );
    }
    else {
      this.quantity = new Quantity(this.selectControl2,this.value2,this.selectControl1);
        this.service.quantityConversion(this.quantity).subscribe(a=> this.value1=a['result'] );
    }
  }
}

import { Component, Input, OnInit ,SimpleChange,OnChanges} from '@angular/core';
import { QuantityService } from './../../service/quantity_service/quantity.service';

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
      this.value2=0
    }
  }

  convert(src:string){
    let data={
      firstSubUnit: this.selectControl1,
      quantity: this.value1,
      secondSubUnit: this.selectControl2,
     }
    switch (src) {
      case 'input1':
        this.service.quantityConversion(data).subscribe(a=> this.value2=a['result'] );
        break;

    }
  }
}

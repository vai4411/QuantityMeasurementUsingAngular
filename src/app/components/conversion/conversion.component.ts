import { Component, Input, OnInit ,SimpleChange,OnChanges} from '@angular/core';
import { ConversionService } from '../../conversion.service';

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
  service:ConversionService


  constructor(service:ConversionService) {
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
    switch (src) {
      case 'input1':
        this.service.loadConversionData(this.selectControl1,this.selectControl2,this.value1).subscribe(a=> this.value2=a['result']);
        break;
      case 'select1':
        this.service.loadConversionData(this.selectControl1,this.selectControl2,this.value1).subscribe(a=> this.value2=a['result']);
        break;
      case 'input2':
        this.service.loadConversionData(this.selectControl2,this.selectControl1,this.value2).subscribe(a=> this.value1=a['result']);
        break;
      case 'select2':
        this.service.loadConversionData(this.selectControl2,this.selectControl1,this.value2).subscribe(a=> this.value1=a['result']);
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss']
})
export class ChooseQuantityComponent implements OnInit {

  length:boolean = true;
  tempreture:boolean = false;
  volume:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(unit:string){
    if(unit=="lengthUnit"){
      this.length=true
      this.tempreture=false
      this.volume=false
    }
    else
      if(unit=="tempretureUnit"){
        this.length=false
        this.tempreture=true
        this.volume=false
      }
      else{
        this.length=false
        this.tempreture=false
        this.volume=true
    }
  }

}

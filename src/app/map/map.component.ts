import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  msg: any;
  msg1: any;
  myName: any;

  constructor() { }

  

  ngOnInit(): void {
    let count = interval(2000).pipe(take(10));
    count.pipe(map(data=>"video "+(data+1))).subscribe(res=>{
      // console.log(res);
      this.msg = res;
      this.onShow(this.msg);
    });

    count.pipe(map(val=>'(10 + X) = '+(val+10))).subscribe(res=>{
      // console.log(res);
      this.msg1 = res;
      this.onMultiply(this.msg1);
    });

    let personalInfo = from([
      {id:1,name:'Supee'},
      {id:2,name:'Sandy'},
      {id:3,name:'Pra'},
      {id:4,name:'Shaila'} 
  ])
    personalInfo.pipe(map(data=>data.name)).subscribe(res=>{
      // console.log(res);
      this.myName = res;
      this.callObservable(this.myName);
    });
  }
  onShow(value:any){
    let element = document.createElement('li');
    element.innerText = value;
    document.getElementById('firstId')?.appendChild(element); 
  } 
  onMultiply(values:any){
    let element1 = document.createElement('li');
    element1.innerText = values;
    document.getElementById('secondId')?.appendChild(element1); 
  } 
  callObservable(valueName:any){
    let element2 = document.createElement('li');
    element2.innerText = valueName;
    document.getElementById('thirdId')?.appendChild(element2); 
  } 
}

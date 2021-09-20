import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-practicemap',
  templateUrl: './practicemap.component.html',
  styleUrls: ['./practicemap.component.css']
})
export class PracticemapComponent implements OnInit {
  number: any;

  constructor() { }

  mapUnsubscribe!: Subscription;
  mapUnsubscribe1!: Subscription;
  data :any;
  msg : any;

  ngOnInit(): void {
    const values = interval(1000);
    this.mapUnsubscribe = values.pipe(map(data=>"Video : "+(data+1))).subscribe(res=>{
      // console.log(res);
      this.number = res;
      this.onshow(this.number);
    });
    setTimeout(() => {
      this.mapUnsubscribe.unsubscribe();
    }, 10000);

    const value = interval(1000);
    this.mapUnsubscribe1 = value.pipe(map(da=>(da+1)*2)).subscribe(res=>{
      // console.log(res);
      this.data = res;
      this.onprint(this.data);
    });
    setTimeout(() => {
      this.mapUnsubscribe1.unsubscribe();
    }, 10000);

    const Info = from([
      {name:'Supriya',age:23},
      {name:'Sandhya',age:26}
    ])
    Info.pipe(map(data=>"Name : "+data.name)).subscribe(res=>{
      // console.log(res);
      this.msg = res;
      this.onpush(this.msg);
    });
  }
  onshow(value:any){
    let element = document.createElement('li');
    element.innerText = value; 
    document.getElementById('firstMapId')?.appendChild(element);
  }
  onprint(value:any){
    let element = document.createElement('li');
    element.innerText = value; 
    document.getElementById('secondMapId')?.appendChild(element);
  }
  onpush(value:any){
    let element = document.createElement('li');
    element.innerText = value; 
    document.getElementById('ThirdMapId')?.appendChild(element);
  }
  
}

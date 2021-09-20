import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-practicemergemap',
  templateUrl: './practicemergemap.component.html',
  styleUrls: ['./practicemergemap.component.css']
})
export class PracticemergemapComponent implements OnInit {

  constructor() { }

  msg : any;
  msg1 : any;
  msg2 : any;

  getData(value:any){
    // console.log(value);
    return of("name : "+value.name);
  }

  mergemaVariable = from([
    {id:1,name:'Supriya'},
    {id:2,name:'Sandhya'},
    {id:3,name:'Shailaja'} 
  ]);
  // mergemaVariable = from(['Supriya','Sandhya','Shailaja']);

  ngOnInit(): void {
    this.mergemaVariable.pipe( 
      map(data=>
        this.getData(data),
      // console.log(data)
      ),
      // toArray()
    ).subscribe(res=>{
      // console.log(res);
      res.subscribe(res1=>{
        // console.log(res1);
        this.msg = res1;
        this.onPrint(this.msg);
      })
    });

    this.mergemaVariable.pipe(map(data1=>this.getData(data1)),
    mergeAll()
    ).
    subscribe(res=>{
      // console.log(res);
      this.msg1 = res;
      this.onShow(this.msg1);
    });

    this.mergemaVariable.pipe(mergeMap(data1=>this.getData(data1)) 
    ).
    subscribe(res=>{
      // console.log(res);
      this.msg2 = res;
      this.onCall(this.msg2);
    });
  }

  onPrint(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('firstId')?.appendChild(el);
  }
  onShow(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('secondId')?.appendChild(el);
  }
  onCall(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('thirdId')?.appendChild(el);
  }

}

import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-concatmapvsmergemapvsswitchmap',
  templateUrl: './concatmapvsmergemapvsswitchmap.component.html',
  styleUrls: ['./concatmapvsmergemapvsswitchmap.component.css']
})
export class ConcatmapvsmergemapvsswitchmapComponent implements OnInit {

  constructor() { }

  msg : any;
  msg1 : any;
  msg2 : any;

  getData(value:any){
    // console.log(value);
    return of("name : "+value.name).pipe(delay(3000));
  }

  switchmapVariable = from([
    {id:1,name:'Supriya'},
    {id:2,name:'Sandhya'},
    {id:3,name:'Shailaja'} 
  ]);

  ngOnInit(): void {
    this.switchmapVariable.pipe(concatMap(data=>this.getData(data))
    ).subscribe(res=>{
      // console.log(res); ;
        this.msg = res;
        this.onshow(this.msg); 
    });

    this.switchmapVariable.pipe(mergeMap(data=>this.getData(data))
    ).subscribe(res=>{
      // console.log(res); 
        this.msg1 = res;
        this.onprint(this.msg1);
      }); 

      this.switchmapVariable.pipe(switchMap(data=>this.getData(data)) 
    ).subscribe(res=>{
      // console.log(res); 
        this.msg2 = res;
        this.oncall(this.msg2);
      }); 
  }

  onshow(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('firstId')?.appendChild(el); 
  }

  onprint(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('secondId')?.appendChild(el); 
  }

  oncall(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('thirdId')?.appendChild(el); 
  }

}
 

import { Component, OnInit } from '@angular/core';
import { from, interval, of, timer } from 'rxjs';
import { map, take, takeLast, takeUntil, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-practicetake',
  templateUrl: './practicetake.component.html',
  styleUrls: ['./practicetake.component.css']
})
export class PracticetakeComponent implements OnInit {

  constructor() { }

  data : any;
  data1 : any;
  data2 : any;
  msg : any;

  personalInfo = [
    {id:1,name:'Supriya',gender:'Female'},
    {id:2,name:'Sandhya',gender:'Female'},
    {id:3,name:'Shailaja',gender:'Female'},
    {id:4,name:'Taehyung',gender:'Male'},
    {id:5,name:'Jimin',gender:'Male'},
    {id:6,name:'Prashant',gender:'Male'}
  ]

  ngOnInit(): void {
    let data = from(this.personalInfo);
    data.pipe(take(4),
    toArray()
    ).subscribe(rse=>{
      // console.log(rse);
      this.data  = rse;
      }); 

    let data1 = from(this.personalInfo);
    data1.pipe(takeLast(4),
    toArray()
    ).subscribe(rse=>{
      // console.log(rse);
      this.data1  = rse;
      }); 

      let data2 = timer(3000,1000);
      let condition = timer(6000);
      data2.pipe(takeUntil(condition),map(da=>"takeUntil : "+da)).subscribe(rse=>{
      // console.log(rse); 
      this.msg = rse;
      this.onShow(this.msg);
      }); 
  }
  onShow(value:any){
    let el = document.createElement('li');
    el.innerText=value;
    document.getElementById('list')?.appendChild(el);
  }

}

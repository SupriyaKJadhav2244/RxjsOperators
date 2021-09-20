import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-practicepluck',
  templateUrl: './practicepluck.component.html',
  styleUrls: ['./practicepluck.component.css']
})
export class PracticepluckComponent implements OnInit {

  constructor() { }

  msg : any;
  msg1 : any;
    
  data = [
    {id:1,name:'Supriya',job:{designation:'Engineer'}},
    {id:2,name:'Sandhya',job:{designation:'Engineer'}},
    {id:3,name:'Taehyung',job:{designation:'Singer'}},
    {id:4,name:'Jimin',job:{designation:'Singer'}}
  ]

  ngOnInit(): void {
    from(this.data).pipe(pluck('name'),
    toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.msg = res;
      console.log(this.msg);
    });

    from(this.data).pipe(pluck('job','designation'),
    toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.msg1 = res;
      console.log(this.msg1);
    });
  }

}

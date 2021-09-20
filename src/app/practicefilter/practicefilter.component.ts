import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-practicefilter',
  templateUrl: './practicefilter.component.html',
  styleUrls: ['./practicefilter.component.css']
})
export class PracticefilterComponent implements OnInit {

  constructor() { }

  value : any;
  value1 : any;
  value2 : any;

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
    data.pipe(filter(member=>member.name.length >= 7),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.value = res;
    });
    let data1 = from(this.personalInfo);
    data1.pipe(filter(member=>member.gender == 'Male'),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.value1 = res;
    });
    let data2 = from(this.personalInfo);
    data2.pipe(filter(member=>member.id <= 4),
      toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.value2 = res;
    });
  }

}

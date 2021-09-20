import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  data = [
    {id:1,name:'Supriya',gender:'female'},
    {id:2,name:'Sandhya',gender:'female'},
    {id:3,name:'Shailaja',gender:'female'},
    {id:4,name:'Prashant',gender:'male'},
    {id:5,name:'Kishan',gender:'male'},
    {id:6,name:'Taehyung',gender:'male'},
    {id:7,name:'Jimin',gender:'male'},
    {id:8,name:'Suga',gender:'male'}
  ]
  values: any;
  values1: any;
  values2: any;

  constructor() { }

  ngOnInit(): void {
    let info = from(this.data);
    info.pipe(filter(person=>person.name.length >= 5),
    toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.values = res;
    });

    info.pipe(filter(person=>person.gender == 'male'),
    toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.values1 = res;
    });

    info.pipe(filter(person=>person.id <= 6),
    toArray()
    ).subscribe(res=>{
      // console.log(res);
      this.values2 = res;
    });
  }

}

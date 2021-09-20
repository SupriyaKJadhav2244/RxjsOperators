import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-practicetap',
  templateUrl: './practicetap.component.html',
  styleUrls: ['./practicetap.component.css']
})
export class PracticetapComponent implements OnInit {

  constructor() { }

  msg : any;
  msg1 : any;
  data1 : any;

  data = ["Sandhya", "Supriya", "Taehyung", "Jimin"];
  color = ["Red", "Pink", "Purple", "Green"];
  count = interval(1000);
  objSubscribe! : Subscription;
  objSubscribe1!: Subscription;
  myColor : any;

  ngOnInit(): void {
    this.objSubscribe = this.count.pipe(tap(call=>{if(call==4){
      this.objSubscribe.unsubscribe();
     }}),
      map(Info=>this.data[Info])).subscribe(res=>{
        console.log(res);
        this.msg = res;
        this.onPrint(this.msg);
      });

      this.objSubscribe1 = this.count.pipe(tap(call=>{
        this.myColor = this.color[call];
        if(call==4){
        this.objSubscribe1.unsubscribe();
       }}),
        map(Info1=>this.color[Info1])).subscribe(res=>{
          console.log(res);
          this.msg1 = res;
          this.onShow(this.msg1);
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

}

import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-practiceintervaladtimer',
  templateUrl: './practiceintervaladtimer.component.html',
  styleUrls: ['./practiceintervaladtimer.component.css']
})
export class PracticeintervaladtimerComponent implements OnInit {

  constructor() { }

  IntervalVariable!: Subscription; 
  number: any;
  TimerVariable!: Subscription;
  count: any;

  ngOnInit(): void {
    const counter = interval(2000);
    this.IntervalVariable = counter.subscribe(res=>{
      // console.log(res);
      this.number = res +1;
      if(this.number>=10){
        this.IntervalVariable.unsubscribe();
      }
      this.onPrint(this.number);
    });

    const time = timer(5000, 1000);
    this.TimerVariable = time.subscribe(res=>{
      // console.log(res);
      this.count = res + 1 ;
      if(this.count>=10){
        this.TimerVariable.unsubscribe();
      }
      this.onTimerPrint(this.count);
    });
    }

  onPrint(value:any){
    let liElement = document.createElement('li');
    liElement.innerText = "Video : "+value;
    document.getElementById('firstIntervalId')?.appendChild(liElement);
  }
  onTimerPrint(value:any){
    let Element = document.createElement('li');
    Element.innerText = "Video : "+value;
    document.getElementById('firstTimerId')?.appendChild(Element);
  }

}

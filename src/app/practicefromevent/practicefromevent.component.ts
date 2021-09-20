import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-practicefromevent',
  templateUrl: './practicefromevent.component.html',
  styleUrls: ['./practicefromevent.component.css']
})
export class PracticefromeventComponent implements OnInit, AfterViewInit{

  constructor() { }

  data : any; 

  @ViewChild('buttonId') buttonId!: ElementRef;

  ngOnInit(): void {
    } 

  ngAfterViewInit(): void { 
    let count = 1;
    fromEvent(this.buttonId.nativeElement,'click').subscribe(res=>{ 
      this.data = 'Video '+count++;
      console.log(this.data);
      this.onPrint(this.data);
    }) 
  }
  onPrint(value:any){
    let el = document.createElement('li');
    el.innerText = value;
    document.getElementById('FirstId')?.appendChild(el);
  }

}

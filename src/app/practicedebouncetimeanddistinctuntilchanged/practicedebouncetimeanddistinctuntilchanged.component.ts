import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-practicedebouncetimeanddistinctuntilchanged',
  templateUrl: './practicedebouncetimeanddistinctuntilchanged.component.html',
  styleUrls: ['./practicedebouncetimeanddistinctuntilchanged.component.css']
})
export class PracticedebouncetimeanddistinctuntilchangedComponent implements OnInit, AfterViewInit{

  @ViewChild('mySearch') mySearch!: ElementRef;
  @ViewChild('mySearchData') mySearchData!: ElementRef;

  constructor() { }

  msg : any;
  msg1 : any;
  
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    fromEvent<any>(this.mySearch.nativeElement,'keyup')
    .pipe(map(event=>event.target.value),debounceTime(1000))
    .subscribe(res=>{
      console.log(res);
      this.msg = res;

      setTimeout(()=>{
        this.msg = null;
      },2000)
    });

    fromEvent<any>(this.mySearchData.nativeElement,'keyup')
    .pipe(map(event=>event.target.value),
    debounceTime(1000),
    distinctUntilChanged())
    .subscribe(res=>{
      console.log(res);
      this.msg1 = res;

      setTimeout(()=>{
        this.msg1 = null;
      },2000)
    });
  }

}

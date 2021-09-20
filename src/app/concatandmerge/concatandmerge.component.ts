import { Component, OnInit } from '@angular/core';
import { concat, interval, merge, of } from 'rxjs';
import { map, take } from 'rxjs/operators'

@Component({
  selector: 'app-concatandmerge',
  templateUrl: './concatandmerge.component.html',
  styleUrls: ['./concatandmerge.component.css']
})
export class ConcatandmergeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cancatVar1 = interval(2000).pipe(map((v: number)=>'Arijit Singh video '+(v+1)),take(4));
    const cancatVar2 = interval(1000).pipe(map((v: number)=>'BTS video '+(v+1)),take(8));

    let FinalVar1 = concat(cancatVar1,cancatVar2);
    let FinalVar2 = merge(cancatVar1,cancatVar2);

    FinalVar1.subscribe(res=>{
      console.log(res);
      this.onclick(res)}
      );
    FinalVar2.subscribe(res=>{
      console.log(res);
      this.onprint(res)}
      ); 
  }

  onclick(val:any){
    let li1 = document.createElement('li');
    li1.innerText = val;

    document.getElementById('concatElement')?.appendChild(li1);
  }
  onprint(value:any){ 
  let li2 = document.createElement('li');
  li2.innerText = value;

  document.getElementById('mergeElement')?.appendChild(li2);
}

}

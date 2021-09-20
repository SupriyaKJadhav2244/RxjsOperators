import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-practiceconcatandmerge',
  templateUrl: './practiceconcatandmerge.component.html',
  styleUrls: ['./practiceconcatandmerge.component.css']
})
export class PracticeconcatandmergeComponent implements OnInit {

  constructor() { }

  data : any;
  data1 : any;

  ngOnInit(): void {
    let arijitSongs = interval(1500).pipe(take(4),map(data=>"Arijit Singh Songs : "+(data+1))); 

    let btsSongs = interval(1000).pipe(take(8),map(data1=>"BTSSongs : "+(data1+1))); 

    let finalSongs = concat(arijitSongs,btsSongs);
    finalSongs.subscribe(res=>{
      // console.log(res);
      this.data = res;
      this.onConcat(this.data);
    });

    let final1Songs = merge(arijitSongs,btsSongs);
    final1Songs.subscribe(res=>{
      // console.log(res);
      this.data1 = res;
      this.onMerge(this.data1);
    });
  }
  onConcat(value:any){
    let ele = document.createElement('li');
    ele.innerText = value;
    document.getElementById('firstId')?.appendChild(ele);
  }
  onMerge(value:any){
    let ele = document.createElement('li');
    ele.innerText = value;
    document.getElementById('secondId')?.appendChild(ele);
  }

}

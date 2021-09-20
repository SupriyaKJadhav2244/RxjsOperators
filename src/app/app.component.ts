import { AfterContentInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
// implements AfterContentInit
{
  title = 'lifecyclehooks';

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit is working");
  // }
}

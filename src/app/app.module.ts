import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';
import { FormeventComponent } from './formevent/formevent.component';
import { IntervalandtimerComponent } from './intervalandtimer/intervalandtimer.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { OfandfromComponent } from './ofandfrom/ofandfrom.component';
import { ConcatandmergeComponent } from './concatandmerge/concatandmerge.component';
import { ContactmapComponent } from './contactmap/contactmap.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component'; 
import { PracticeObservableComponent } from './practice-observable/practice-observable.component';
import { PracticeofandformComponent } from './practiceofandform/practiceofandform.component';
import { PracticeintervaladtimerComponent } from './practiceintervaladtimer/practiceintervaladtimer.component';
import { PracticemapComponent } from './practicemap/practicemap.component';
import { PracticefilterComponent } from './practicefilter/practicefilter.component'; 
import { PracticetakeComponent } from './practicetake/practicetake.component';
import { PracticeconcatandmergeComponent } from './practiceconcatandmerge/practiceconcatandmerge.component';
import { PracticecatchandthrowComponent } from './practicecatchandthrow/practicecatchandthrow.component'; 
import { MyserviceService } from './myservice.service';
import { PracticefromeventComponent } from './practicefromevent/practicefromevent.component';
import { PracticepluckComponent } from './practicepluck/practicepluck.component';
import { PracticetapComponent } from './practicetap/practicetap.component';
import { PracticeswitchmapComponent } from './practiceswitchmap/practiceswitchmap.component';
import { PracticemergemapComponent } from './practicemergemap/practicemergemap.component';
import { PracticeconcatmapComponent } from './practiceconcatmap/practiceconcatmap.component';
import { PracticemapvsmergemapvsconcatmapComponent } from './practicemapvsmergemapvsconcatmap/practicemapvsmergemapvsconcatmap.component';
import { ConcatmapvsmergemapvsswitchmapComponent } from './practiceconcatmapvsmergemapvsswitchmap/concatmapvsmergemapvsswitchmap.component'; 
import { PracticedebouncetimeanddistinctuntilchangedComponent } from './practicedebouncetimeanddistinctuntilchanged/practicedebouncetimeanddistinctuntilchanged.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ObservablesComponent,
    FormeventComponent,
    IntervalandtimerComponent,
    SwitchmapComponent,
    OfandfromComponent,
    ConcatandmergeComponent,
    ContactmapComponent,
    MergemapComponent,
    MapComponent,
    FilterComponent, 
    PracticeObservableComponent,
    PracticeofandformComponent,
    PracticeintervaladtimerComponent,
    PracticemapComponent,
    PracticefilterComponent, 
    PracticetakeComponent, 
    PracticeconcatandmergeComponent, 
    PracticecatchandthrowComponent, 
    PracticefromeventComponent, 
    PracticepluckComponent, 
    PracticetapComponent, 
    PracticeswitchmapComponent,
    PracticemergemapComponent, 
    PracticeconcatmapComponent, 
    PracticemapvsmergemapvsconcatmapComponent, 
    ConcatmapvsmergemapvsswitchmapComponent,  
    PracticedebouncetimeanddistinctuntilchangedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],   
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
   
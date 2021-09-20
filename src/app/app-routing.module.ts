import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ChildComponent } from './child/child.component';
import { ConcatandmergeComponent } from './concatandmerge/concatandmerge.component';
import { ContactmapComponent } from './contactmap/contactmap.component';
import { FilterComponent } from './filter/filter.component';
import { FormeventComponent } from './formevent/formevent.component';
import { IntervalandtimerComponent } from './intervalandtimer/intervalandtimer.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ObservablesComponent } from './observables/observables.component';
import { OfandfromComponent } from './ofandfrom/ofandfrom.component'; 
import { ParentComponent } from './parent/parent.component';
import { PracticeObservableComponent } from './practice-observable/practice-observable.component';
import { PracticecatchandthrowComponent } from './practicecatchandthrow/practicecatchandthrow.component';
import { PracticeconcatandmergeComponent } from './practiceconcatandmerge/practiceconcatandmerge.component';
import { PracticeconcatmapComponent } from './practiceconcatmap/practiceconcatmap.component';
import { ConcatmapvsmergemapvsswitchmapComponent } from './practiceconcatmapvsmergemapvsswitchmap/concatmapvsmergemapvsswitchmap.component';
import { PracticedebouncetimeanddistinctuntilchangedComponent } from './practicedebouncetimeanddistinctuntilchanged/practicedebouncetimeanddistinctuntilchanged.component';
import { PracticefilterComponent } from './practicefilter/practicefilter.component';
import { PracticefromeventComponent } from './practicefromevent/practicefromevent.component';
import { PracticeintervaladtimerComponent } from './practiceintervaladtimer/practiceintervaladtimer.component';
import { PracticemapComponent } from './practicemap/practicemap.component';
import { PracticemapvsmergemapvsconcatmapComponent } from './practicemapvsmergemapvsconcatmap/practicemapvsmergemapvsconcatmap.component';
import { PracticemergemapComponent } from './practicemergemap/practicemergemap.component';
import { PracticeofandformComponent } from './practiceofandform/practiceofandform.component';
import { PracticepluckComponent } from './practicepluck/practicepluck.component';
import { PracticeswitchmapComponent } from './practiceswitchmap/practiceswitchmap.component'; 
import { PracticetakeComponent } from './practicetake/practicetake.component';
import { PracticetapComponent } from './practicetap/practicetap.component';
import { SwitchmapComponent } from './switchmap/switchmap.component';

const routes: Routes = [
  // {path:'',redirectTo:'',pathMatch:'full'},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'observables',
  children:[
    {path:'',component:ObservablesComponent},
    {path:'formEvent',component:FormeventComponent},
    {path:'intervalAndTimer',component:IntervalandtimerComponent},
    {path:'switchMap',component:SwitchmapComponent},
    {path:'ofAndFrom',component:OfandfromComponent},
    {path:'concatAndMerge',component:ConcatandmergeComponent},
    {path:'conactMap',component:ContactmapComponent},
    {path:'mergeMap',component:MergemapComponent},
    {path:'map',component:MapComponent},
    {path:'filter',component:FilterComponent} 
  ]},
  {path:'practiceObservable',
  children:[
    {path:'',component:PracticeObservableComponent},
    {path:'practiceOfAndFrom',component:PracticeofandformComponent},
    {path:'practiceIntervalAndTimer',component:PracticeintervaladtimerComponent},
    {path:'practiceMap',component:PracticemapComponent},
    {path:'practiceFilter',component:PracticefilterComponent},
    {path:'practiceTake',component:PracticetakeComponent},
    {path:'practiceConactAndMerge',component:PracticeconcatandmergeComponent},
    {path:'practiceCatchAndThrow',component:PracticecatchandthrowComponent},
    {path:'practiceFromEvent',component:PracticefromeventComponent},
    {path:'practicePluck',component:PracticepluckComponent},
    {path:'practiceTap',component:PracticetapComponent},
    {path:'practiceSwitchMap',component:PracticeswitchmapComponent},
    {path:'practiceMergeMap',component:PracticemergemapComponent},
    {path:'practiceConcatMap',component:PracticeconcatmapComponent},
    {path:'practiceMapVsMergemapVsConcatmap',component:PracticemapvsmergemapvsconcatmapComponent},
    {path:'practiceConcatmapVsMergemapVsSwitchmap',component:ConcatmapvsmergemapvsswitchmapComponent},
    {path:'practicebouncetimeanddistinctuntilchangedComponent',component:PracticedebouncetimeanddistinctuntilchangedComponent}         
  ]}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

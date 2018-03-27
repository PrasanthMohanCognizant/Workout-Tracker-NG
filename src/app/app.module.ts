import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { CreateComponent } from './create/create.component';
import { CategoryComponent } from './category/category.component';
import { TrackComponent } from './track/track.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';

const appRoutes: Routes = [
  { path: 'view-all', component: ViewAllComponent },
  { path: 'create', component: CreateComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'track', component: TrackComponent },
  { path: 'edit-workout', component: EditWorkoutComponent },
  { path: 'start-workout', component: StartWorkoutComponent },
  { path: 'end-workout', component: EndWorkoutComponent },
  { path: '', component: ViewAllComponent},
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    CreateComponent,
    CategoryComponent,
    TrackComponent,
    PageNotfoundComponent,
    EditWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

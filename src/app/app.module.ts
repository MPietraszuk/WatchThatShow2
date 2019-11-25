import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { OnTvComponent } from './components/on-tv/on-tv.component';
import { InTheatersComponent } from './components/in-theaters/in-theaters.component';
import { NowPlayingMoviesComponent } from './components/in-theaters/now-playing-movies/now-playing-movies.component';
import { UpcomingMoviesComponent } from './components/in-theaters/upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './components/in-theaters/popular-movies/popular-movies.component';
import { CurrentlyAiringComponent } from './components/on-tv/currently-airing/currently-airing.component';
import { AiringTodayComponent } from './components/on-tv/airing-today/airing-today.component';
import { PopularTvShowsComponent } from './components/on-tv/popular-tv-shows/popular-tv-shows.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    OnTvComponent,
    InTheatersComponent,
    NowPlayingMoviesComponent,
    UpcomingMoviesComponent,
    PopularMoviesComponent,
    CurrentlyAiringComponent,
    AiringTodayComponent,
    PopularTvShowsComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

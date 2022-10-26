import { RoutingComponent } from './routing/routing.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';
import { UnitTestingComponent } from './unit-testing/unit-testing.component';


@NgModule({
  declarations: [AppComponent, CounterComponent, PostsComponent, RoutingComponent, NavbarComponent, ColorDirective, UnitTestingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import {MdTooltipModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule }          from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoadingComponent } from './loading/loading.component';

import { LoadingService } from './loading.service';
import { TaskcardComponent } from './taskcard/taskcard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoadingComponent,
    TaskcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    ToastrModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MdTooltipModule,
    MdProgressBarModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

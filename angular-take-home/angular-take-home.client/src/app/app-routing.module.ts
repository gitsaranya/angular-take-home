import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookEntryComponent } from './components/book-entry/book-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-entry', pathMatch: 'full' },
  { path: 'book-entry', component: BookEntryComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

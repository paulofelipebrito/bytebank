import { NewTrasferComponent } from './new-trasfer/new-trasfer.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extract', component: ExtractComponent},
  {path: 'newtransfer', component: NewTrasferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

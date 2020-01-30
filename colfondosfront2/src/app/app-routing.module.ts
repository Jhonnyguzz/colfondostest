import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColfondosComponent } from './colfondos/colfondos.component';


const routes: Routes = [
  { path: '', component: ColfondosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

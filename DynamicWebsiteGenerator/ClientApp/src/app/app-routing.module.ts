import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './template/page/page.component';
import { DesignerComponent } from './portal/designer/designer.component';

const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' },
  { path: 'Portal/Designer', component: DesignerComponent},
  { path: 'portal/designer', redirectTo: 'Portal/Designer'},
  { path: ':page', component: PageComponent, pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeAddComponent } from "./employee-add/employee-add.component";

const routes: Routes = [
  { path: "", component: EmployeeAddComponent, pathMatch: "full" },
  // { path: "employee", component: EmployeeAddComponent, pathMatch: "full" },
  // { path: "UserProfile/:id", component: UserProfileComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

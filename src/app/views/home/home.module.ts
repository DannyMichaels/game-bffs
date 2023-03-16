import { NgModule } from '@angular/core';
import { HomeView } from './home.view';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [HomeView],
  declarations: [HomeView],
  providers: [],
})
export class HomeModule {}

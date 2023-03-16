import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayout } from './layout/app-layout/app.layout';

const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

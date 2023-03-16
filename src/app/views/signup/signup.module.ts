import { NgModule } from '@angular/core';
import { SignupView } from './signup.view';
import { RouterModule } from '@angular/router';
import { SignupRoutes } from './signup.routes';

@NgModule({
  imports: [RouterModule.forChild(SignupRoutes)],
  exports: [SignupView],
  declarations: [SignupView],
  providers: [],
})
export class SignupModule {}

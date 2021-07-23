import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { StartupService } from './startup.service';
import { SharedModule } from './shared/shared.module';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TasksModule,
    SharedModule,
  ],
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

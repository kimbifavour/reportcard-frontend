import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SampleComponent} from './components/sample/sample.component';
import {RcAuthModule} from './modules/rc-auth/rc-auth.module';
import {RcDashboardModule} from "./modules/rc-dashboard/rc-dashboard.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {injectables} from "./app.injectables";
import {MessageService} from "primeng/api";
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,

  ],
  imports: [
    RcDashboardModule,
    RcAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    injectables,
    {provide: MessageService, useClass: MessageService},
    {provide: NgbActiveModal, useClass: NgbActiveModal}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

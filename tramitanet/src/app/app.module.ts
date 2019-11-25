import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule } from '@angular/common/http';

import * as $ from 'jquery';
import { GapiSession } from 'src/infrastructure/sessions/gapi.session';
import { AppSession } from 'src/infrastructure/sessions/app.sessions';
import { FileSession } from 'src/infrastructure/sessions/file.session';
import { UserSession } from 'src/infrastructure/sessions/user.session';
import { AppRepository } from 'src/infrastructure/repositories/app.repository';
import { BreadCrumbSession } from 'src/infrastructure/sessions/breadcrumb.session';
import { FileRepository } from 'src/infrastructure/repositories/file.repository';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { BlockUIModule } from 'ng-block-ui';
import { FilepageComponent } from './views/archivos/filepage/filepage.component';
import { DialogOneInputComponent } from './views/archivos/dialogoneinput/dialogoneinput.component';
import { DialogShareableLinksComponent } from './views/archivos/dialogshareablelinks/dialogshareablelinks.component';
import { FilesUploadComponent } from './views/archivos/filesupload/filesupload.component';
import {
  MatBottomSheetModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule,
} from '@angular/material';
import { BreadCrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { BreadCrumbItemComponent } from './shared/components/breadcrumb/breadcrumbitem/breadcrumbitem.component';
import { AppContext } from 'src/infrastructure/app.context';
import { ListaArchivosComponent } from './views/lista-archivos/lista-archivos/lista-archivos.component';
import { ListaArchivosModule } from './views/lista-archivos/lista-archivos.module';

@NgModule({
  declarations: [
    AppComponent,
    FilepageComponent,
    DialogOneInputComponent,
    DialogShareableLinksComponent,
    FilesUploadComponent,
    BreadCrumbComponent,
    BreadCrumbItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot(),
    MatBottomSheetModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ListaArchivosModule
  ],
  entryComponents: [
    DialogOneInputComponent,
    DialogShareableLinksComponent,
    FilesUploadComponent,
  ],
  providers: [
    AppSession,
    FileSession,
    GapiSession,
    UserSession,
    AppContext,
    AppRepository,
    BreadCrumbSession,
    FileRepository,
    UserRepository,
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}

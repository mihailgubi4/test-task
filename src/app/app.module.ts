import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DataComponent } from "./routes/data/data.component"
import { EditDataComponent } from "./routes/edit/edit-data.component";
import { InlineEditorModule } from 'ng2-inline-editor';
import { LoadingStatusService} from "./services/loading-status-service";


const appRoutes: Routes =[
    { path: '', component: DataComponent},
    { path: 'edit', component: EditDataComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, InlineEditorModule, RouterModule.forRoot(appRoutes), NgbModule.forRoot() ],
    declarations: [ AppComponent, HeaderComponent, SidebarComponent,  DataComponent, EditDataComponent],
    bootstrap:    [ AppComponent ],
    providers:    [ LoadingStatusService ]
})

export class AppModule { }
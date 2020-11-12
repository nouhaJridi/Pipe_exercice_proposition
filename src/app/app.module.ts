import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { ListeComponentComponent } from './components/liste-component/liste-component.component';
import { CvComponentComponent } from './components/cv-component/cv-component.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ColorDirectiveDirective } from './components/directive/color-directive.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemComponentComponent,
    ListeComponentComponent,
    CvComponentComponent,
    DirectiveComponent,
    ColorDirectiveDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

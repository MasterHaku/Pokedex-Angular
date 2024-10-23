import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchByIdComponent } from './search-by-id/search-by-id.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { InfoDisplayComponent } from './info-display/info-display.component';
import { MatActionList, MatList, MatListModule } from '@angular/material/list';
import { AllPokeComponent } from './all-poke/all-poke.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByIdComponent,
    FilterPokemonPipePipe,
    InfoDisplayComponent,
    AllPokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatListModule,
    MatActionList

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

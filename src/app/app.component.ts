import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {Animals} from "./animals.enum";
import {NgForOf} from "@angular/common";
import {TypedTranslatePipe} from "./typed-translate.pipe";
import {TranslationKey} from "./translation-keys.type";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NgForOf, TypedTranslatePipe],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <p>{{ 'USED_KEY' | typedTranslate }}</p>
    <p>{{ 'OBJECT_KEY.USED_KEY' | typedTranslate }}</p>
    <ul>
      <li *ngFor="let animal of animals">{{ getAnimalKey(animal) | typedTranslate }}</li>
    </ul>
    
    {{ 'ENUM_KEY_cat' | typedTranslate }}
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'translation-key-finder';
  // animals: Animals[] = [Animals.CAT, Animals.DOG, Animals.MOUSE];
  animals: Animals[] = [Animals.CAT, Animals.MOUSE];

  getAnimalKey(animal: Animals): TranslationKey {
    return `ENUM_KEY_${animal}`;
  }
}

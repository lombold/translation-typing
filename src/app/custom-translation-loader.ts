import {TranslateLoader} from "@ngx-translate/core";
import {Observable, of} from "rxjs";
import en from "./i18n/en";
import de from "./i18n/de";

export class CustomTranslationLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        if (lang === 'en') {
            return of(en);
        } else if (lang === 'de') {
            return of(de);
        }

        return of({});
    }
}
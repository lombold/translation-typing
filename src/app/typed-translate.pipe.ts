import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {ChangeDetectorRef, Pipe} from "@angular/core";
import {TranslationKey} from "./translation-keys.type";

@Pipe({
    name: 'typedTranslate',
    standalone: true,
})
export class TypedTranslatePipe extends TranslatePipe {
    constructor(translate: TranslateService, _ref: ChangeDetectorRef) {
        super(translate, _ref);
    }

    override transform(key: TranslationKey, ...args: any[]): any {
        return super.transform(key, ...args);
    }
}
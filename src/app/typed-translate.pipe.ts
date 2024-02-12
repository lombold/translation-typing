import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {ChangeDetectorRef, Injectable, Pipe, PipeTransform} from "@angular/core";

export type TranslationKey = 'USED_KEY' | 'ENUM_KEY_cat' | 'ENUM_KEY_dog' | 'ENUM_KEY_mouse';


@Pipe({
    name: 'typedTranslate',
    standalone: true,
    pure: false
})
// @ts-ignore
export class TypedTranslatePipe extends TranslatePipe {
  constructor(private override translate: TranslateService, private override _ref: ChangeDetectorRef) {
    super(translate, _ref);
  }

    override transform(key: TranslationKey, ...args: any[]): any {
        return super.transform(key, ...args);
    }

}
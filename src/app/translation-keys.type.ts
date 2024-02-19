// const translationKeys = [
//     'USED_KEY',
//     'ENUM_KEY_cat',
//     'ENUM_KEY_dog',
//     'ENUM_KEY_mouse'
// ];

// export type TranslationKey = typeof translationKeys[number];

import {RecursiveKey} from "./recursive-key";

type TranslationFile = {
    'USED_KEY': string;
    'ENUM_KEY_cat': string;
    'ENUM_KEY_dog': string;
    'ENUM_KEY_mouse': string;
    'OBJECT_KEY': {
        USED_KEY: string;
        UNUSED_KEY: string;
    }
}

export type TranslationKey = RecursiveKey<TranslationFile>;

// flatten an object to a union of dot-separated paths
//
// this type
// {
//   prop: { a: string; b: number; };
//   other: string;
// }
//
// // goes to
// {
//   prop: "prop" | "prop.a" | "prop.b";
//   other: "other";
// }
//
// // goes to
// "prop" | "prop.a" | "prop.b" | "other"

export type RecursiveKey<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `['${TKey}']` | `.${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends unknown[]
    ? Text
    : TValue extends object
        ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
        : Text;

import { BlzFieldModel } from "./blz-field.model";
import { BlzFieldType } from "./blz-field.enum";
import { Validator } from "@angular/forms";

export class BlzField {
    fmControlType!: BlzFieldType;
    fmControlName!: string;
    fmValidators!: Validator[] | Validator;
    fmClass?: string;
    fmLabel!: string;
    fmPlaceholder!: string;

    constructor(controlOptions: BlzFieldModel) {
        const keys: string[] = Object.keys(controlOptions);
        console.log('check', keys);
        
        // keys.forEach((key: string) => {
        //     if (controlOptions[key]) {}
        // })
    }
}

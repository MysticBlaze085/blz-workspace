import { BlzFieldType } from "./blz-field.enum";
import { Validator } from "@angular/forms";

export interface BlzFieldModel {
    /** Input to display */
    fmControlType: BlzFieldType;
    /** Angular Reactive form control */
    fmControlName: string;
    fmValidators: Validator[] | Validator;
    /** Display output blz form input controls */
    fmClass?: string;
    fmLabel: string;
    fmPlaceholder: string;
}

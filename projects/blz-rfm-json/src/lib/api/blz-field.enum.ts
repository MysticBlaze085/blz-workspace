export enum BlzFieldEnum {
    Checkbox = 'Checkbox',
    Password = 'Password', 
    RadioGroup = 'Radio Group',
    Text = 'Text',
    Textarea = 'Textarea', 
}

export type BlzFieldType = BlzFieldEnum.Checkbox | BlzFieldEnum.Password | BlzFieldEnum.RadioGroup | BlzFieldEnum.Text | BlzFieldEnum.Textarea
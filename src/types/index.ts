export interface OHRIFormFieldProps<T> {
    name: string;
    component: T;
    type?: string;
}

export interface OHRIFormField{
    fields?:{
        isHidden?: boolean,
        required?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        validators?: boolean;
        questionInfo?: string;
    }
    setFields?:any,
    schema?:any;
    setSchema?:any;
    value?: string;
    onChange: (
        fieldValue?:string, whenCondition?:string, thenCondition?:string
    ) => void;
    ConditionComponent?: any, 
    selectedComponents?: any,
    label?: string;
    type?: string;
    id?: string;
    
}

// export interface OHRIFormFieldProps{
//     question: OHRIFormField;
//     onChange: (
//         FieldName: string,
        
//         setError: string,
//         setWarnings: string,
//         isUnspecified: boolean,
//     ) => void;
    
// }
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
    },
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

export interface IRule {
    id: string;
    logic: any;
  }
  export interface IComponent {
    id: string;
    type: string;
    value: string;
    rules?: IRule;
  }
  export interface IPage {
    name: string;
    components: IComponent[];
  }
  export interface IStore {
    pages: IPage[];
  }
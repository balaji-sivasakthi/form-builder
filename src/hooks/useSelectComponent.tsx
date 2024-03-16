import { useState } from "react";
import { OHRIFormField, OHRIFormFieldProps } from "../types";


export const useSelectComponents = () => {
    const initialComponents: OHRIFormFieldProps<React.ComponentType<OHRIFormField>>[] = []; 
    const [components, setComponents] = useState<OHRIFormFieldProps<React.ComponentType<OHRIFormField>>[]>(initialComponents);
    
    return {components, setComponents};
}
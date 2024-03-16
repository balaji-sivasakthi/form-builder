import OHRIDate from "../components/inputs/ohri-date.component";
import OHRIDropdown from "../components/inputs/ohri-dropdown.component";
import OHRIFile from "../components/inputs/ohri-file.component";
import OHRIMultiSelect from "../components/inputs/ohri-multiselect.component";
import OHRINumber from "../components/inputs/ohri-number.component";
import OHRIRadio from "../components/inputs/ohri-radio.component";
import OHRITextArea from "../components/inputs/ohri-text-area.component";
import OHRIText from "../components/inputs/ohri-text-component";
import OHRITime from "../components/inputs/ohri-time.component";
import OHRIToggle from "../components/inputs/ohri-toggle.component";
import { OHRIFormFieldProps } from "../types";


export const inbuiltControls: OHRIFormFieldProps<React.ComponentType<T>>[] = [
    {
      name: 'OHRItext',
      component: OHRIText,
      type: 'text',
    },
    {
      name: 'OHRIRadio',
      component: OHRIRadio,
      type: 'radio',
    },
    {
      name: 'OHRIDate',
      component: OHRIDate,
      type: 'date',
    },
    {
      name: 'OHRINumber',
      component: OHRINumber,
      type: 'number',
    },
    {
      name: 'OHRIMultiSelect',
      component: OHRIMultiSelect,
      type: 'checkbox',
    },
    {
      name: 'OHRIDropdown',
      component: OHRIDropdown,
      type: 'select',
    },
    {
      name: 'OHRITextArea',
      component: OHRITextArea,
      type: 'textarea',
    },
    {
      name: 'OHRIToggle',
      component: OHRIToggle,
      type: 'toggle',
    },
    {
      name: 'OHRITime',
      component: OHRITime,
      type: 'datetime',
    },
    {
      name: 'File',
      component: OHRIFile,
      type: 'file',
    },
  ];
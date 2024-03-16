import React, { useState } from "react";
import RuleBuilderComponent from "./rule-builder.container";
import ConditionComponent from "../components/conditional-logic";
import FormPreview from "./form-preview.container";

interface ITab {
  id: string;
  name: string;
  component: React.JSX.Element;
}

const Tabs: ITab[] = [
  {
    id: "1",
    name: "Form Builder",
    component: <RuleBuilderComponent />,
  },
  {
    id: "2",
    name: "Form Logic",
    component: <ConditionComponent />,
  },
  {
    id: "3",
    name: "Form Preview",
    component: <FormPreview/>,
  },
];


const FormValidatorContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full m-3">
      <div className="flex space-x-3 p-3  rounded-lg">
        {Tabs?.map((item: ITab, index: number) => (
          <button
            key={`${item.name}-${index}`}
            className={`${
              currentIndex == index && "bg-blue-300"
            } p-2 rounded-t-lg`}
            onClick={() => setCurrentIndex(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="w-full p-3 border-2 mt-2 rounded-lg h-[calc(100vh-100px)]">
        {Tabs && Tabs[currentIndex].component}
      </div>
    </div>
  );
};
export default FormValidatorContainer;

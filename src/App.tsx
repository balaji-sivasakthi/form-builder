import { Dispatch, SetStateAction, createContext, useState } from "react";
import FormValidatorContainer from "./container/form-validator.container";
import { IStore } from "./types";

export const Context = createContext<{
  store: IStore;
  setStore: Dispatch<SetStateAction<IStore>>;
} | null>(null);

const App = () => {
  const [store, setStore] = useState({
    pages: [
      {
        components: [{ id: "1", type: "text", value: "12" }],
        name: "Inital Page",
      },
    ],
  });
  return (
    <Context.Provider value={{ store, setStore: setStore }}>
      <div className="flex w-full h-screen bg-blue-[400]">
        <FormValidatorContainer />
      </div>
    </Context.Provider>
  );
};

export default App;

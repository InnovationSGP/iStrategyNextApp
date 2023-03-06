import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggler(props: { enable: any; toggleFunction: any }) {
  const [enabled, setEnabled] = useState(false);
  const setEnabledState = () => setEnabled((visible) => !visible);

  const togglerHandler = async () => {
    await setEnabledState();
    props.toggleFunction;
  };

  return (
    <div className="py-2 pr-2">
      <Switch
        checked={props.enable ? enabled : !enabled}
        onChange={setEnabledState}
        className={`${enabled ? "bg-blue-900" : "bg-gray-400"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Publish Blog</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}

import "./App.css";
import Checkbox from "./Checkbox";
import HeartCheckbox from "./HeartCheckbox";

function App() {
  return (
    <div className="App w-full">
      <div className="p-6">
        <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-8 text-left">
          <div>
            <input type="checkbox" id="cb1" />
            <label htmlFor="cb1">
              I'm a default checkbox with a lot of text that does not fit in one line
            </label>
          </div>
          <div>
            <input type="checkbox" id="cb2" defaultChecked />
            <label htmlFor="cb2">
              I'm a default checkbox with a lot of text that does not fit in one line
            </label>
          </div>
          <div className="flex gap-2">
            <Checkbox id="cb3" label="I'm a styled checkbox with a lot of text that does not fit in one line" />
          </div>
          <div className="flex gap-2">
            <Checkbox id="cb4" label="I'm a styled checkbox with a lot of text that does not fit in one line" defaultChecked />
          </div>
          <div className="w-full flex gap-2">
            <HeartCheckbox id="heart1" label="I'm a styled checkbox with a lot of text that does not fit in one line" />
          </div>
          <div className="w-full flex gap-2">
          <HeartCheckbox id="heart1" label="I'm a styled checkbox with a lot of text that does not fit in one line" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

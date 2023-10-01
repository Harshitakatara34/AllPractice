import ButtonColorChange from "./Components/ColorChanged/ButtonColorChange";
import ToggleColorChanged from "./Components/ColorChanged/ToggleColorChanged";
import Counter from "./Components/Counter";
import CounterUseReducer from "./Components/CounterUseReducer";
import Toggle from "./Components/CustomHook/Toggle";
import Debounce from "./Components/Debounce/Debounce";
import DeleteButton from "./Components/DeleteButton";
import { FetchApi } from "./Components/FetchApi";
import Form from "./Components/Form";
import Memo from "./Components/Momoization/Memo";
import UseCallback from "./Components/Momoization/UseCallback";
import UseMemo from "./Components/Momoization/UseMemo";
import { NameToSirName } from "./Components/NameToSirName";
import { PrivateRoutes } from "./Components/ProvateRoute/PrivateRoutes";
import Throttle from "./Components/Throttling/Throttle";
import Todo from "./Components/Todo";
// import { TodoHarshita } from "./Components/TodoWithFilter/TodoHarshita";
import TodoToggleFilter from "./Components/TodoWithFilter/TodoToggleFilter";
import UnorderList from "./Components/UnorderList";
import Home from "./Components/UseContext/Home";
import ToggleFunction from "./Components/UseContext/ToggleFunction";
import UseRef from "./Components/UseRef";
import ValidationForm from "./Components/ValidationForm.jsx/ValidationForm";
import { Vote } from "./Components/Vote";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UnorderList />
      <Form />
      <Counter />
      <CounterUseReducer />
      <UseRef />
      <Todo />
      <ToggleFunction>
        <Home />
      </ToggleFunction>
      <Toggle />
      <TodoToggleFilter />
      {/* <TodoHarshita /> */}
      <Debounce />
      <Throttle />
      <Memo />
      <UseMemo />
      <UseCallback />
      <ButtonColorChange />
      <ToggleColorChanged />
      <ValidationForm />
      <PrivateRoutes />
      <NameToSirName/>
      <DeleteButton/>
      <FetchApi/>
      <Vote/>
    </div>
  );
}

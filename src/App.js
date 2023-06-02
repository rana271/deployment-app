import logo from "./logo.svg";
import "./App.css";
import Employee from "./Component/Employee";
import { createStore } from "redux";
import { Provider } from "react-redux";
const employeeData = {
  salary: 15000,
};
//Create Reducer Functions acept intit state and action
const reducer = (state = employeeData, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { salary: state.salary + 1000 };

    case "DECREMENT":
      return { salary: state.salary - 1000 };

    default:
      return state;
  }
};
const store = createStore(reducer);
function App() {
  return (
    <div>
      <Provider store={store}>
        <Employee></Employee>
      </Provider>
    </div>
  );
}

export default App;

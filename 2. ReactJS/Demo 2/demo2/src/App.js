import "./App.css";
import ComponentBottom from "./Components/ComponentBottom";
import ComponentTop from "./Components/ComponentTop";

function App() {
  //
  let dataFromAppToTop = "DAONQ VTI Academy";
  let headingTop = "-- Component TOP APP  --";
  let headingBottom = "-- Component Bottom  -- ";

  //
  return (
    <div className="App">
      <div className="container">
        <br />
        <ComponentTop
          prop_dataFromAppToTop={dataFromAppToTop}
          prop_headingTop={headingTop}
          prop_myName="Daonq"
        />
        <br />
        <br />
        <ComponentBottom prop_headingBottom={headingBottom} prop_other="123" />
      </div>
    </div>
  );
}

export default App;

import Intro from "./pages/Intro";
import { Context } from "./pages/UseContext/Context";
import { UseEffect } from "./pages/UseEffect";
import { Parent } from "./pages/UseImperativeHandle/Parent";
import { UseLayoutEffect } from "./pages/UseLayoutEffect";
import { UseReducer } from "./pages/UseReducer";
import { UseRef } from "./pages/UseRef";

const App = () => {
  return (
    <>
      {/* <Intro />
      <br></br>
      <UseReducer />
      <br></br>
      <UseEffect />
      <br></br>
      <UseRef />
      <br></br>
      <UseLayoutEffect />
      <br></br>
      {/* For UseImperativeHandle *}
      <Parent /> */}
      <Context />

    </>
  )
}

export default App;

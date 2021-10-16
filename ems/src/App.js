import Form from "./components/Form";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <HashRouter basename="/">
        <Route path="/Form" exact component={Form} />
        <Route path="/List" exact component={List} />

        {/* <Route path="/Blogs" exact component={Blogs} /> */}
      </HashRouter>
    </>
  );
}

export default App;

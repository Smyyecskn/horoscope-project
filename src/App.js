import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { data } from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;

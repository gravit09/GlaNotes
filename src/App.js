import Home from "./Home";
import Subject from "./Subject";
import Labs from "./Labs";
import About from "./About";
import Soon from "./Soon";
import Roles from "./Roles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
export const notesData = createContext();
function App() {
  const [apiState, setApiState] = useState("");

  return (
    <notesData.Provider value={{ apiState, setApiState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/lab" element={<Labs />} />
          <Route path="/about" element={<About />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="/roles" element={<Roles />} />
        </Routes>
      </BrowserRouter>
    </notesData.Provider>
  );
}

export default App;

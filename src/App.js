import Home from "./Home";
import Subject from "./Subject";
import Labs from "./Labs";
import About from "./About";
import Soon from "./Soon";
import Roles from "./Roles";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Upload from "./Upload";
import SignIn from "./SignIn";
export const notesData = createContext();
function App() {
  const [apiState, setApiState] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      },
      (error) => {
        console.error("Authentication state change error:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

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
          <Route path="/upload" element={user ? <Upload /> : <SignIn />} />
        </Routes>
      </BrowserRouter>
    </notesData.Provider>
  );
}

export default App;

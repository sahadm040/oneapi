import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import CharacterListing from "./components/CharacterListing";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/CharacterListing" element={<CharacterListing />} />
          <Route path="/CharacterDetails/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

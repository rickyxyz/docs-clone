import "./style.css";
import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidv4()}`} />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;

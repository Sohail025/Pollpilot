import Dashboard from "./Pages/Dashboard";
import AddPoll from "./Pages/AddPoll";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addpoll" element={<AddPoll />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

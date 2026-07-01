import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/profile";

import Jobs from "./pages/jobs";

import Applications from "./pages/applications";

import Companies from "./pages/companies";




function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
path="/profile"
element={<Profile/>}
/>

<Route
path="/jobs"
element={<Jobs/>}
/>

<Route
path="/applications"
element={<Applications/>}
/>

<Route
path="/companies"
element={<Companies/>}
/>

      </Routes>

 
    </BrowserRouter>

  );

}

export default App;
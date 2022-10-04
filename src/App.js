import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Auth from "./pages/auth";
import Home from "./pages/home";
import SendMails from "./pages/sendMails";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/authenticate`} element={ <Auth/>}/>
            <Route path={`/sendMails`} element={ <SendMails/>}/>
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;

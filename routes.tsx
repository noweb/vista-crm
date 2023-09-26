import { Route, Routes } from "react-router-dom";
import {Home} from './src/pages/home'
import { Login } from "./src/pages/auth/login";
import { CreateClient } from "./src/pages/createClient";
import { Clients } from "./src/pages/clients";
import { Properties } from "./src/pages/properties";
import { Settings } from "./src/pages/settings";
import { Owners } from "./src/pages/owners";
export function Router(){
    return (
        
        <Routes>
          <Route path="/" element={<Login/>} />   
          <Route path="/dashboard" element={<Home/>} />    
          <Route path="/create-client" element={<CreateClient/>} />   
          <Route path="/clients" element={<Clients/>} /> 
          <Route path="/properties" element={<Properties/>} /> 
          <Route path="/settings" element={<Settings/>} /> 
          <Route path="/owners" element={<Owners/>} /> 
        </Routes>

    )
}
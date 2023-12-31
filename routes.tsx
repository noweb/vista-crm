import { Route, Routes } from "react-router-dom";
import {Home} from './src/pages/home'
import { Login } from "./src/pages/auth/login";
import { CreateClient } from "./src/pages/createClient";
import { Clients } from "./src/pages/clients";
import { Properties } from "./src/pages/properties";
import { Owners } from "./src/pages/owners";
import { CompleteRegistation } from "./src/pages/completeRegistration";
import { Contracts } from "./src/pages/contracts";
import { Team } from "./src/pages/team";
import { PendingProperties } from "./src/pages/pendingProperties";
import { StickyNotes } from "./src/pages/stickyNotes";
import { DataMetrics } from "./src/pages/dataMetrics";
import { Plantation } from "./src/pages/plantation";
import { PageError } from "./src/pages/pageError";
import { ClientDetails } from "./src/pages/clientDetails";
import { PublishingProperties } from "./src/pages/publishingProperties";
import { Users } from "./src/pages/users";
import { UserDetails } from "./src/pages/userDetails";
import { Marketplace } from "./src/pages/marketplace";
export function Router(){
    return (
        <Routes>
        <Route path="*" element={<PageError/>} />   
          <Route path="/" element={<Login/>} />   
          <Route path="/dashboard" element={<Home/>} />    
          <Route path="/create-client" element={<CreateClient/>} />   
          <Route path="/clients" element={<Clients/>} /> 
          <Route path="/properties" element={<Properties/>} /> 
          <Route path="/owners" element={<Owners/>} /> 
          <Route path="/complete-registration" element={<CompleteRegistation/>} /> 
          <Route path="/pending-properties" element={<PendingProperties/>} /> 
          <Route path="/contracts" element={<Contracts/>} /> 
          <Route path="/team" element={<Team/>} /> 
          <Route path="/sticky-notes" element={<StickyNotes/>} /> 
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/data-metrics" element={<DataMetrics/>} /> 
          <Route path="/plantation" element={<Plantation/>} /> 
          <Route path="/details-client" element={<ClientDetails/>} /> 
          <Route path="/publishing-properties" element={<PublishingProperties/>} /> 
          <Route path="/users" element={<Users/>} /> 
          <Route path="/user-details" element={<UserDetails/>} /> 
        </Routes>

    )
}
import { BrowserRouter, Route } from "react-router-dom";
import Combat from "./views/Combat/Combat";

export default function App() {
  return (
   
      <BrowserRouter>

        <Route path="/">
          <Combat/>
        </Route>
        
      </BrowserRouter>
    
  );
}

import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";


const root = createRoot(document.getElementById('root'));
root.render(<App />);

{/* <BrowserRouter>
<Routes>
<Route path="/main" element={<Main/>} ></Route>
<Route path="/profile" element={<Profile/>}></Route>
</Routes>
</BrowserRouter> */}


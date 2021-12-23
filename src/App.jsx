import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import ViewClient from "./pages/ViewClient";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clients" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="new" element={<NewClient />} />
                    <Route path="edit/:id" element={<EditClient />} />
                    <Route path=":id" element={<ViewClient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Items } from "../components/Items";
import { Resultados } from "../components/Resultados";

export function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items?search=" element={<Items />} />
                <Route path="/items/:id" element={<Resultados />} />
            </Routes>
        </Router>
    );
}

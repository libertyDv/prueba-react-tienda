import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Items } from "../components/Items";
import { Resultados } from "../components/Resultados";
import { Home } from "../components/Home";



export function AppRouting() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<Resultados />} />
                <Route path="/items/:id" element={<Resultados />} />
            </Routes>
        </Router>
    );
}

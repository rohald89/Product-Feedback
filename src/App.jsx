import { BrowserRouter, Routes, Route } from "react-router-dom"

import SuggestionsPage from "./pages/SuggestionsPage"
import RoadMapPage from "./pages/RooadMapPage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SuggestionsPage />} />
            <Route path="/roadmap" element={<RoadMapPage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App

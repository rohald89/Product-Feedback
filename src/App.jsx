import { BrowserRouter, Routes, Route } from "react-router-dom"

import SuggestionsPage from "./pages/SuggestionsPage"
import NewSuggestionPage from "./pages/NewSuggestionPage"
import EditSuggestionPage from "./pages/EditSuggestionPage"
import RoadMapPage from "./pages/RoadMapPage"
import SuggestionDetailPage from "./pages/SuggestionDetailPage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SuggestionsPage />} />
            <Route path="suggestions" index element={<SuggestionsPage />}/>
            <Route path="suggestions/new" index element={<NewSuggestionPage />}/>
            <Route path="suggestions/:id" index element={<SuggestionDetailPage />}/>
            <Route path="suggestions/:id/update" index element={<EditSuggestionPage />}/>
            <Route path="/roadmap" element={<RoadMapPage />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App

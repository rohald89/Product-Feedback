import { BrowserRouter, Routes, Route } from "react-router-dom"
import Settings from "./components/settings"

function App() {
  return (
    <BrowserRouter>
    <div className="h-screen md:pt-14 md:px-10 bg-lightGrey">
        <Settings/>
    </div>
    {/* <Routes>
        <Route path="/" element={<Header />} />
    </Routes> */}
        {/* <p class="heading-xl">heading 1</p>
        <p class="heading-lg">heading 2</p>
        <p class="heading-md">heading 3</p>
        <p class="heading-sm">heading 4</p>
        <p class="body-lg">body 1</p>
        <p class="body-md">body 2</p>
        <p class="body-bold">body 3</p> */}
    </BrowserRouter>
    )
}

export default App

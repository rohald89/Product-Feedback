import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./components/menu"
import Settings from "./components/settings"

function App() {
  return (
    <BrowserRouter>
    <div className="h-screen flex flex-col bg-lightGrey md:items-start md:gap-6 md:pt-14 md:px-10 lg:flex-row">
        <Settings/>
        <Menu />
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

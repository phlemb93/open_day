import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TopicItem from "./pages/TopicItem"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route index element={ <Home /> } />
          <Route path="topics/:id" element={ <TopicItem /> } />
        </Routes>
    </div>
  )
}

export default App

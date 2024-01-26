import { Outlet } from "react-router-dom";
import { useState } from "react";
import './App.css'
import { Header } from "./components/Header";

function App() {
  const [limit, setLimit] = useState(24);

  return (
    <>
      <Header limit={limit} setLimit={setLimit} />
      <main className="main">
        <div className="container">
          <Outlet context={{ limit }} />
        </div>
      </main>
    </>
  )
}

export default App

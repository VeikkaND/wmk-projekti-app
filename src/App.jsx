import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Opiskelijaelämää Joensuusssa</h1>
        <div className="textbox">
          <h2>otsikko</h2>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
          <p>tekstiä</p>
        </div>
        <Footer />
      </div>
      
    </>
    
  )
}

export default App

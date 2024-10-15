import Hero from "./components/Hero"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero title='Test tile' subtitle='This is the subtitle' />

      <section>
        <div className="container">
          <h2>Home Cards</h2>
        </div>
      </section>
    </>
  )
}

export default App

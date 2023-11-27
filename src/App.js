import Ammo from "./pages/Ammo"
import Armaments from "./pages/Armaments"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Error from "./pages/Error"

export default function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/ammo":
      Component = Ammo
      break
    case "/armaments":
      Component = Armaments
      break
    default:
      Component = Error
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}
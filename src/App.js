import Navbar from "./Navbar"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Armory from "./pages/Armory"
import Ammo from "./pages/Ammo"
import Armaments from "./pages/Armaments"
import Armor from "./pages/Armor"
import AshesofWar from "./pages/Ashes-of-War"
import BolsteringMaterials from "./pages/Bolstering-Materials"
import CraftingMaterials from "./pages/Crafting-Materials"
import Gestures from "./pages/Gestures"
import Info from "./pages/Info"
import Keys from "./pages/Keys"
import Shop from "./pages/Shop"
import Spells from "./pages/Spells"
import SpiritAshes from "./pages/Spirit-Ashes"
import Talismans from "./pages/Talismans"
import Tools from "./pages/Tools"
import Item from "./pages/Item"

export default function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/armory":
      Component = Armory
      break
    case "/ammo":
      Component = Ammo
      break
    case "/armaments":
      Component = Armaments
      break
    case "/armor":
      Component = Armor
      break
    case "/ashes-of-war":
      Component = AshesofWar
      break
    case "/bolstering-materials":
      Component = BolsteringMaterials
      break
    case "/crafting-materials":
      Component = CraftingMaterials
      break
    case "/gestures":
      Component = Gestures
      break
    case "/info":
      Component = Info
      break
    case "/keys":
      Component = Keys
      break
    case "/shop":
      Component = Shop
      break
    case "/spells":
      Component = Spells
      break
    case "/spirit-ashes":
      Component = SpiritAshes
      break
    case "/talismans":
      Component = Talismans
      break
    case "/tools":
      Component = Tools
      break
    case "/item":
      Component = Item
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
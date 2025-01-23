import { Card } from "./components/Card/card"
import { ColorPicker } from "./components/ColorPicker/colorPicker.tsx"
import { Create } from "./components/Header/Create/create.tsx"
import { Search } from "./components/Header/Search/search.tsx"

function App() {

  return (
    <>
     <Card />
     <Search />
     <Create />
     <ColorPicker />
    </>
  )
}

export default App

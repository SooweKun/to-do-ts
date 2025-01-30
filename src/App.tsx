import { Todo } from "./components/Todo/todo.tsx"
import { Header } from "./components/Header/header.tsx"
import { Footer } from "./components/Footer/footer.tsx"
import { useState } from "react"
import soon from "./assets/bg.png"
import dark from "/src/assets/dark-bg.png"
import { useCardStore } from "../src/store/useCardStore.tsx";
import { Card } from "../src/store/useCardStore.tsx"

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const [isOn, setIsOn] = useState(false)
  const [one, setOne] = useState<Card[] | null>(null)
  const { card } = useCardStore()

  const toggleSwitch = () => setIsOn(!isOn)

  const handleOpen = () => {
    setOpen(true)
    setActive(!active)      

    setTimeout(() => {
        setActive(false);
      }, 300);
}

  const sorting = (value: string) => {    
    if(value === ""){
      setOne(card)
      return
    }
    if (!card || !value) return;
    const filteredData = card && card.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setOne(filteredData)
  };

  return (
    <div style={{ backgroundImage: `url(${isOn ? dark : soon})` }} className="bg-cover w-[100%] h-[100%]">
      <div className="flex h-screen flex-col gap-[15px] items-center justify-center font-jura">
     <Header 
      handleOpen={handleOpen}
      active={active}
      sorting={sorting}
     />
     <Todo 
      open={open}
      setOpen={setOpen}
      toggleSwitch={toggleSwitch}
      isOn={isOn}
      one={one}
     />
     <Footer />  
    </div>
    </div>
  )
}

export default App

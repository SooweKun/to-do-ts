import { Todo } from "./components/Todo/todo.tsx"
import { Header } from "./components/Header/header.tsx"
import { Footer } from "./components/Footer/footer.tsx"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    setActive(!active)      

    setTimeout(() => {
        setActive(false);
      }, 300);
}

  return (
    <div className="flex h-screen flex-col gap-[15px] items-center justify-center font-jura">
     <Header 
      handleOpen={handleOpen}
      active={active}
     />
     <Todo 
      open={open}
      setOpen={setOpen}
     />
     <Footer />  
    </div>
  )
}

export default App

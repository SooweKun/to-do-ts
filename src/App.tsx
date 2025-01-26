import { Card } from "./components/Card/card"
import { Todo } from "./components/Todo/todo.tsx"
import { Header } from "./components/Header/header.tsx"

function App() {

  return (
    <div className="flex gap-[100px] flex-wrap h-screen">
     <Card />
     <Todo />
     <Header />
    </div>
  )
}

export default App

import { createContext, useState } from "react"
import { inserePassagem, listaTarefas, modificaTarefa, removeTarefa } from "../services/TaskServices"

const TaskContext = createContext({
  tarefas: [],
  inserePassagem: () => { },
  modificaTarefa: () => { },
  removeTarefa: () => { },
  listaTarefas: () => { },
})

export function TaskContextProvider(props) {
  const [minhasTarefas, setMinhasTarefas] = useState([])

  async function inserir(tarefa) {
    try {
      await inserePassagem(tarefa)
      setMinhasTarefas([...minhasTarefas, tarefa])
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function modificar(tarefa) {
    try {
      await modificaTarefa(tarefa)
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function remover(key) {
    try {
      await removeTarefa(key)
      setMinhasTarefas((valorAtingo) => valorAtingo.filter((item) => item.key != key))
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function listar() {
    try {
      const data = await listaTarefas()
      setMinhasTarefas(data)
    } catch (error) {
      throw Error(error.message)
    }
  }

  const contexto = {
    tarefas: minhasTarefas,
    inserePassagem: inserir,
    modificaTarefa: modificar,
    removeTarefa: remover,
    listaTarefas: listar,
  }

  return (
    <TaskContext.Provider value={contexto}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext
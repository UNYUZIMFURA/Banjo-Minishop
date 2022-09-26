import React from 'react'
import {RiDeleteBin4Fill} from "react-icons/ri"
import {FiEdit} from "react-icons/fi"
import {MdOutlineFileDownloadDone} from "react-icons/md"
import { Todo } from './model'

type Props = {
    todo: Todo,
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo
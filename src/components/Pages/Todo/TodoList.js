import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="fila hover:bg-white">
    <span className={myClass}>{descripcion}</span>
    <section class="iconos">
    <MdDone size={"2rem"} onClick={onClick} className="hover:text-green-500"></MdDone>
    <MdDelete size={"2rem"}  onClick={onDeleteClick} className="hover:text-red-500" ></MdDelete>
    </section>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem 
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul >
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;

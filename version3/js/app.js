import {TodoList} from './module/show.js'
import {get, getAll} from './module/getEle.js'
;(()=>{

    const form = get('.toDo form');
    const txt = get('.toDo form .userText');
    const out = get('.toDo .output');
    
    const todoList = new TodoList(form,txt,out);
    todoList.init();
})();
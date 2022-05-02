import { getUser, clearToken, clearUser} from '../../shared/services/local-storage-service';
import { getTodos } from '../../api/api-handlers';
import { Todo } from '../todo/todo';
import {Header} from '../header/header';

export const mainPageHandler = async () => {
    const headerUserName = document.getElementById('userName');
    const main = document.querySelector('.main-header');
    const headerEmail = document.getElementById('email');
    const todosWrapper = document.querySelector('.main__todos');
    const { firstName, lastName, email } = getUser(); 
    
    main.append(new Header(firstName, lastName, email).getHeader());

    let todos = [];
  
    await getTodos().then(todosArr => {
        todos = Object.keys(todosArr).map(key => {
            const todo = { id: key, ...todosArr[key]};

            todosWrapper.append(new Todo(todo).getTodo());

            return todo;
        });
    });
}

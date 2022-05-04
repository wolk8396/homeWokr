import { PATHNAMES, wayTo } from "../../shared/constants/routes";
import {clearToken, clearUser} from '../../shared/services/local-storage-service';

export class Header {
    #firstName;
    #lastName;
    #email;

    constructor (firstName, lastName, email) {
      this.#firstName = firstName
      this.#lastName = lastName
      this.#email = email
    }

    get firstName() {
      return this.#firstName;
    }

    set firstName(value) {
      (typeof value === 'string') ? this.#firstName = value : null;
    }

    get lastName() {
      return this.#lastName;
    }

    set lastName(value) {
      (typeof value === 'string') ? this.#lastName = value : null;
    }

    get email() {
      return this.#email;
    }

    set email(value) {
      (typeof value === 'string') ? this.#email = value : null;
    }

  getHeader() {
    const header = document.createElement('div');
    const header_logo = document.createElement('div');
    const p = document.createElement('p');
    const header_user = document.createElement('div');
    const header_user_info = document.createElement('div');
    const userName = document.createElement('p'); 
    const email = document.createElement('p'); 
    const header_user_photo = document.createElement('div');
    const btn_find = document.createElement('button');
    const btn_logout = document.createElement('button');
    const myMap = new Map([
      [PATHNAMES.main, () => {
        btn_find.innerText = 'find', p.innerText = "TODO LIST";
        userName.innerText = `${this.#firstName} ${this.#lastName} `,
        email.innerText = `${this.#email}`; 
      }],
      [PATHNAMES.find,() => {
        btn_find.innerText= 'main page', p.innerText = "Find users",
        header_user_photo.remove();
      }]
    ]);

    header.className= 'header';
    header_logo.className ='header__logo';
    header_user.className = 'header__user';
    header_user_info.className = 'header__user__info';
    userName.className = 'userName';
    email.className = 'email';
    header_user_photo.className = 'header__user__photo';
    btn_find.className = 'btns';
    btn_logout.className = 'btns';

    btn_logout.innerText='Logout';

    header.append(header_logo, header_user);
    header_logo.append(p);
    header_user.append(header_user_info, header_user_photo, btn_find, btn_logout);
    header_user_info.append(userName, email);

    btn_find.onclick = () => wayTo();

    btn_logout.onclick = () => {
      clearToken();
      clearUser();
      window.location.pathname = PATHNAMES.sign_in
    }

    myMap.get(window.location.pathname)();

    return header;
  }
}

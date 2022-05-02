import { Header } from "../header/header";

export const renderHeader = () => {
  const main = document.querySelector('.main');

  main.append(new Header().getHeader())
}
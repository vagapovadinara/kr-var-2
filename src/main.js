import ExpenseForm from "./view/ExpenseForm.js";
import ExpenseFilter from "./view/ExpenseFilter.js";
import ExpenseList from "./view/ExpenseList.js";
import { render, RenderPosition } from "./framework/render.js";

const ExpenseConteiner= document.querySelector('.expense-form');
const ExpenseFilterConteiner= document.querySelector('.expense-filter');
const  ExpenseListConteiner= document.querySelector('.expense-list');



render(new ExpenseForm(), ExpenseConteiner, RenderPosition.BEFOREBEGIN);
render(new ExpenseFilter(), ExpenseFilterConteiner, RenderPosition.BEFOREBEGIN);
render(new ExpenseList(), ExpenseListConteiner, RenderPosition.BEFOREBEGIN);
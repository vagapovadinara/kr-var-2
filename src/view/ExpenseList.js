import { createElement } from "../framework/render.js";

function createExpenseListTemplate() {
  return `<div class="expense-list">
  <h2>Список расходов</h2>
  <ul id="expense-list">
      <li>Продукты - 2000 руб.</li>
      <li>Коммунальные услуги - 1500 руб.</li>
      <li>Транспорт - 800 руб.</li>
      <li>Развлечения - 1200 руб.</li>
      <li>Медицинские расходы - 500 руб.</li>
      <li>Страховка - 1000 руб.</li>
  </ul>
</div>
`;
}

export default class ExpenseList {

  getTemplate() {
    return createExpenseListTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}

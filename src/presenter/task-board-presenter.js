import TaskColumnComponent from "../view/task-column-component.js";
import TaskComponent from "../view/task-component.js";
import ClearButtonComponent from "../view/clear-button-component.js";
import { render } from "../framework/render.js";
import { Status } from "../consts.js";

export default class ExpenseListPresenter {
  ExpenseListConteiner;
  taskListComponent;
  tasksModel;

  constructor({ ExpenseListConteiner, tasksModel }) {
    this.taskBoardContainer = taskBoardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    const tasks = [...this.tasksModel.getTasks()];

    for (let key in Status) {
      const taskColumnComponent = new TaskColumnComponent({
        status: Status[key],
      });
      const tasksInCurrentStatus = tasks.filter(
        (task) => task.status === Status[key]
      );

      render(taskColumnComponent, this.ExpenseListConteiner);

      for (let key in tasksInCurrentStatus) {
        const taskComponent = new TaskComponent({
          task: tasksInCurrentStatus[key],
        });
        render(taskComponent, taskColumnComponent.getElement());
      }
    }

    this.makeClearButton();
  }

  makeClearButton() {
    const trashContainer = document.querySelector(`.${Status.TRASH}`);
    render(new ClearButtonComponent(), trashContainer);
  }
}
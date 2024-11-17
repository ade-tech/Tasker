import View from "./previewView.js";
import cancel from "../images/Close.png";

class DescriptionView extends View {
  // Override parent element to be `document.body`
  #parentElement = document.body;
  #data = [];

  // Add handler to show description view
  addHandlershow(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("delete") ||
        e.target.classList.contains("complete")
      )
        return;
      const task = e.target.closest(".task");
      if (!task) return;
      const taskMarkup = task.querySelector("h1").innerHTML;
      handler(taskMarkup);
    });
  }

  render(data) {
    this.#data = data;

    const markup = this.#data.map(this._generateTaskMarkup).join("");
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);

    this._addHandlerCloseButton();
  }

  _generateTaskMarkup(task) {
    return `
      <div class="taskDescription">
        <form class="formcontainer">
          <img src="${cancel}" alt="close" class="close" />
          <h1>Task Description</h1>
          <input
            type="text"
            name="text"
            placeholder="Enter the Task"
            value="${task.text}"
            disabled
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Add a little description"
            disabled
          >${task.description}</textarea>
        </form>
      </div>
    `;
  }
  _addHandlerCloseButton() {
    this.#parentElement.addEventListener("click", (e) => {
      const closeButton = e.target.closest(".close");
      if (!closeButton) return;

      const parentElement = closeButton.closest(".taskDescription");
      parentElement.remove();
    });
  }

  // Clear method to clear the target element's content
  _clear(element) {
    element.innerHTML = "";
  }
}

export default new DescriptionView();

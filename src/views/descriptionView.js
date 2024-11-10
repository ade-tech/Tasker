import View from "./previewView.js";

class decscriptionView extends View {
  #parentElement = document.querySelector(".taskView");
  #data = [];

  addHandlershow(handler) {
    this.#parentElement.addEventListener("click", (e) => {
      const task = e.target.closest(".task");
      const taskMarkup = task.querySelector("h1").innerHTML;
      handler(taskMarkup);
    });
  }
}

export default new decscriptionView();

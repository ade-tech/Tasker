class DeleteView {
  #parentElement = document.querySelector(".taskView");
  addHandlerDelete(handler) {
    this.#parentElement.addEventListener("click", function (e) {
      const deleteButton = e.target.closest(".delete");
      if (!deleteButton) return;

      const taskElement = deleteButton.closest(".task");
      const taskText = taskElement.querySelector("h1").textContent;
      taskElement.remove();
      handler(taskText);
    });
  }
}
export default new DeleteView();

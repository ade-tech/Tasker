class completed {
  #parentElement = document.querySelector(".taskView");
  addHandlerComplete(handler) {
    this.#parentElement.addEventListener("click", function (e) {
      const completeButton = e.target.closest(".complete");
      if (!completeButton) return;

      const taskElement = completeButton.closest(".task");
      const taskText = taskElement.querySelector("h1").textContent;
      completeButton.style.fill = "green";
      completeButton.style.stroke = "none";
      handler(taskText);
    });
  }
}
export default new completed();

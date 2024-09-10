class FormWindowView {
  #element = document.querySelector(".formwindow");
  #dataContainer = document.querySelector(".formcontainer");
  #triggerButton = document.querySelector(".addTask");
  #closeButton = document.querySelector(".close");
  #createTask = document.querySelector(".appendTask");
  #inputs = document.querySelectorAll("input,textarea");

  addhandlerClick(handler) {
    this._clickListener(this.#triggerButton, handler);
    //  this._clickListener(this.#element, handler);
    this._clickListener(this.#closeButton, handler);

    this._keydownlistener(this.#element, handler);
  }
  _clickListener(element, handler, eventTarget = this.#element) {
    element.addEventListener("click", (e) => {
      if (element === this.#closeButton) e.stopPropagation();

      handler(eventTarget);
    });
  }
  _keydownlistener(eventTarget, handler) {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "b") {
        if (eventTarget.classList.contains("hidden")) handler(eventTarget);
      }
    });
  }
  addTaskHandler(handler) {
    this.#createTask.addEventListener("click", (e) => {
      e.preventDefault();
      const timestamp = Date.now();
      const notificationTime = timestamp + 24 * 60 * 60;
      const formData = Object.fromEntries(this._generateTaskData());
      formData.id = timestamp;
      formData.timestamp = timestamp;
      formData.notificationTime = notificationTime;
      formData.pending = true;

      handler(formData);
      this._clearForm(this.#inputs);
      this.#element.classList.add("hidden");
    });
  }

  _generateTaskData() {
    const formData = new FormData(this.#dataContainer);
    return formData.entries();
  }
  _clearForm(formInputs) {
    formInputs.forEach((input) => (input.value = ""));
  }
}

export default new FormWindowView();

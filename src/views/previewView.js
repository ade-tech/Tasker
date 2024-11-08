class View {
  #parentView = document.querySelector(".taskView");
  #data;

  render(data) {
    this.#data = data;

    if (Object.keys(data).length === 0) {
      const errorHTML = this._renderError();
      this._clear(this.#parentView);
      this.#parentView.insertAdjacentHTML("afterbegin", errorHTML);
      return;
    }
    this._clear(this.#parentView);

    const markup = data.map(this._generateTaskMarkup).join("");
    this.#parentView.insertAdjacentHTML("afterbegin", markup);
  }

  _clear(element) {
    element.innerHTML = "";
  }
}

export default View;

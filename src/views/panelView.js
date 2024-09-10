class PanelView {
  #parentElement = document.querySelector(".states");

  addhandlerClick() {
    this.#parentElement.addEventListener("click", (e) => {
      const allButtons = Array.from(
        this.#parentElement.querySelectorAll(".menu_item")
      );
      const clicked = e.target.closest(".menu_item");
      if (!clicked) return;

      allButtons.forEach((button) => {
        const image = button.querySelector("img");
        if (button === clicked) {
          image.src = button.dataset.active;
          clicked.classList.add("active");
          return;
        }

        image.src = button.dataset.default;
        button.classList.remove("active");
      });
    });
  }
}

export default new PanelView();

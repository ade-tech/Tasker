// Import images
import taskImg from "../images/Task.png";
import taskActiveImg from "../images/TaskActive.png";
import completedImg from "../images/completed.png";
import completedActiveImg from "../images/completedActive.png";
import pendingImg from "../images/pending.png";
import pendingActiveImg from "../images/pendingActive.png";
import deleteImg from "../images/delete.png";
import deleteActiveImg from "../images/deleteActive.png";

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
        const activeImage = button.dataset.active;
        const defaultImage = button.dataset.default;

        // Dynamically set the src based on the imported images
        if (button === clicked) {
          image.src = this.getImageSrc(activeImage);
          clicked.classList.add("active");
          return;
        }

        image.src = this.getImageSrc(defaultImage);
        button.classList.remove("active");
      });
    });
  }

  getImageSrc(imageName) {
    const imageMap = {
      "src/images/Task.png": taskImg,
      "src/images/TaskActive.png": taskActiveImg,
      "src/images/completed.png": completedImg,
      "src/images/completedActive.png": completedActiveImg,
      "src/images/pending.png": pendingImg,
      "src/images/pendingActive.png": pendingActiveImg,
      "src/images/delete.png": deleteImg,
      "src/images/deleteActive.png": deleteActiveImg,
    };

    return imageMap[imageName] || ""; // Default to empty string if not found
  }
}

export default new PanelView();

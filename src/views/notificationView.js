import View from "./previewView.js";

class notificationView extends View {
  #triggerElement = document.querySelector(".notification");
  #parentView = document.querySelector(".notificationwindow");
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
    console.log(data);
    const markup = data.map(this._generateTaskMarkup).join("");
    this.#parentView.insertAdjacentHTML("afterbegin", markup);
  }

  addhandlerStatus(handler) {
    this.#triggerElement.addEventListener("click", () => {
      if (this.#triggerElement.classList.contains("notify-active")) {
        this.#triggerElement.classList.remove("notify-active");
      } else {
        this.#triggerElement.classList.add("notify-active");
      }

      handler(this.#parentView);
    });
  }
  _generateTaskMarkup(task) {
    return `
    <div class="notifycontainer">
        <img src="images/Task.png" alt="" class="profile" width="20px" />
        <p class="notification-text">
         <b>${task.text} <span></span></b>
        </p>
      </div>`;
  }
  _renderError() {
    return `
    <div class="error">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="60px" viewBox="0 0 32 40" version="1.1" xml:space="preserve" style="" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="matrix(1,0,0,1,-104,0)"><g><path d="M128,12.243L115.243,25L130,25C130.347,25 130.668,24.821 130.851,24.526C131.033,24.231 131.049,23.863 130.894,23.553C130.894,23.553 129.143,20.05 128.317,18.397C128.108,17.981 128,17.521 128,17.056L128,12.243Z"/><g transform="matrix(1,0,0,1,52,0)"><path d="M71,27L65,27L65,27.002C65,27.797 65.316,28.56 65.878,29.122C66.44,29.684 67.203,30 67.998,30L68,30C68.796,30 69.559,29.684 70.121,29.121C70.684,28.559 71,27.796 71,27Z"/></g><path d="M109.65,24.936L106.293,28.293C105.903,28.683 105.903,29.317 106.293,29.707C106.683,30.097 107.317,30.097 107.707,29.707L133.707,3.707C134.098,3.317 134.098,2.683 133.707,2.293C133.317,1.903 132.683,1.903 132.293,2.293L126.801,7.785C125.556,5.781 123.45,4.368 121,4.062L121,3C121,2.448 120.552,2 120,2C119.448,2 119,2.448 119,3L119,4.062C115.054,4.554 112,7.92 112,12C112,14.765 112,15.621 112,17.056C112,17.521 111.892,17.981 111.683,18.397C110.857,20.05 109.106,23.553 109.106,23.553C108.951,23.863 108.967,24.231 109.149,24.526C109.268,24.717 109.445,24.86 109.65,24.936Z"/></g></g><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"></svg>
          <h1>
            You have no notifications!
          </h1>
        </div>`;
  }
}

export default new notificationView();

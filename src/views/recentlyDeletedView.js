import View from "./previewView.js";
import errorImage from "../images/noun-deleted-4644672.png";

class RecentlyDeletedView extends View {
  #triggerElement = document.querySelector(".deleted");
  #data;

  addHandlerDelete(handler) {
    if (this.#triggerElement) {
      this.#triggerElement.addEventListener("click", () => {
        handler();
      });
    }
  }

  _generateTaskMarkup(task) {
    return `
          <div class="task">
            <div class="icons">
            <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="30px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M42.3,16.8l12.1-3.6l-0.4-1.3c-0.2-0.7-0.7-1.2-1.3-1.6c-0.4-0.2-0.8-0.3-1.2-0.3c-0.3,0-0.5,0-0.8,0.1l-7,2.1  c-1.4,0.4-2.2,1.9-1.8,3.3L42.3,16.8z"/><path d="M24.1,29.1l52.2-15.6L76,12.8c-0.5-1.5-1.9-2.5-3.4-2.5c-0.3,0-0.7,0-1,0.2l-22.7,6.8l-7.1,2.1c0,0,0,0,0,0l-15.5,4.7  c-1.9,0.5-2.9,2.5-2.4,4.4L24.1,29.1z"/><path d="M75.4,79.3V33.7c0-0.6-0.5-1.1-1.1-1.1H26.4c-0.6,0-1.1,0.5-1.1,1.1v45.6c0,5.9,4.8,10.7,10.6,10.7h28.8  C70.6,90,75.4,85.2,75.4,79.3z M40.6,73.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1V43.8c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1V73.3z M51.5,73.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1V43.8c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1V73.3z M62.4,73.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1V43.8c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1V73.3z"/>
            </div>
            <h1>${task.text}</h1>
          </div>
     `;
  }
  _renderError() {
    return `
    <div class="error">
          <img src="${errorImage}" alt="" width="100px" />
          <h1>
            You haven't deleted <br />
            any tasks yet!
          </h1>
        </div>`;
  }
}
export default new RecentlyDeletedView();

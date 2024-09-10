import View from "./previewView.js";
class allView extends View {
  #triggerElement = document.querySelector(".all");
  #data = [];
  addHandlerLoad(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }

  addHandlerAll(handler) {
    this.#triggerElement.addEventListener("click", () => {
      if (this.#data == []) {
        this._renderError();
      } else {
        handler();
      }
    });
  }
  _generateTaskMarkup(task) {
    console.log(task);
    return `
          <div class="task">
            <div class="icons">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="-5.0 -10.0 110.0 135.0"
              enable-background="new 0 0 100 100"
              xml:space="preserve"
              ${
                task.completed
                  ? `stroke="none" fill="green" `
                  : `stroke="gray" fill="transparent" `
              }
              stroke-width="8px"
              width="30px"
              height="30px"
              class="complete"
            >
              <path
                d="M50,3C24.0844097,3,3,24.0844097,3,50s21.0844097,47,47,47c25.9163284,0,47-21.0844116,47-47S75.9163284,3,50,3z   M75.7727127,37.8906784L47.1550369,68.4529037C46.2999954,69.3627243,45.1081161,70,43.8592339,70  c-0.0059242,0-0.0125847,0-0.0185204,0c-1.2422066,0-2.4303856-0.6215439-3.2883873-1.5195236L24.2539387,51.3671761  c-1.7352581-1.8166885-1.6701126-4.7241325,0.1458378-6.4593887c1.8166904-1.7337761,4.6964474-1.6836281,6.4309635,0.1315804  l12.9825954,13.5796394l25.3292732-26.9548759c1.7204514-1.8285351,4.5972443-1.9243584,6.4302216-0.2009449  C77.4028473,33.1836357,77.491684,36.0599213,75.7727127,37.8906784z"
              />
            </svg>
              <img src="images/trash-icon.svg" alt="" class="delete" />
            </div>
            <h1>${task.text}</h1>
          </div>
     `;
  }
  _renderError() {
    return `
    <div class="error">
          <img src="images/noun-add-4644662.png" alt="" width="100px" />
          <h1>
            You haven't added<br />
            any tasks yet!
          </h1>
        </div>`;
  }
}

export default new allView();

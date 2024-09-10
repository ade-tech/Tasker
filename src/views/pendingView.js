import View from "./previewView.js";

class pendingView extends View {
  #triggerElement = document.querySelector("#pending");
  #data;
  addHandlerPending(handler) {
    this.#triggerElement.addEventListener("click", function () {
      handler();
    });
  }
  _generateTaskMarkup(task) {
    return `
    
          <div class="task">
            <div class="icons">
             <svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" fill="orange" width="30px"
              height="30px" xml:space="preserve"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g i:extraneous="self"><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4     c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z      M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/></g><path d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50c0,26.2,21.3,47.5,47.5,47.5S97.5,76.2,97.5,50C97.5,23.8,76.2,2.5,50,2.5z M70.1,55.3    H50c-2.9,0-5.3-2.4-5.3-5.3V25.3c0-2.9,2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3v19.5h14.8c2.9,0,5.3,2.4,5.3,5.3    C75.4,52.9,73,55.3,70.1,55.3z"/></g></switch></svg>
            </div>
            <h1>${task.text}</h1>
          </div>
     `;
  }
  _renderError() {
    return `
    <div class="error">
          <img src="images/noun-history-4644679.png" alt="" width="100px" />
          <h1>
            You don't haved<br />
            any pending task!
          </h1>
        </div>`;
  }
}

export default new pendingView();

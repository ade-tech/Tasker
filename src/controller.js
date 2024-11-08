import * as model from "./model.js";
import formWindow from "./views/formWindow.js";
import panelView from "./views/panelView.js";
import allView from "./views/allView.js";
import deleteView from "./views/deleteView.js";
import recentlyDeletedView from "./views/recentlyDeletedView.js";
import notificationView from "./views/notificationView.js";
import completed from "./views/completed.js";
import completedView from "./views/completedView.js";
import pendingView from "./views/pendingView.js";

const more = document.querySelector(".more");

const controlHiddenStatus = function (element) {
  model.toggleActiveStatus(element);
};
const controlAddTask = function (task) {
  model.Addtask(task);
  allView.render(model.applicationState.taskLists);
  deleteView.addHandlerDelete(controlDeleteTask);
};

const controlDeleteView = function () {
  recentlyDeletedView.render(model.applicationState.recentDeleted);
};
const controlAllViews = function () {
  allView.render(model.applicationState.taskLists);
};

const controlLoad = function () {
  allView.render(model.applicationState.taskLists);
};
const controlDeleteTask = function (markup) {
  model.applicationState.taskLists.find((task) => {
    if (task.text === markup) model.deleteTask(task.id);
  });
  allView.render(model.applicationState.taskLists);
};
const controlCompleteTask = function (markup) {
  model.applicationState.taskLists.find((task) => {
    if (task.text === markup) {
      model.completeTask(task);
    }
  });
};

const controlCompletedView = function () {
  const completedArray = model.applicationState.taskLists.filter(
    (task) => task.completed === true
  );

  completedView.render(completedArray);
};

const controlPendingView = function () {
  const pendingarray = model.applicationState.taskLists.filter(
    (task) => task.pending === true
  );
  pendingView.render(pendingarray);
};
const controlNotificationView = function () {
  const pendingNotifications = model.applicationState.taskLists.filter(
    model.notification
  );
  notificationView.render(pendingNotifications);
};

const init = function () {
  formWindow.addhandlerClick(controlHiddenStatus);
  notificationView.addhandlerStatus(controlHiddenStatus);
  formWindow.addTaskHandler(controlAddTask);
  deleteView.addHandlerDelete(controlDeleteTask);
  panelView.addhandlerClick();
  allView.addHandlerAll(controlAllViews);
  recentlyDeletedView.addHandlerDelete(controlDeleteView);
  allView.addHandlerLoad(controlLoad);
  completed.addHandlerComplete(controlCompleteTask);
  completedView.addHandlerComplete(controlCompletedView);
  pendingView.addHandlerPending(controlPendingView);
  notificationView.addhandlerStatus(controlNotificationView);
};

init();

export const applicationState = {
  taskLists: [],
  recentDeleted: [],
  completedTask: [],
  currentTime: Date.now(),
};

export const Addtask = function (task) {
  applicationState.taskLists.push(task);
  updateapplicationState();
};

const updateapplicationState = function () {
  localStorage.setItem("applicationState", JSON.stringify(applicationState));
};
export const toggleActiveStatus = function (element) {
  element.classList.toggle("hidden");
};

export const deleteTask = function (id) {
  const toBeDeleteID = applicationState.taskLists.findIndex(
    (task) => task.id === id
  );

  const [recentlyDeleted] = applicationState.taskLists.splice(toBeDeleteID, 1);

  applicationState.recentDeleted.push(recentlyDeleted);
  updateapplicationState();
};
export const completeTask = function (taskProvided) {
  const toBeCompletedID = applicationState.taskLists.find((task) => {
    if (task.id === taskProvided.id) {
      task.completed = true;
      task.pending = false;
      return task;
    }
  });

  applicationState.completedTask.push(toBeCompletedID);
  updateapplicationState();
};

export const notification = function (task) {
  if (applicationState.currentTime - task.timestamp > 34000) {
    const time = new Date(
      applicationState.currentTime - task.timestamp
    ).getSeconds();

    return task;
  }
};
const init = function () {
  const loadApplicationString = localStorage.getItem("applicationState");
  const loadApplicationState = JSON.parse(loadApplicationString);
  if (loadApplicationState) {
    applicationState.taskLists = loadApplicationState.taskLists;
    applicationState.recentDeleted = loadApplicationState.recentDeleted;
    applicationState.completedTask = loadApplicationState.completedTask;
  }
};
//prettier-ignore
const clearLocalStorage = function () {
  localStorage.clear();
};
// clearLocalStorage();

init();

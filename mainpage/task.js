function tasks() {
  var existCondition = setInterval(function () {
    if ($("task").length) {
      clearInterval(existCondition);
      const element = document.getElementsByClassName("task");
      console.log(element);
      //   doTheRestOfTheStuff(parameters);
      // Get the modal
    }
  }, 100); // check every 100ms
}

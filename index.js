
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  const element = document.createElement("div");
  element.textContent = text;
  container.appendChild(element);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.remove();
  }
}

function simulateClick(elementId, text) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  element.addEventListener("click", function () {
    addElementToDOM(elementId, text);
  });

  element.click();
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const output = document.getElementById(outputId);
  const input = form?.querySelector("#user-input");
  const errorMessage = document.getElementById("error-message");

  if (!form || !output || !input) {
    return;
  }

  const value = input.value.trim();

  if (errorMessage) {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
  }

  if (!value) {
    if (errorMessage) {
      errorMessage.textContent = "Input cannot be empty";
      errorMessage.classList.remove("hidden");
    }
    return;
  }

  addElementToDOM(outputId, value);
}

if (typeof module !== "undefined") {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
  };
}
export const contentToggle = (id) => {
  let content = id + "Content";
  let button = id + "ShowMore";
  let contentElement = document.getElementById(content);
  let buttonElement = document.getElementById(button);
  let showMoreText = buttonElement.innerHTML;

  if (showMoreText === "Show more") {
    contentElement.style.maxHeight = "5000px";
    contentElement.style.opacity = "100";
    buttonElement.innerHTML = "Show less";
  } else {
    contentElement.style.maxHeight = "0";
    contentElement.style.opacity = "0";
    buttonElement.innerHTML = "Show more";
  }
  scroll(id);
};

const scroll = (id) => {
  let idElement = document.getElementById(id);
  const yOffset = -100;
  const y =
    idElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y });
};

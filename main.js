const menuBtn = document.querySelector("#menu-btn");
const menuLines = document.querySelectorAll("#menu-btn #menu-line");

const aSideContainer = document.querySelector("#aside-container");
const aSideInner = document.querySelector("#aside-inner");

const toggleMenuBar = () => {
  const [firstLine, secondLine, thirdLine] = menuLines;
  if (!aSideContainer.classList.contains("hidden")) {
    setTimeout(() => {
      aSideContainer.classList.toggle("hidden");
    }, 300);
  } else {
    aSideContainer.classList.toggle("hidden");
  }
  setTimeout(() => {
    aSideInner.classList.toggle("translate-x-0");
  }, 10);

  if (secondLine.classList.contains("w-0")) {
    secondLine.classList.remove("w-0", "opacity-0");
    secondLine.classList.add("w-8");
    firstLine.classList.remove(
      "-rotate-45",
      "w-[calc-(19*1.41421356237)px]",
      "-translate-y-[3px]"
    );
    thirdLine.classList.remove(
      "rotate-45",
      "w-[calc-(19*1.41421356237)px]",
      "translate-y-[3px]"
    );
  } else {
    secondLine.classList.add("w-0", "opacity-0");
    secondLine.classList.remove("w-8");
    firstLine.classList.add(
      "-rotate-45",
      "w-[calc-(19*1.41421356237)px]",
      "-translate-y-[3px]"
    );
    thirdLine.classList.add(
      "rotate-45",
      "w-[calc-(19*1.41421356237)px]",
      "translate-y-[3px]"
    );
  }
};

menuBtn.addEventListener("click", toggleMenuBar);

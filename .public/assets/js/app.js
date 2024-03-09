// ** Header ** //
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
function toggleMenu() {
  header.classList.toggle("header-active");
  headerMenu.classList.toggle("active");
}

// ** Accordions ** //
const getAccordionParents = document.querySelectorAll("[data-accordion");
getAccordionParents.forEach((parent) => {
  const isMultiple = parent.dataset.multiple;
  const accordions = parent.querySelectorAll(".uaccordion");
  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".uaccordion__header");
    const body = accordion.querySelector(".uaccordion__body");
    const content = accordion.querySelector(".uaccordion__content");

    header.addEventListener("click", () => {
      const isActive = accordion.classList.contains("active");
      if (!isActive) {
        accordion.classList.add("active");
        body.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove("active");
        body.style.maxHeight = 0;
      }

      if (!isMultiple || isMultiple == "false") {
        accordions.forEach((el) => {
          if (el !== accordion) {
            el.classList.remove("active");
            el.querySelector(".uaccordion__body").style.maxHeight = 0;
          }
        });
      }
    });
  });
});

// ** Process Work ** //
const getProcessFilter = document.querySelectorAll(".process__steps li");
const getProcessSteps = document.querySelectorAll(".process__step");
getProcessFilter.forEach((item, idx) => {
  item.addEventListener("click", () => {
    getProcessFilter.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
    getProcessSteps.forEach((el) => {
      el.classList.remove("active");
    });
    getProcessSteps[idx].classList.add("active");
  });
});

//** fancybox **//
let dataFancybox = ["about"];
dataFancybox.forEach((name) => {
  Fancybox.bind(`[data-fancybox="${name}"]`, {
    Images: { Panzoom: { maxScale: 3 } },
  });
});

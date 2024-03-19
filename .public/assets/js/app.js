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
let dataFancybox = ["about", "portfolio"];
dataFancybox.forEach((name) => {
  Fancybox.bind(`[data-fancybox="${name}"]`, {
    Images: { Panzoom: { maxScale: 3 } },
  });
});

//** yandex map */
const isMap = document.querySelector("#yamap");
isMap &&
  ymaps.ready(function () {
    const data = {
      center: [59.87239, 30.334969],
      marker: [59.8729, 30.334229],
      icon: "/assets/img/icons/marker.svg",
      city: "г. Санкт-Петербург",
      street: "Пр. Юрия Гагарина, д.7, помещение 54Н",
    };

    var myMap = new ymaps.Map(
        "yamap",
        {
          center: data.center,
          zoom: 15,
          controls: [],
          behaviors: [
            "drag",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
            "multiTouch",
          ],
        },
        {
          suppressMapOpenBlock: true,
        }
      ),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #000; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark0 = new ymaps.Placemark(
        data.marker,
        {
          balloonContentHeader: `<b style='color:#000;'>${data.city}</b>`,
          balloonContentFooter: data.street,
        },
        {
          iconLayout: "default#image",
          iconImageHref: data.icon,
          iconImageSize: [40, 50],
          iconImageOffset: [-20 / 2, -20],
        }
      );
    myMap.geoObjects.add(myPlacemark0);
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        position: {
          top: 15,
          left: "auto",
          right: 15,
        },
      },
    });
    myMap.controls.add(zoomControl);
  });

let introH = document.querySelector("#intro").scrollHeight,
  header = document.querySelector("#header"),
  scrollOffset = window.pageYOffset;

/*Fixed header*/

checkScroll(scrollOffset);
let elsec = document.querySelectorAll("section");
let ids = [];
let elH = [];

elsec.forEach((item, index) => {
  ids[index] = item;
});

ids.unshift(
  document.querySelector("#header"),
  document.querySelector("#intro")
);

window.addEventListener("scroll", function () {
  scrollOffset = window.pageYOffset;
  checkScroll(scrollOffset);
  elHe();

  const navA = checkActive();

  switch (true) {
    case scrollOffset < elH[0]:
      clearLinks();
      navA[0].classList.add("active");
      break;
    case elH[0] <= scrollOffset && scrollOffset < elH[1]:
      clearLinks();
      navA[1].classList.add("active");
      break;
    case elH[1] <= scrollOffset && scrollOffset < elH[2]:
      clearLinks();
      navA[2].classList.add("active");
      break;
    case elH[2] <= scrollOffset && scrollOffset < elH[3]:
      clearLinks();
      navA[3].classList.add("active");
      break;
    case elH[3] <= scrollOffset && scrollOffset < elH[4]:
      clearLinks();
      break;
    case elH[4] <= scrollOffset && scrollOffset < elH[5]:
      clearLinks();
      break;
    case elH[5] <= scrollOffset && scrollOffset < elH[6]:
      clearLinks();
      navA[4].classList.add("active");
      break;
    case elH[6] <= scrollOffset && scrollOffset < elH[7]:
      clearLinks();
      navA[5].classList.add("active");
      break;
  }
});

function elHe() {
  for (let i = 0; i < ids.length - 1; i++) {
    if (i == 0) {
      elH[i] = -ids[i].scrollHeight;
      elH[i] += ids[i + 1].scrollHeight;
    } else {
      elH[i] = elH[i - 1] + ids[i + 1].scrollHeight;
    }
  }
  return elH;
}

function clearLinks() {
  let links = document.querySelectorAll(".nav a");
  for (let link of links) {
    link.classList.remove("active");
  }
}

function checkActive() {
  const navs = document.querySelectorAll(".nav a");
  let navA = [].slice.call(navs);
  return navA;
}

function checkScroll(scrollOffset) {
  scrollOffset >= introH - header.scrollHeight
    ? header.classList.add("fixed")
    : header.classList.remove("fixed");
}

/*Smooth scroll*/

const anchors = document.querySelectorAll("[data-scroll]");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let blockId = anchor.getAttribute("data-scroll");
    let el = document.querySelector(blockId);
    let yOffset = -header.scrollHeight;
    const n = document.querySelector("nav");
    const y =
      window.innerWidth <= 550
        ? el.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset +
          getHeight(n)
        : el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    document.querySelector("#nav_toggle").classList.remove("active");
    document.querySelector("#nav").classList.remove("active");
  });
}

/*Menu nav toggle*/

const navToggle = document.querySelector("#nav_toggle");

navToggle.addEventListener("click", function (e) {
  e.target.parentNode.classList.toggle("active");
  document.querySelector("#nav").classList.toggle("active");
});

/*Height*/

var getHeight = function (el) {
  var el_style = window.getComputedStyle(el),
    el_display = el_style.display,
    el_position = el_style.position,
    el_visibility = el_style.visibility,
    el_max_height = el_style.maxHeight.replace("px", "").replace("%", ""),
    wanted_height = 0;

  // if its not hidden we just return normal height
  if (el_display !== "none" && el_max_height !== "0") {
    return el.offsetHeight + 3;
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  el.style.position = "absolute";
  el.style.visibility = "hidden";
  el.style.display = "block";

  wanted_height = el.offsetHeight;

  // reverting to the original values
  el.style.display = el_display;
  el.style.position = el_position;
  el.style.visibility = el_visibility;

  return wanted_height;
};

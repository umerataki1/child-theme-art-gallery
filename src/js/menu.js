document.addEventListener("DOMContentLoaded", function () {
  // Define SVG icons as strings
  const downIconSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6H6z" fill="#333"/>
                         </svg>`;
  const rightIconSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6l6 6-6 6V6z" fill="#333"/>
                         </svg>`;

  // Add down icon to top-level items with submenus
  const topLevelItems = document.querySelectorAll(
    ".custom-nav-menu > .nav-menu-items > li"
  );
  topLevelItems.forEach((item) => {
    if (item.querySelector("ul")) {
      const downIcon = document.createElement("span");
      downIcon.innerHTML = downIconSVG; // Insert SVG icon
      item.querySelector("a").appendChild(downIcon);
    }
  });

  // Add right icon to sub-menu items with sub-submenus
  const subMenuItems = document.querySelectorAll(
    ".custom-nav-menu .nav-menu-items ul > li"
  );
  subMenuItems.forEach((item) => {
    if (item.querySelector("ul")) {
      const rightIcon = document.createElement("span");
      rightIcon.innerHTML = rightIconSVG; // Insert SVG icon
      item.querySelector("a").appendChild(rightIcon);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // SVG for the hamburger menu
  const hamburgerIconSVG = `<svg width="24" height="24" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="20" fill="#333"></rect>
                                <rect y="30" width="100" height="20" fill="#333"></rect>
                                <rect y="60" width="100" height="20" fill="#333"></rect>
                            </svg>`;

  // SVG for the close button
  const closeIconSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6 18L18 6M6 6l12 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>`;

  // Create and insert the hamburger menu icon
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = hamburgerIconSVG;

  // Create and insert the close button
  const closeButton = document.createElement("div");
  closeButton.classList.add("close-menu");
  closeButton.innerHTML = closeIconSVG;

  const navMenu = document.querySelector(".custom-nav-menu");
  navMenu.insertBefore(hamburger, navMenu.firstChild); // Insert hamburger before the menu

  // Insert close button into the menu
  const navMenuItems = document.querySelector(".nav-menu-items");
  navMenuItems.insertBefore(closeButton, navMenuItems.firstChild); // Insert close button at the top

  // Add event listener to toggle the menu visibility on hamburger click
  hamburger.addEventListener("click", function () {
    navMenuItems.classList.add("open");
    navMenuItems.style.transform = "translateX(0)";
  });

  // Add event listener to close the menu on close button click
  closeButton.addEventListener("click", function () {
    navMenuItems.classList.remove("open");
    navMenuItems.style.transform = "translateX(-100%)";
  });
});

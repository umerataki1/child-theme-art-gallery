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

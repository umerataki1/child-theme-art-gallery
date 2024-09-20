// JavaScript to adjust transform on hover and mouse movement
document.addEventListener("DOMContentLoaded", () => {
  console.log("working single product ");
  const imageContainer = document.querySelector(
    ".wc-block-product-gallery-large-image__image-element"
  );
  const image = document.querySelector(
    ".wc-block-woocommerce-product-gallery-large-image__image"
  );

  let scale = 1.5; // The zoom scale when hovering
  let translateX = 0; // Initialize translateX to 0
  let translateY = 0; // Initialize translateY to 0

  // Function to update the transform based on mouse position
  const updateTransform = (mouseX, mouseY) => {
    // Get container dimensions and mouse position within the container
    const rect = imageContainer.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    // Calculate max translate values based on the scaled size
    const maxTranslateX = (imageRect.width - rect.width) / 2;
    const maxTranslateY = (imageRect.height - rect.height) / 2;

    // Get mouse offset within the container
    const offsetX = mouseX - rect.left; // Mouse X position relative to the container
    const offsetY = mouseY - rect.top; // Mouse Y position relative to the container

    // Center offset calculation, maps movement
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Determine translation values
    // If the mouse is right of center, move left; otherwise, move right
    translateX = ((offsetX - centerX) / centerX) * maxTranslateX;

    // If the mouse is above center, move up; otherwise, move down
    translateY = ((offsetY - centerY) / centerY) * maxTranslateY;

    console.log(translateX, translateY);
    // Apply clamped translation to ensure image stays within bounds
    image.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  };

  // Event listener for mouse movement within the container
  imageContainer.addEventListener("mousemove", (e) => {
    updateTransform(e.clientX, e.clientY);
  });

  // Center the image when the mouse enters the container
  imageContainer.addEventListener("mouseenter", () => {
    image.style.transform = `scale(${scale}) translate(0, 0)`;
  });

  // Keep the image zoomed when the mouse leaves
  imageContainer.addEventListener("mouseleave", () => {
    // Keeps the last position when leaving or resets to center:
    image.style.transform = `scale(${scale}) translate(0, 0)`;
  });
});

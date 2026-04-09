//alert("Pages Linked")

// List of colors 
const colors = ['#ffffff', '#ff9900', '#89c689', '#98cbff', '#ffb0ff','#000000', '#ffffff'];

let currentColorIndex = 0; // track of the current color

// Select the title 
const title = document.querySelector('header.title h1');

// Add a click event listener to change the color on each click
title.addEventListener('click', () => {
    // Change the title's color to the next color in the list
    title.style.color = colors[currentColorIndex];
    
    // Move to the next color in the list
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // Flip the card on click (from your current logic)
    // Add more interactive effects if needed
  });
});


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (event) => {
  // Get mouse position
  const { clientX: x, clientY: y } = event;

  // Update cursor position using transform for smoother handling
  cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${y - cursor.offsetHeight / 2}px)`;
  cursor.style.display = "block"; // Make the cursor visible when moving
});


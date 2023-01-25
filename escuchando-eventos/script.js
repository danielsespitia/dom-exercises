const btn = document.querySelector('#append');
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    square.parentNode.removeChild(square);
  });
});

btn.addEventListener('click', () => {
  const square = document.createElement('div');
  square.classList.add('square');

  const squares = document.querySelector('.squares');
  squares.appendChild(square);

  // Bonus:
  square.addEventListener('mouseenter', () => {
    square.parentNode.removeChild(square);
  });
});

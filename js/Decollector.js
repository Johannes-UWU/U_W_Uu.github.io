document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const selectedFoods = [];
    document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
      selectedFoods.push(checkbox.value);
    });

    // Send the foods no fucking errors... yeh? no? no? yeh? okay. 
    fetch('https://script.google.com/macros/s/AKfycbzqekeX53oj3vuog6vidUtGjkw4pyFwtJoC2A_ggk15hHN-9jNtClFrkOPcxT5olwDl/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ foods: selectedFoods }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Um if MY CALCULATION ARE CORRECT THIS SHOULD redirect the page
      window.location.href = 'dessert.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
});


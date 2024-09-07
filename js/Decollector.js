document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const selectedFoods = [];
    document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
      selectedFoods.push(checkbox.value);
    });

    // Send the foods no fucking errors... yeh? no? no? yeh? okay. 
    fetch('https://script.google.com/macros/s/AKfycbxOh9Enn1vqPxeqOZf_yqY0rscTCPJiATUKqnGdD4Kvmv6a-RuEZKQEdwPNFTZc9LRx/exec', {
      method: 'POST',
      mode: 'no-cors'
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


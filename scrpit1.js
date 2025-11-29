  let her = document.getElementById('title');
  let btn = document.getElementById('changeBtn');

  // ✅ Array of quotes
  const quotes = [
    "THE MAGIC YOU ARE LOOKING FOR IS IN THE WORK YOU ARE AVOIDING.",
    "SUCCESS DOESN’T COME FROM WHAT YOU DO OCCASIONALLY — IT COMES FROM WHAT YOU DO CONSISTENTLY.",
    "DON’T WATCH THE CLOCK; DO WHAT IT DOES — KEEP GOING.",
    "DISCIPLINE IS DOING WHAT NEEDS TO BE DONE EVEN WHEN YOU DON’T FEEL LIKE DOING IT.",
    "EVERY DAY IS A CHANCE TO GET BETTER. DON’T WASTE IT.",
    "THE HARDER YOU WORK FOR SOMETHING, THE GREATER YOU’LL FEEL WHEN YOU ACHIEVE IT."
  ];

  let index = 0;

  btn.addEventListener('click', function() {
    // Add fade-out effect
    her.classList.add('fade');

    setTimeout(() => {
      // Change the quote
      her.textContent = quotes[index];
      her.style.color = "white";
      her.style.backgroundColor = "darkblue";

      // Remove fade-out to fade in
      her.classList.remove('fade');

      // Move to the next quote (looping)
      index = (index + 1) % quotes.length;
    }, 600); // Wait for fade-out before switching
  });

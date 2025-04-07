document.addEventListener('DOMContentLoaded', function() {
    const countdownInput = document.getElementById('countdown-input');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const countdownDisplay = document.getElementById('countdown-display');
    
    let countdownInterval;
    let currentCountdownValue = 0;
  
    startBtn.addEventListener('click', startCountdown);
    resetBtn.addEventListener('click', resetCountdown);
  
    function startCountdown() {
      const inputValue = parseInt(countdownInput.value);
      
      if (isNaN(inputValue))
      {
        alert('Please enter a valid number');
        return;
      }
  
      if (inputValue <= 0) 
    {
        alert('Please enter a positive number');
        return;
      }
      if (countdownInterval) 
    {
        clearInterval(countdownInterval);
      }
  
      currentCountdownValue = inputValue;
      countdownDisplay.textContent = currentCountdownValue;
      countdownInput.disabled = true;
      startBtn.disabled = true;
  
      countdownInterval = setInterval(() => {
        currentCountdownValue--;
        countdownDisplay.textContent = currentCountdownValue;
  
        if (currentCountdownValue <= 0) {
          clearInterval(countdownInterval);
          countdownDisplay.style.color = '#2ecc71';
          setTimeout(() => {
            countdownDisplay.style.color = '#e74c3c';
          }, 1000);
        }
      }, 1000);
    }
  
    function resetCountdown() {
      clearInterval(countdownInterval);
      countdownInput.value = '';
      countdownDisplay.textContent = '0';
      countdownInput.disabled = false;
      startBtn.disabled = false;
      currentCountdownValue = 0;
      countdownDisplay.style.color = '#e74c3c';
    }
  
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const prevQuoteBtn = document.getElementById('prev-quote');
    const nextQuoteBtn = document.getElementById('next-quote');
    
    let quotes = [];
    let currentQuoteIndex = 0;
    let quoteInterval;
  
    const sampleQuotes = [
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
      },
      {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
      },
      {
        "text": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
      },
      {
        "text": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
      }
    ];
  
    function initQuotes() {
      quotes = sampleQuotes;
      showQuote(0);
      startQuoteRotation();
    }
  
    function showQuote(index) {
      if (quotes.length === 0) return;
      
      if (index >= quotes.length) {
        index = 0;
      } else if (index < 0) {
        index = quotes.length - 1;
      }
      
      currentQuoteIndex = index;
      quoteText.textContent = `"${quotes[index].text}"`;
      quoteAuthor.textContent = `— ${quotes[index].author}`;
    }
  
    function nextQuote() {
      showQuote(currentQuoteIndex + 1);
      resetQuoteInterval();
    }
  
    function prevQuote() {
      showQuote(currentQuoteIndex - 1);
      resetQuoteInterval();
    }
  
    function startQuoteRotation() {
      quoteInterval = setInterval(nextQuote, 4000); 
    }
  
    function resetQuoteInterval() {
      clearInterval(quoteInterval);
      startQuoteRotation();
    }
  
    
    nextQuoteBtn.addEventListener('click', nextQuote);
    prevQuoteBtn.addEventListener('click', prevQuote);
  
    initQuotes();
  });
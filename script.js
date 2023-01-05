

    const textbox = document.getElementById('evaluatedText');
      const letterCount = document.getElementById('letterCount');
      
      textbox.addEventListener('keyup', function() {
        letterCount.textContent = textbox.value.length;
      });

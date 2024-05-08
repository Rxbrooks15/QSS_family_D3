//share_toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const radioInputs = document.querySelectorAll('.radio-input');
  
    radioInputs.forEach((input, index) => {
      input.addEventListener('change', function () {
        // Check if any of the radio buttons is checked
        const isAnyRadioButtonChecked = [...radioInputs].some(radio => radio.checked);
  
        if (isAnyRadioButtonChecked) {
          console.log(true); // Log true to the console
  
          // Check the background color of the selected radio button's .radio-button
          const radioButton = this.nextElementSibling;
          const computedStyle = window.getComputedStyle(radioButton);
          const backgroundColor = computedStyle.backgroundColor;
  
          if (backgroundColor === 'rgb(0, 128, 0)') {
  
            // Add a delay using setTimeout
            setTimeout(() => {
              // Open and display the corresponding HTML file based on the index
              if (index === 0) {
                window.location.href = 'married.html';
              } else if (index === 1) {
                window.location.href = 'child.html';
              } else if (index === 2) {
                window.location.href = 'gender.html';
              }
            }, 1000); // 1000 milliseconds (1 second) delay
          }
  
          // Perform additional actions if needed
        } else {
          console.log(false); // Log false to the console
          // Perform additional actions if needed
        }
      });
    });
  });
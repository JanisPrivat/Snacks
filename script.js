 function showSelection() {
      let checked = document.querySelectorAll('input[type="checkbox"]:checked');
      let snacks = [];
      checked.forEach(item => snacks.push(item.value));

      let resultBox = document.getElementById("result");
      if (snacks.length > 0) {
        resultBox.innerHTML = "<strong>Your choiziez🥹❤️:</strong><br>" + snacks.join(", ");
      } else {
        resultBox.innerHTML = "Choose snackiez first pweaze🥹👉🏻👈🏻❤️";
      }
    }
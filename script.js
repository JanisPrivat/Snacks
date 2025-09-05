function showSelection() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    const snacks = Array.from(checked).map(item => item.value);

    const resultBox = document.getElementById("result");
    const sendButton = document.getElementById("sendMail");

    if (snacks.length > 0) {
      resultBox.innerHTML = "<strong>Your choiziez🥹❤️:</strong><br>" + snacks.join(", ");
      sendButton.style.display = "inline-block"; // Button sichtbar
    } else {
      resultBox.innerHTML = "Choose snackiez first pweaze🥹👉🏻👈🏻❤️";
      sendButton.style.display = "none"; // Button wieder verstecken
    }
  }

  // Checkboxen überwachen
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", showSelection);
  });

  // Initialstatus
  showSelection();

  // Button-Klick → Mail öffnen
  document.getElementById("sendMail").addEventListener("click", () => {
    const resultBox = document.getElementById("result");
    const mailTo = "janis.weisskopf@outlook.com"; // <<< deine Zieladresse
    const subject = "Snack Bestellung";
    const body = resultBox.innerText; // Text aus #result übernehmen

    window.location.href =
      `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
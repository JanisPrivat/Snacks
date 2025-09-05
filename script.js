function updateMailLink() {
  const resultBox = document.getElementById("result");
  const mailTo = "janis.weisskopf@outlook.com";
  const subject = "Snackie Order";

  // nur den reinen Text ziehen
  const body = resultBox.innerText;

  const link = document.getElementById("sendMailLink");
  link.setAttribute(
    "href",
    `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
}

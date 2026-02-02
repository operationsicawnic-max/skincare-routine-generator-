document.getElementById("skinForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const skin = skinType.value;
  const concern = document.getElementById("concern").value;
  const climate = document.getElementById("climate").value;

  let cleanser, serumAM, serumPM, moisturizer, weekly, avoid;

  // Cleanser
  cleanser = skin === "dry" ? "Cream cleanser" :
             skin === "sensitive" ? "Gentle fragrance-free cleanser" :
             "Gel-based cleanser";

  // Serum logic
  if (concern === "acne") {
    serumAM = "Niacinamide";
    serumPM = skin === "sensitive" ? "Azelaic Acid" : "Salicylic Acid";
  }
  if (concern === "dullness") {
    serumAM = "Vitamin C";
    serumPM = "Niacinamide";
  }
  if (concern === "pigmentation") {
    serumAM = "Vitamin C";
    serumPM = "Alpha Arbutin";
  }
  if (concern === "aging") {
    serumAM = "Peptides";
    serumPM = skin === "sensitive" ? "Bakuchiol" : "Retinol";
  }

  // Moisturizer
  moisturizer = (climate === "hot" || climate === "humid")
    ? "Light gel moisturizer"
    : "Ceramide-rich cream";

  // Weekly care
  weekly = skin === "sensitive"
    ? "Hydrating mask once a week"
    : "Gentle exfoliation 1–2 times/week";

  // Avoid
  avoid = skin === "sensitive"
    ? "Avoid fragrance, alcohol & mixing actives"
    : "Avoid over-exfoliation";

  document.getElementById("result").innerHTML = `
    <h3>🌞 Morning Routine</h3>
    <ul>
      <li>${cleanser}</li>
      <li>${serumAM}</li>
      <li>${moisturizer}</li>
      <li>Sunscreen SPF 30+</li>
    </ul>

    <h3>🌙 Night Routine</h3>
    <ul>
      <li>${cleanser}</li>
      <li>${serumPM}</li>
      <li>${moisturizer}</li>
    </ul>

    <h3>🧖 Weekly Care</h3>
    <p>${weekly}</p>

    <p><strong>⚠️ Avoid:</strong> ${avoid}</p>
  `;
});

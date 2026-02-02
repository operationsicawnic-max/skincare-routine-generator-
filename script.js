document.getElementById("skinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const skinType = document.getElementById("skinType").value;
  const concern = document.getElementById("concern").value;
  const climate = document.getElementById("climate").value;

  let cleanser = "";
  let serum = "";
  let moisturizer = "";
  let avoid = "";

  // Cleanser logic
  if (skinType === "oily") cleanser = "Gel-based cleanser";
  if (skinType === "dry") cleanser = "Cream-based gentle cleanser";
  if (skinType === "combination") cleanser = "Mild foaming cleanser";
  if (skinType === "sensitive") cleanser = "Fragrance-free cleanser";

  // Serum logic
  if (concern === "acne") serum = "Salicylic Acid / Niacinamide";
  if (concern === "dullness") serum = "Vitamin C";
  if (concern === "pigmentation") serum = "Alpha Arbutin";
  if (concern === "aging") serum = "Retinol (PM only)";

  // Moisturizer logic
  if (climate === "hot" || climate === "humid") {
    moisturizer = "Light gel moisturizer";
  } else {
    moisturizer = "Rich cream moisturizer";
  }

  // Avoid logic
  if (skinType === "sensitive") {
    avoid = "Avoid fragrance, alcohol & strong actives";
  } else {
    avoid = "Avoid over-exfoliation";
  }

  document.getElementById("result").innerHTML = `
    <h3>🌞 Morning Routine</h3>
    <ul>
      <li>${cleanser}</li>
      <li>${serum}</li>
      <li>${moisturizer}</li>
      <li>Sunscreen (SPF 30+)</li>
    </ul>

    <h3>🌙 Night Routine</h3>
    <ul>
      <li>${cleanser}</li>
      <li>${serum}</li>
      <li>${moisturizer}</li>
    </ul>

    <p><strong>⚠️ Avoid:</strong> ${avoid}</p>
  `;
});

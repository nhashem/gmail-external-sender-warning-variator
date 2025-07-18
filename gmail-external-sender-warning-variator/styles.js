function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomStyle() {
  const fontFamilies = [
    "Comic Sans MS",
    "Papyrus",
    "Impact",
    "Courier New",
    "Brush Script MT",
    "Lucida Handwriting",
    "Snell Roundhand",
    "Chalkduster",
    "Kristen ITC",
    "Segoe Print",
    "Georgia",
    "Arial Black"
  ];  
  
  const fontSizes = ["12px", "14px", "16px", "18px", "20px"];
  const bgColors = ["#fff3cd", "#ffeeba", "#fce8b2", "#fdd835", "#f8d775"];
  const textColors = ["#333", "#000", "#c62828", "#e65100", "#1b5e20"];

  return {
    fontFamily: randomFrom(fontFamilies),
    fontSize: randomFrom(fontSizes),
    backgroundColor: randomFrom(bgColors),
    color: randomFrom(textColors),
    padding: "8px",
    borderRadius: "6px",
    fontWeight: "bold"
  };
}

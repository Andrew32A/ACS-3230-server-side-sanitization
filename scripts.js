// purify DOM
const clean = DOMPurify.sanitize;

// variables assigned to doc's element
const widthInput = document.getElementById("widthInput");
const widthDisplay = document.getElementById("widthDisplay");

const heightInput = document.getElementById("heightInput");
const heightDisplay = document.getElementById("heightDisplay");

const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");

const blob = document.getElementById("colorBlob");

// placeholders for page refresh
widthInput.value = clean(100);
widthDisplay.innerHTML = clean("100px");

heightInput.value = clean(100);
heightDisplay.innerHTML = clean("100px");

colorInput.value = clean("#000000");
colorDisplay.innerHTML = clean("#000000");

// placeholder color blob on bottom right
blob.style.width = `${clean(widthInput.value)}px`;
blob.style.height = `${clean(heightInput.value)}px`;
blob.style.backgroundColor = `${clean(colorInput.value)}`;

// event listeners
widthInput.addEventListener("input", update);
heightInput.addEventListener("input", update);
colorInput.addEventListener("input", update);

// update to inputs
function update(e) {
  let sanitizedWidth = clean(widthInput.value);
  let sanitizedHeight = clean(heightInput.value);
  let sanitizedColor = clean(colorInput.value);

  widthDisplay.innerHTML = `${sanitizedWidth}px`;
  heightDisplay.innerHTML = `${sanitizedHeight}px`;
  colorDisplay.innerHTML = `${sanitizedColor}`;

  blob.style.width = `${sanitizedWidth}px`;
  blob.style.height = `${sanitizedHeight}px`;
  blob.style.backgroundColor = `${sanitizedColor}`;
}

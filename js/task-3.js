const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', () => {
  const name = inputEl.value.trim();
  outputEl.textContent = name === '' ? 'Anonymous' : name;
});
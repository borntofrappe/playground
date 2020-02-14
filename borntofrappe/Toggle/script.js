const checkbox = document.querySelector('input');

function updateMode() {
  const { checked } = this;
  if (checked) {
    this.classList.add('checked');
  } else {
    this.classList.remove('checked');
  }
  const mode = this.checked ? 'dark' : 'light';
  document.documentElement.style.setProperty('--color', `var(--color-${mode})`);
  document.documentElement.style.setProperty(
    '--background',
    `var(--background-${mode})`
  );
}

checkbox.addEventListener('input', updateMode);

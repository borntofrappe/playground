const LOCAL_STORAGE_KEY = 'color-mode';
const checkbox = document.querySelector('input');

const mode = localStorage.getItem(LOCAL_STORAGE_KEY);
if(mode && mode === 'dark') {
  checkbox.checked = true;
  checkbox.classList.add('checked');
  document.documentElement.style.setProperty('--color', `var(--color-dark)`);
  document.documentElement.style.setProperty(
    '--background',
    `var(--background-dark)`
  );
}


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

  localStorage.setItem(LOCAL_STORAGE_KEY, mode);
}

checkbox.addEventListener('input', updateMode);

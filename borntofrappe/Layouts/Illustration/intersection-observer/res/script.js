if(window.IntersectionObserver) {
  const options = {
    threshold: 0.5,
  }

  function callback(entries, observer) {
    entries.forEach(entry => {
      entry.target.className = entry.isIntersecting ? 'observed' : '';
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));
}
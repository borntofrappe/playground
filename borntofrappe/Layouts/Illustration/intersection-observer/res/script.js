// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
if(window.IntersectionObserver) {
  const options = {
    threshold: 0.5,
  }

  function callback(entries, observer) {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0.5) {
        entry.target.classList.add('observed');
      } else {
        entry.target.classList.remove('observed');

      }
    })
  };

  const observer = new IntersectionObserver(callback, options);
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));
}
const picks = [
  {
    name: 'primary',
    colors: [
      'hsl(202, 100%, 95%)',
      'hsl(204, 100%, 86%)',
      'hsl(206, 93%, 73%)',
      'hsl(208, 88%, 62%)',
      'hsl(210, 83%, 53%)',
      'hsl(212, 92%, 43%)',
      'hsl(214, 95%, 36%)',
      'hsl(215, 96%, 32%)',
      'hsl(216, 98%, 25%)',
      'hsl(218, 100%, 17%)',
      'hsl(220, 100%, 5%)',
    ],
  },
  {
    // 'hsl(340, 90%, 55%)',
    name: 'accent',
    colors: [
      'hsl(330, 100%, 95%)',
      'hsl(335, 100%, 86%)',
      'hsl(336, 93%, 77%)',
      'hsl(339, 90%, 67%)',
      'hsl(340, 90%, 55%)',
      'hsl(340, 85%, 46%)',
      'hsl(342, 92%, 39%)',
      'hsl(345, 96%, 33%)',
      'hsl(345, 95%, 27%)',
      'hsl(347, 100%, 19%)',
      'hsl(350, 100%, 8%)',
    ],
  },
  {
    name: 'neutral',
    colors: [
      'hsl(215, 10%, 97%)',
      'hsl(214, 15%, 88%)',
      'hsl(213, 16%, 79%)',
      'hsl(212, 15%, 65%)',
      'hsl(212, 10%, 54%)',
      'hsl(212, 12%, 45%)',
      'hsl(208, 14%, 39%)',
      'hsl(210, 16%, 32%)',
      'hsl(210, 18%, 25%)',
      'hsl(210, 20%, 15%)',
      'hsl(215, 22%, 5%)',
    ],
  },
];

const { body } = document;

[...picks].forEach(pick => {
  const article = document.createElement('article');
  pick.colors.forEach(color => {
    const div = document.createElement('div');
    div.style.background = color;
    article.appendChild(div);
  });
  body.appendChild(article);
});

const picks = [
  {
    name: 'primary',
    colors: [
      'hsl(205, 100%, 90%)',
      'hsl(205, 90%, 80%)',
      'hsl(210, 80%, 70%)',
      'hsl(220, 75%, 60%)',
      'hsl(222, 60%, 50%)',
      'hsl(225, 55%, 45%)',
      'hsl(225, 50%, 30%)',
      'hsl(225, 40%, 20%)',
      'hsl(230, 30%, 10%)',
    ],
  },
  {
    name: 'accent',
    colors: [
      'hsl(325, 100%, 90%)',
      'hsl(332, 95%, 80%)',
      'hsl(335, 95%, 70%)',
      'hsl(337, 92%, 65%)',
      'hsl(340, 90%, 55%)',
      'hsl(342, 80%, 50%)',
      'hsl(340, 75%, 45%)',
      'hsl(340, 70%, 30%)',
      'hsl(340, 65%, 20%)',
    ],
  },
  {
    name: 'neutral',
    colors: [
      'hsl(0, 0%, 95%)',
      'hsl(0, 0%, 85%)',
      'hsl(0, 0%, 75%)',
      'hsl(0, 0%, 65%)',
      'hsl(0, 0%, 55%)',
      'hsl(0, 0%, 45%)',
      'hsl(0, 0%, 35%)',
      'hsl(0, 0%, 25%)',
      'hsl(0, 0%, 15%)',
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

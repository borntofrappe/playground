const width = 100;
const height = 100;

const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;

const canvasContainer = document.createElement('section');
const canvasHeading = document.createElement('h2');
canvasHeading.textContent = 'Canvas';

canvasContainer.appendChild(canvasHeading);
canvasContainer.appendChild(canvas);
document.body.appendChild(canvasContainer);

const context = canvas.getContext('2d');
context.translate(width / 2, height / 2);
context.scale(1.85 * (width / 100), 1.85 * (height / 100));

context.lineWidth = 8;
context.strokeStyle = 'hsl(0, 0%, 10%)';
context.lineCap = 'round';
context.lineJoin = 'round';

const accent = new Path2D('M -10 -13 q 0 -8 -8 -10');
context.setLineDash([14.01, 18.5]);
context.lineDashOffset = -4.5;
context.stroke(accent);

const b = new Path2D(
  'M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36'
);
context.setLineDash([114.2, 146.28]);
context.lineDashOffset = -9.145;
context.stroke(b);

const data = canvas.toDataURL('image/png');
// console.log(data);

/* optional image
// const img = new Image(300, 300);
// img.src = data;
// document.body.appendChild(img);
*/

const a = document.createElement('a');
a.setAttribute('download', `icon-${width}-${height}`);
a.href = data;
a.textContent = 'PNG';

document.body.appendChild(a);

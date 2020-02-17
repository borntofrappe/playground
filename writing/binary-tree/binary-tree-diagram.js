const size = 5;
const grid = Array(size ** 2)
  .fill('')
  .map((value, i) => ({
    row: Math.floor(i / size),
    column: i % size,
    walls: {
      north: true,
      east: true,
      south: true,
      west: true,
    },
  }));


for (let i = 0; i < grid.length; i += 1) {
  const cell = grid[i];
  const { row, column } = cell;
  const neighbors = [];
  if (row > 0) {
    neighbors.push([row - 1, column]);
  }
  if (column < size - 1) {
    neighbors.push([row, column + 1]);
  }

  const index = Math.floor(Math.random() * neighbors.length);
  const neighbor = neighbors[index];

  if (neighbor) {
    const [r, c] = neighbor;
    // d3.stratify
    grid[i].parent = `${r} ${c}`;
    if (r < row) {
      grid[i].walls.north = false;
      grid[r * size + c].walls.south = false;
    } else {
      grid[i].walls.east = false;
      grid[r * size + c].walls.west = false;
    }
  }
}


const width = 500;
const height = 500;

// D3
const root = d3
  .stratify()
  .id(({row, column}) => `${row} ${column}`)
  .parentId(({parent}) => parent)
  (grid);

const tree = d3
  .tree()
  .size([width, height])
  (root);

const links = tree.links();
const descendants = tree.descendants();
const margin = 20;


// assuming an `html` file which references the script
const viz = d3
  .select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin *2} ${height + margin *2}`)
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);

const linkVertical = d3.linkVertical()
.x(d => d.x)
.y(d => d.y);

viz
  .selectAll('path')
  .data(links)
  .enter()
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1.5')
  .attr('stroke-linecap', 'round')
  .attr('d', linkVertical)

const nodes = viz
  .selectAll('g.node')
  .data(descendants)
  .enter()
  .append('g')
  .attr('class', 'node')
  .attr('transform', ({x, y}) => `translate(${x}, ${y})`);

nodes
  .append('circle')
  .attr('r', '3');

nodes
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .text(({id}) => id)
  .attr('fill', 'currentColor')
  .attr('font-size', '20')
  .attr('letter-spacing', '2')
  .attr('font-weight', 'bold');
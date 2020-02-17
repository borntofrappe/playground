from random import choice


class Cell:
    def __str__(self):
        column = self.column
        row = self.row
        walls = []
        for wall in self.walls:
            if(self.walls[wall]):
                walls.append(wall)
        return f'Column: {column}\nRow: {row}\nWalls: {walls}\n'

    def __init__(self, column, row):
        self.column = column
        self.row = row
        self.walls = {
            "north": True,
            "east": True,
            "south": True,
            "west": True
        }

    def open_wall(self, direction):
        self.walls[direction] = False


class Maze:
    def __init__(self, size):
        self.size = size
        grid = []
        for i in range(size ** 2):
            column = i % size
            row = i // size
            cell = Cell(column, row)
            grid.append(cell)
        self.grid = grid

    def binary_tree(self):
        grid = self.grid
        size = self.size
        if(len(grid) > 0):
            for cell in grid:
                # !! this would not work
                ## column = cell["column"]
                # research what it means that the object is not _subscriptable_
                column = cell.column
                row = cell.row
                neighbors = []
                if(row > 0):
                    neighbors.append((column, row - 1))
                if(column < size - 1):
                    neighbors.append((column + 1, row))

                if(len(neighbors) > 0):
                    neighbor = choice(neighbors)
                    c, r = neighbor
                    index = c + r * size
                    if(r < row):
                        cell.open_wall("north")
                        grid[index].open_wall("south")
                    else:
                        cell.open_wall("east")
                        grid[index].open_wall("west")
        self.grid = grid


maze = Maze(3)
maze.binary_tree()
for cell in maze.grid:
    print(cell)

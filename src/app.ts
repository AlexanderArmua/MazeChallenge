import maze, { printMaze } from "./constants/maze";
import { Maze, MazeChar, Position } from "./global/types";

printMaze(maze)

const position: Position = {
    x: 0,
    y: 1
}

console.log(maze[position.x][position.y])


const possibleRoutes = (currentPosition: Position, maxX: number, maxY: number): Position[] => {
    const positions = []

    if (currentPosition.x > 0) {
        positions.push({ ...currentPosition, x: currentPosition.x - 1 })
    }
    if (currentPosition.y > 0) {
        positions.push({ ...currentPosition, y: currentPosition.y - 1 })
    }
    if (currentPosition.x < maxX) {
        positions.push({ ...currentPosition, x: currentPosition.x + 1 })
    }
    if (currentPosition.y < maxY) {
        positions.push({ ...currentPosition, y: currentPosition.y + 1 })
    }

    return positions;
}


const dfs = (maze: Maze, p: Position, discovered: Position[] = []): Position[] => {
    if (maze[p.x][p.y] === "B" && discovered.length > 0) {
        return [...discovered, p];
    }

    const routesA = possibleRoutes(p, maze.length - 1, maze[0].length - 1);

    const routes = routesA.filter(future => {
        return !discovered.some((prev) => prev.x === future.x && prev.y === future.y)
    });

    for (let i = 0; i < routes.length; i++) {
        const result = dfs(maze, routes[i], [...discovered, p]);

        if (result.length > 0) {
            return result
        }
    }

    return []
}

console.log(dfs(maze, position))


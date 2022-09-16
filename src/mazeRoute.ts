import { MAZE_END } from "./constants/maze";
import { Maze, MazeChar, Position } from "./global/types";

const canGoToChar = (char: MazeChar, nextChar: MazeChar): boolean => char === MAZE_END || char === nextChar;

const canGoLeft = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => x > 0 && canGoToChar(maze[x - 1][y], nextChar);
const canGoRight = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => x < maze.length - 1 && canGoToChar(maze[x + 1][y], nextChar);
const canGoUp = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => y > 0 && canGoToChar(maze[x][y - 1], nextChar);
const canGoDown = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => y < maze[0].length - 1 && canGoToChar(maze[x][y + 1], nextChar);

const possibleRoutes = ({ x, y }: Position, maze: Maze, steps: number, mustFollowRoute: MazeChar[]): Position[] => {
    const positions = []

    const nextChar = mustFollowRoute[(steps - 1) % mustFollowRoute.length];

    canGoLeft(maze, { x, y }, nextChar) && positions.push({ x: x - 1, y })
    canGoRight(maze, { x, y }, nextChar) && positions.push({ x: x + 1, y })
    canGoUp(maze, { x, y }, nextChar) && positions.push({ x, y: y - 1 })
    canGoDown(maze, { x, y }, nextChar) && positions.push({ x, y: y + 1 })

    return positions;
}

export default possibleRoutes;

import MAZE, { MAZE_END, mustFollowRoute, printMaze } from "./constants/maze";
import { Maze, MazeChar, Position } from "./global/types";
import WalkedPath from "./walkedPath";

const canGoToChar = (char: MazeChar, nextChar: MazeChar): boolean => char === MAZE_END || char === nextChar;

const canGoLeft = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => x > 0 && canGoToChar(maze[x - 1][y], nextChar);
const canGoRight = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => x < maze.length - 1 && canGoToChar(maze[x + 1][y], nextChar);
const canGoUp = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => y > 0 && canGoToChar(maze[x][y - 1], nextChar);
const canGoDown = (maze: Maze, { x, y }: Position, nextChar: MazeChar): boolean => y < maze[0].length - 1 && canGoToChar(maze[x][y + 1], nextChar);

const possibleRoutes = ({ x, y }: Position, maze: Maze, steps: number, mustFollowRoute: MazeChar[]): Position[] => {
    const positions = []

    const nextChar = mustFollowRoute[steps % mustFollowRoute.length];

    canGoLeft(maze, { x, y }, nextChar) && positions.push({ x: x - 1, y })
    canGoRight(maze, { x, y }, nextChar) && positions.push({ x: x + 1, y })
    canGoUp(maze, { x, y }, nextChar) && positions.push({ x, y: y - 1 })
    canGoDown(maze, { x, y }, nextChar) && positions.push({ x, y: y + 1 })

    return positions;
}

const dfs = (maze: Maze, currentPosition: Position, mustFollowRoute: MazeChar[], walkedPath = new WalkedPath()): [WalkedPath, boolean] => {
    const { x, y } = currentPosition;

    walkedPath.addStep(currentPosition);

    if (maze[x][y] === MAZE_END && walkedPath.getSteps > 1) {
        return [walkedPath, true];
    }

    const routes = possibleRoutes(currentPosition, maze, walkedPath.getSteps - 1, mustFollowRoute)
        .filter((possiblePosition) => !walkedPath.hasBeenHere(possiblePosition));

    for (let i = 0; i < routes.length; i++) {
        const [result, foundit] = dfs(maze, routes[i], mustFollowRoute, walkedPath);

        if (foundit) {
            return [result, foundit];
        }
    }

    walkedPath.getPath.pop();

    return [new WalkedPath(walkedPath.getWalkedPath, walkedPath.getPath), false];
}

const [pathTaken] = dfs(MAZE, { x: 0, y: 1 }, mustFollowRoute);

printMaze(MAZE)
console.log(pathTaken)

import { Maze, MazeChar, Position } from "../global/types";
import WalkedPath from "../walkedPath";

const MAZE_END = "B";

const mustFollowRoute: MazeChar[] = ["C", "C", "C", "D", "D", "D", "E", "E", "E", "D", "D", "D"];

const MAZE: Maze = [
    ["A", MAZE_END, "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "C", "A", "D", "D", "E", "A", "C", "C", "C", "D", "A"],
    ["A", "C", "C", "D", "A", "E", "A", "D", "A", "D", "A", "A"],
    ["A", "A", "A", "A", "A", "E", "D", "D", "A", "D", "E", "A"],
    ["A", "C", "C", "D", "D", "D", "A", "A", "A", "A", "E", "A"],
    ["A", "C", "A", "A", "A", "A", "A", "D", "D", "D", "E", "A"],
    ["A", "D", "D", "D", "E", "E", "A", "C", "A", "A", "A", "A"],
    ["A", "A", "A", "E", "A", "E", "A", "C", "C", "D", "D", "A"],
    ["A", "D", "E", "E", "A", "D", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "D", "A", "A", "D", "A", "C", "D", "D", "A", "A"],
    ["A", "D", "D", "D", "A", "D", "C", "C", "A", "D", "E", MAZE_END],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
]

const isOnMazeExit = (maze: Maze, { x, y }: Position): boolean => maze[x][y] === MAZE_END;

/* istanbul ignore next */
const printMaze = (maze: Maze, walkedPath: WalkedPath) => {
    maze.forEach((row, x) => {
        const printRow = row.reduce((prev, current, y) => {
            // Add color if the current position is on the path
            if (walkedPath.hasBeenHere({ x, y })) {
                return `${prev} \x1b[32m${current}\x1b[0m`;
            } else {
                return `${prev} ${current}`;
            }
        }, '')

        console.log(printRow)
    });    
}

export {
    printMaze,
    mustFollowRoute,
    isOnMazeExit,
    MAZE_END
}

export default MAZE;

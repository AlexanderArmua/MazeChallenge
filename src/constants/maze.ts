import { Maze, MazeChar } from "../global/types";

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

const printMaze = (maze: Maze) => {
    maze.forEach(row => {
        const printRow = row.reduce((prev, current) => `${prev} ${current}`, '')

        console.log(printRow)
    });    
}

export {
    printMaze,
    mustFollowRoute,
    MAZE_END
}

export default MAZE;

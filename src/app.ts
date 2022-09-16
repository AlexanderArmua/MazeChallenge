import MAZE, { mustFollowRoute, printMaze } from "./constants/maze";
import dfs from "./dfsMaze/dfsMaze";

const [pathTaken, found] = dfs(MAZE, { x: 0, y: 1 }, mustFollowRoute);

printMaze(MAZE, pathTaken)

console.log("====================================");
if (found) {
    console.log(`\tPath found: ${pathTaken.getSteps} steps`);
} else {
    console.log('\tPath not found');
}
console.log("====================================");

import MAZE, { mustFollowRoute, printMaze } from "./constants/maze";
import dfs from "./dfsMaze";

const [pathTaken, founded] = dfs(MAZE, { x: 0, y: 1 }, mustFollowRoute);

printMaze(MAZE, pathTaken)

console.log("====================================");
if (founded) {
    console.log(`\tPath founded: ${pathTaken.getSteps} steps`);
} else {
    console.log('\tPath not founded');
}
console.log("====================================");

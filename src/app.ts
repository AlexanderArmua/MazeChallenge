import MAZE, { isOnMazeExit, mustFollowRoute, printMaze } from "./constants/maze";
import { Maze, MazeChar, Position } from "./global/types";
import possibleRoutes from "./mazeRoute";
import WalkedPath from "./walkedPath";

const dfs = (maze: Maze, currentPosition: Position, mustFollowRoute: MazeChar[], walkedPath = new WalkedPath()): [WalkedPath, boolean] => {
    walkedPath.addStep(currentPosition);

    if (isOnMazeExit(maze, currentPosition) && walkedPath.hasBeenWalkin()) {
        return [walkedPath, true];
    }

    const routes = possibleRoutes(currentPosition, maze, walkedPath.getSteps, mustFollowRoute)
        .filter((possiblePosition) => !walkedPath.hasBeenHere(possiblePosition));

    for (let i = 0; i < routes.length; i++) {
        const [result, isOnExit] = dfs(maze, routes[i], mustFollowRoute, walkedPath);

        if (isOnExit) {
            return [result, isOnExit];
        }
    }

    walkedPath.removeLastStep();

    return [walkedPath, false];
}

const [pathTaken, founded] = dfs(MAZE, { x: 0, y: 1 }, mustFollowRoute);

printMaze(MAZE, pathTaken)

console.log("====================================");
if (founded) {
    console.log(`\tPath founded: ${pathTaken.getSteps} steps`);
} else {
    console.log('\tPath not founded');
}
console.log("====================================");

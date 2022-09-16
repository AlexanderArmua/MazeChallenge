import { isOnMazeExit } from "../constants/maze";
import { Maze, MazeChar, Position } from "../global/types";
import possibleRoutes from "../mazeRoute/mazeRoute";
import WalkedPath from "../walkedPath/walkedPath";

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
            return [result, true];
        }
    }

    walkedPath.removeLastStep();

    return [walkedPath, false];
}

export default dfs;

import dfs from "./dfsMaze";
import { Maze, MazeChar } from "./global/types";

describe('dfsMaze', () => { 
    const maze: Maze = [
        ["B", "C", "A"],
        ["A", "C", "A"],
        ["B", "C", "A"]
    ];

    const mustFollowRoute: MazeChar[] = ["C", "C", "C"];

    it('should return a path', () => {
        const [pathTaken, founded] = dfs(maze, { x: 0, y: 0 }, mustFollowRoute);

        expect(founded).toBeTruthy();
        expect(pathTaken.getSteps).toBe(5);
        expect(pathTaken.getPath).toEqual([{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 0 }]);
    });  
    
    it('shouldnt return a path', () => {
        const [pathTaken, founded] = dfs(maze, { x: 0, y: 0 }, ["D", "D", "D"]);

        expect(founded).toBeFalsy();
        expect(pathTaken.getSteps).toBe(0);
        expect(pathTaken.getPath).toEqual([]);
    });
})

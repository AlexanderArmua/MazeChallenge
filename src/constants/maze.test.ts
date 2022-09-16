import { Maze } from "../global/types";
import { isOnMazeExit } from "./maze";
 

describe("Maze", () => {
    test('Is on maze end should be true', () => {
        const maze: Maze = [
            ["B"]
        ];
    
        expect(isOnMazeExit(maze, { x: 0, y: 0 })).toBe(true);
    });

    test('Is on maze end should be false', () => {
        const maze: Maze = [
            ["A"]
        ];
    
        expect(isOnMazeExit(maze, { x: 0, y: 0 })).toBe(false);
    });

    test('Is on maze with empty maze should be false', () => {
        const maze: Maze = [[]];
    
        expect(isOnMazeExit(maze, { x: 0, y: 0 })).toBe(false);
    });
});

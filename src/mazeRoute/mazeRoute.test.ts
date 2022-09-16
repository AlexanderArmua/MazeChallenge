import { Maze, MazeChar, Position } from "../global/types";
import possibleRoutes from "./mazeRoute";

describe("MazeRoute", () => {
    const maze: Maze = [
        ["B", "C", "A"],
        ["A", "C", "A"],
        ["B", "C", "A"],
    ];

    const mustFollowRoute: MazeChar[] = ["C", "C", "C"];

    test('possibleRoutes should return a path to right', () => {
        const position: Position = { x: 0, y: 0 };
    
        const steps = 1;

        const nextRoute = possibleRoutes(position, maze, steps, mustFollowRoute);

        expect(nextRoute).toEqual([{ x: 0, y: 1 }]);
    });

    test('possibleRoutes should return a path to bottom and up', () => {
        const position: Position = { x: 0, y: 1 };
    
        const steps = 2;        

        const nextRoute = possibleRoutes(position, maze, steps, mustFollowRoute);

        expect(nextRoute).toContainEqual({ x: 0, y: 0 });
        expect(nextRoute).toContainEqual({ x: 1, y: 1 });
    });

    test('possibleRoutes should return a path to left and up', () => {
        const position: Position = { x: 2, y: 1 };
    
        const steps = 3;

        const nextRoute = possibleRoutes(position, maze, steps, mustFollowRoute);

        expect(nextRoute).toContainEqual({ x: 1, y: 1 });
        expect(nextRoute).toContainEqual({ x: 2, y: 0 });
    });
});

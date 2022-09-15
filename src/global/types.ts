type MazeChar = "A" | "B" | "C" | "D" | "E"

type Maze = MazeChar[][]

interface Position {
    x: number;
    y: number;
}

export {
    Maze,
    MazeChar,

    Position
}

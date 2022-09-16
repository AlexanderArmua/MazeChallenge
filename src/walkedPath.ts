import { Position } from "./global/types";

interface IWalkedPath {
    [x: number]: { [y: number]: boolean };
}

class WalkedPath {
    private walkedPath: IWalkedPath = {};
    private path: Position[] = [];

    constructor(walkedPath: IWalkedPath = {}, path: Position[] = []) {
        this.walkedPath = walkedPath;
        this.path = path;
    }

    get getSteps(): number {
        return this.path.length;
    }

    get getPath(): Position[] {
        return this.path;
    }

    get getWalkedPath(): IWalkedPath {
        return this.walkedPath;
    }

    public addStep({ x, y }: Position): void {
        if (x in this.walkedPath) {
            this.walkedPath[x][y] = true;
        } else {
            this.walkedPath[x] = { [y]: true };
        }
        this.path.push({ x, y });
    }

    public hasBeenHere({ x, y }: Position): boolean {
        return x in this.walkedPath && y in this.walkedPath[x];
    }
}

export default WalkedPath;

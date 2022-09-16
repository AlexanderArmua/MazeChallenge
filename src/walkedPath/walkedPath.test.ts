import WalkedPath from "./walkedPath";

describe("walkedPath", () => {
    test("should add a step", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });

        expect(walkedPath.getSteps).toBe(1);
    });

    test("should remove a step", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.removeLastStep();

        expect(walkedPath.getSteps).toBe(0);
    });

    test("should return true if has been here", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });

        expect(walkedPath.hasBeenHere({ x: 0, y: 0 })).toBe(true);
    });

    test("should return false if has not been here", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });

        expect(walkedPath.hasBeenHere({ x: 0, y: 1 })).toBe(false);
    });

    test("should return true if has been walking", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });

        expect(walkedPath.hasBeenWalkin()).toBe(true);
    });

    test("should return false if has not been walking", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });

        expect(walkedPath.hasBeenWalkin()).toBe(false);
    });

    test("should return the path", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });

        expect(walkedPath.getPath).toEqual([{ x: 0, y: 0 }, { x: 0, y: 1 }]);
    });

    test("should return the walked path", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });

        expect(walkedPath.getWalkedPath).toEqual({ 0: { 0: true, 1: true } });
    });

    test("should return the walked path with multiple steps", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });
        walkedPath.addStep({ x: 1, y: 1 });

        expect(walkedPath.getWalkedPath).toEqual({ 0: { 0: true, 1: true }, 1: { 1: true } });
    });

    test("should return the walked path with multiple steps and remove last step but remembering the walked steps", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });
        walkedPath.addStep({ x: 1, y: 1 });
        walkedPath.removeLastStep();

        expect(walkedPath.getWalkedPath).toEqual({ 0: { 0: true, 1: true }, 1: { 1: true } });
    });

    test("should return the walked path with multiple steps and remove last step and add step", () => {
        const walkedPath = new WalkedPath();
        walkedPath.addStep({ x: 0, y: 0 });
        walkedPath.addStep({ x: 0, y: 1 });
        walkedPath.addStep({ x: 1, y: 1 });
        walkedPath.removeLastStep();
        walkedPath.addStep({ x: 1, y: 1 });

        expect(walkedPath.getWalkedPath).toEqual({ 0: { 0: true, 1: true }, 1: { 1: true } });
    });
});

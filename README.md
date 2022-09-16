
# CookUnity - Take Home Test

### Description
The test consists in solving the following maze:
```js
    ["A", "B", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
    ["A", "C", "A", "D", "D", "E", "A", "C", "C", "C", "D", "A"]
    ["A", "C", "C", "D", "A", "E", "A", "D", "A", "D", "A", "A"]
    ["A", "A", "A", "A", "A", "E", "D", "D", "A", "D", "E", "A"]
    ["A", "C", "C", "D", "D", "D", "A", "A", "A", "A", "E", "A"]
    ["A", "C", "A", "A", "A", "A", "A", "D", "D", "D", "E", "A"]
    ["A", "D", "D", "D", "E", "E", "A", "C", "A", "A", "A", "A"]
    ["A", "A", "A", "E", "A", "E", "A", "C", "C", "D", "D", "A"]
    ["A", "D", "E", "E", "A", "D", "A", "A", "A", "A", "A", "A"]
    ["A", "A", "D", "A", "A", "D", "A", "C", "D", "D", "A", "A"]
    ["A", "D", "D", "D", "A", "D", "C", "C", "A", "D", "E", "B"]
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
```
You have to start and finish the maze in the letter B the rules are very simple, you should solve it considering that you can only walk in the 3 letter and consecutive sequence CCC-DDD-EEE-DDD and repeating the pattern. 
The consecutive letters don’t need to be on the same line. Your solution should be able to find the exit starting on any of the maze entries.
You can cut the sequence if you find the letter B. I will assume that B-CCC-DDD-E-B or B-CCC-DDD-CC-B can be possible solutions.
The pattern to find is B-XXX-XXX-....-X*N-B, being Xs consecutive between them and 1<=N<=3

## Installation
```bash
    npm install
```

## Run
```bash
    npm run start
```

## Lint
```bash
    npm run lint
```

## Test
```bash
    npm run test
```

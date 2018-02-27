// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
//if an invalid input is given, you must create a new variable name because you can't declare variables that have the same name when you're creating a new Game object, so create something like let newGame = new Game(...);

import { Board } from './board';


class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        let tiles = numberOfRows * numberOfColumns;
        //start time when board is created
        this.timeOne = Date.now();
        (tiles < numberOfBombs) ? console.log("You need more tiles than bombs!")
        : this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }



    playMove(rowIndex, columnIndex) {
        this._board.flipTile(rowIndex, columnIndex);
        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log("Game Over!");
            //end time when player loses
            // let timeTwo = Date.now();
            // console.log(timeTwo);
            // console.log(`Time: ${timeTwo - this.timeOne}`);
            // this.displayTime();
            let timeTwo = Date.now();
            let finalTime = timeTwo - this.timeOne;
            let minute = "" + finalTime.getMinutes(); if (minute.length == 1) { minute = "0" + minute; };
            let second = "" + finalTime.getSeconds(); if (second.length == 1) { second = "0" + second; };
            console.log(`${minute}:${second}`);
            this._board.print();
        } else if (!this._board.hasSafeTiles()) {
            console.log("You are a winner!");
            //end time when player wins
            // let timeTwo = Date.now();
            // console.log(timeTwo);
            // console.log(`Time: ${timeTwo - this.timeOne}`);
            // this.displayTime();
            let timeTwo = Date.now();
            let finalTime = timeTwo - this.timeOne;
            let minute = "" + finalTime.getMinutes(); if (minute.length == 1) { minute = "0" + minute; };
            let second = "" + finalTime.getSeconds(); if (second.length == 1) { second = "0" + second; };
            console.log(`${minute}:${second}`);
            this._board.print();
        } else {
            console.log(`Current Board:`);
            this._board.print();
        }
    }

    //since the amount of time the game took needs to be displayed when a player wins or loses, maybe I should create a reusable function?
    // displayTime() {
    //     let timeTwo = Date.now();
    //     let finalTime = timeTwo - this.timeOne;
    //     let minute = "" + finalTime.getMinutes(); if (minute.length == 1) { minute = "0" + minute; };
    //     let second = "" + finalTime.getSeconds(); if (second.length == 1) { second = "0" + second; };
    //     console.log(`${minute}:${second}`);
    // }

}
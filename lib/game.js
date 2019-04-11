"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
//if an invalid input is given, you must create a new variable name because you can't declare variables that have the same name when you're creating a new Game object, so create something like let newGame = new Game(...);

var _board = require("./board");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Game);

        var tiles = numberOfRows * numberOfColumns;
        //start time when board is created
        this.timeOne = Date.now();
        tiles < numberOfBombs ? console.log("You need more tiles than bombs!") : this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
        if (numberOfRows === 0 || numberOfColumns === 0) {
            console.log("Rows or Columns cannot be 0!");
        } else {
            this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
        }
    }

    _createClass(Game, [{
        key: "playMove",
        value: function playMove(rowIndex, columnIndex) {
            this._board.flipTile(rowIndex, columnIndex);

            //
            function minutesSeconds(milliseconds) {
                var minutes = Math.floor(milliseconds / 60000);
                var seconds = (milliseconds % 60000 / 1000).toFixed(0);
                // return `${seconds === 60 ? minutes + 1:00 : mintues:${minutes}:`;
                console.log(seconds == 60 ? minutes + 1 + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
            }
            //

            if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
                console.log("Game Over!");
                //end time when player loses
                var timeTwo = Date.now();
                var millisecondTime = timeTwo - this.timeOne;
                console.log(timeTwo);
                console.log("Time: " + (timeTwo - this.timeOne));
                minutesSeconds(millisecondTime);
                this._board.print();
            } else if (!this._board.hasSafeTiles()) {
                console.log("You are a winner!");
                //end time when player wins
                var _timeTwo = Date.now();
                var _millisecondTime = _timeTwo - this.timeOne;
                console.log(_timeTwo);
                console.log("Time: " + (_timeTwo - this.timeOne));
                minutesSeconds(_millisecondTime);
                this._board.print();
            } else {
                console.log("Current Board:");
                this._board.print();
            }
        }
    }]);

    return Game;
}();
'use strict';

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

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Game);

        var tiles = numberOfRows * numberOfColumns;
        //start time when board is created
        this.timeOne = Date.now();
        tiles < numberOfBombs ? console.log("You need more tiles than bombs!") : this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Game, [{
        key: 'playMove',
        value: function playMove(rowIndex, columnIndex) {
            this._board.flipTile(rowIndex, columnIndex);
            if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
                console.log("Game Over!");
                //end time when player loses
                // let timeTwo = Date.now();
                // console.log(timeTwo);
                // console.log(`Time: ${timeTwo - this.timeOne}`);
                // this.displayTime();
                var timeTwo = Date.now();
                var finalTime = timeTwo - this.timeOne;
                var minute = "" + finalTime.getMinutes();if (minute.length == 1) {
                    minute = "0" + minute;
                };
                var second = "" + finalTime.getSeconds();if (second.length == 1) {
                    second = "0" + second;
                };
                console.log(minute + ':' + second);
                this._board.print();
            } else if (!this._board.hasSafeTiles()) {
                console.log("You are a winner!");
                //end time when player wins
                // let timeTwo = Date.now();
                // console.log(timeTwo);
                // console.log(`Time: ${timeTwo - this.timeOne}`);
                // this.displayTime();
                var _timeTwo = Date.now();
                var _finalTime = _timeTwo - this.timeOne;
                var _minute = "" + _finalTime.getMinutes();if (_minute.length == 1) {
                    _minute = "0" + _minute;
                };
                var _second = "" + _finalTime.getSeconds();if (_second.length == 1) {
                    _second = "0" + _second;
                };
                console.log(_minute + ':' + _second);
                this._board.print();
            } else {
                console.log('Current Board:');
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

    }]);

    return Game;
}();
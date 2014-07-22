var Player = {
  initialize: function(symbol){
    this.symbol = symbol;
  },
  create: function(symbol){
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer; //why does it need return to pass?
  }
};
var Space = {
  initialize: function(xCoord, yCoord){
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.spaceOpen = true;
    return xCoord, yCoord;
  },
  create: function(xCoord, yCoord){
    var newSpace = Object.create(Space);
    newSpace.initialize(xCoord, yCoord);
    return newSpace;
  },
  markBy: function(player){
    this.markedBy = player;
    this.spaceOpen = false;
  }
};
var Board = {
  initialize: function(){
    this.space1 = Space.create(1,1);
    this.space2 = Space.create(1,2);
    this.space3 = Space.create(1,3);
    this.space4 = Space.create(2,1);
    this.space5 = Space.create(2,2);
    this.space6 = Space.create(2,3);
    this.space7 = Space.create(3,1);
    this.space8 = Space.create(3,2);
    this.space9 = Space.create(3,3);
  },
  create: function(){
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  }
}
var Game = {
  createPlayers: function(){
    this.playerX = Player.create("X");
    this.playerO = Player.create("O");
  },
  createBoard: function(){
    this.gameBoard = Board.create();
  },
  winCondition: function(){

    if ( (this.gameBoard.space1.markedBy === this.playerX) &&
         (this.gameBoard.space2.markedBy === this.playerX) &&
         (this.gameBoard.space3.markedBy === this.playerX)){
      return true;
    } else if ( (this.gameBoard.space4.markedBy === this.playerX) &&
         (this.gameBoard.space5.markedBy === this.playerX) &&
         (this.gameBoard.space6.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space7.markedBy === this.playerX) &&
         (this.gameBoard.space8.markedBy === this.playerX) &&
         (this.gameBoard.space9.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space1.markedBy === this.playerX) &&
         (this.gameBoard.space4.markedBy === this.playerX) &&
         (this.gameBoard.space7.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space2.markedBy === this.playerX) &&
         (this.gameBoard.space5.markedBy === this.playerX) &&
         (this.gameBoard.space8.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space3.markedBy === this.playerX) &&
         (this.gameBoard.space6.markedBy === this.playerX) &&
         (this.gameBoard.space9.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space1.markedBy === this.playerX) &&
         (this.gameBoard.space5.markedBy === this.playerX) &&
         (this.gameBoard.space9.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space3.markedBy === this.playerX) &&
         (this.gameBoard.space5.markedBy === this.playerX) &&
         (this.gameBoard.space7.markedBy === this.playerX)){
      return true;
    }else if ( (this.gameBoard.space1.markedBy === this.playerO) &&
         (this.gameBoard.space2.markedBy === this.playerO) &&
         (this.gameBoard.space3.markedBy === this.playerO)){
      return true;
    } else if ( (this.gameBoard.space4.markedBy === this.playerO) &&
         (this.gameBoard.space5.markedBy === this.playerO) &&
         (this.gameBoard.space6.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space7.markedBy === this.playerO) &&
         (this.gameBoard.space8.markedBy === this.playerO) &&
         (this.gameBoard.space9.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space1.markedBy === this.playerO) &&
         (this.gameBoard.space4.markedBy === this.playerO) &&
         (this.gameBoard.space7.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space2.markedBy === this.playerO) &&
         (this.gameBoard.space5.markedBy === this.playerO) &&
         (this.gameBoard.space8.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space3.markedBy === this.playerO) &&
         (this.gameBoard.space6.markedBy === this.playerO) &&
         (this.gameBoard.space9.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space1.markedBy === this.playerO) &&
         (this.gameBoard.space5.markedBy === this.playerO) &&
         (this.gameBoard.space9.markedBy === this.playerO)){
      return true;
    }else if ( (this.gameBoard.space3.markedBy === this.playerO) &&
         (this.gameBoard.space5.markedBy === this.playerO) &&
         (this.gameBoard.space7.markedBy === this.playerO)){
      return true;
    }else {
      return false;
    }
  }
};


$(document).ready(function(){

  var theGame = Object.create(Game);
  var playerTurnX = true;
  theGame.createPlayers();
  theGame.createBoard();
  var playerX = theGame.playerX;
  var playerO = theGame.playerO;
  $(".board-space").click(function() {
    var spaceClicked = theGame.gameBoard[$(this).attr("id")];
    var spaceClickedValue = $(this).attr("id");

    if (playerTurnX && spaceClicked.spaceOpen) {
        $("#" + spaceClickedValue).text(theGame.playerX.symbol);
        spaceClicked.markBy(playerX);
        playerTurnX = false;

    } else if (!playerTurnX && spaceClicked.spaceOpen) {
        $("#" + spaceClickedValue).text(theGame.playerO.symbol);
        spaceClicked.markBy(playerO);
        playerTurnX = true;
    }
    console.log(theGame.winCondition());
    if (theGame.winCondition()){
      alert('winner');
    }
  });

});


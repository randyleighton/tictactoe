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
  }
};



describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe("create", function() {
  it("creates a new instance of the Player Prototype", function() {
    var testPlayer = Player.create("X");
    Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoord.should.equal(1);
      testSpace.yCoord.should.equal(2);
      testSpace.spaceOpen.should.equal(true);
    });
  });
  describe("create", function() {
  it("creates a new instance of the Space Prototype", function() {
    var testSpace = Space.create(1,2);
    Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
      testSpace.spaceOpen.should.equal(false);
    });
  });
});
describe("Board", function(){
  describe("initialize", function(){
    it("creates 9 spaces when initialized", function(){
      var newBoard = Object.create(Board);
      newBoard.initialize();
      newBoard.space1.xCoord.should.equal(1);
      newBoard.space8.yCoord.should.equal(2);
    });
  });
});
describe("Game", function(){
  describe("createPlayer", function(){
    it("creates the players", function(){
      var newGame = Object.create(Game);
      newGame.createPlayers();
      newGame.playerX.symbol.should.equal("X");
      newGame.playerO.symbol.should.equal("O");
    });
  });
  describe("createBoard", function(){
    it("creates a new board", function(){
      var newGameBoard = Object.create(Game);
      newGameBoard.createBoard();
      newGameBoard.gameBoard.space1.xCoord.should.equal(1,1);
    });
  });
  describe("winCondition", function(){
    it("identifies is a player has won", function(){
      var newGame = Object.create(Game);
      newGame.createPlayers();
      newGame.createBoard();
      newGame.gameBoard.space3.markBy(newGame.playerX);
      newGame.gameBoard.space5.markBy(newGame.playerX);
      newGame.gameBoard.space7.markBy(newGame.playerX);
      console.log(newGame.playerX);
      newGame.winCondition().should.equal(true);
      newGame.gameBoard.space7.markBy(newGame.playerX);
      newGame.gameBoard.space8.markBy(newGame.playerX);
      console.log(newGame.winCondition());
      newGame.gameBoard.space9.markBy(newGame.playerX);
      newGame.winCondition().should.equal(true);
    });
  });
});

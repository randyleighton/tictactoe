describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and food sleep and activity levels", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.tName.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });
  describe("feed", function(){
    it("increases the amount of food Tamagotchi has by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 1;
      myPet.feed();
      myPet.foodLevel.should.equal(2);
    });
  });
  describe("sleep", function(){
    it("increases the amount of sleep Tamagotchi has by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.sleepLevel = 1;
      myPet.sleep();
      myPet.sleepLevel.should.equal(2);
    });
  });
  describe("activity", function(){
    it("increases the amount of activity Tamagotchi has by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.activityLevel = 1;
      myPet.activity();
      myPet.activityLevel.should.equal(2);
    });
  });
  describe("alive", function(){
    it("checks whether pet is alive", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.activityLevel = 1;
      myPet.alive();
      myPet.isAlive.should.equal(true);
    });
    it("checks whether pet is dead if activity reaches 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.activityLevel = 0;
      myPet.alive();
      myPet.isAlive.should.equal(false);
    });
    it("checks whether pet is dead if sleep reaches 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.sleepLevel = 0;
      myPet.alive();
      myPet.isAlive.should.equal(false);
    });it("checks whether pet is dead if food reaches 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.alive();
      myPet.isAlive.should.equal(false);
    });
  });
  describe("timePasses", function() {
    it("decreases all resources by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(9);
      myPet.activityLevel.should.equal(9);
    });
  });
  describe("checkIn", function() {
    it("invokes time passing and checks if he is alive", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lildragon");
      myPet.checkIn();
      myPet.foodLevel.should.equal(9);
      myPet.sleepLevel.should.equal(9);
      myPet.activityLevel.should.equal(9);
      myPet.isAlive.should.equal(true);
    });
  });
});

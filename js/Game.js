class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      //exists()is used to check the availibility of the data snapshot in the database.
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100)

    Player.getPlayerInfo();

    //allPlayers
    //player1:{name: Rhys, distance: 0}
    //player2: {name: Mazin, distance:0}......

    if(allPlayers!==undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        if(plr === "player" + player.inder){
          fill("red")
        }
        else{
          fill("black")
        }
      display_position += 20; //display_position = display_position + 20;
      textSize(15)
      text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,display_position)
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!== null){
      player.distance = player.distance + 50;
      player.update();
    }
  }
  
}

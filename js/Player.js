class Player{
    constructor(){
     this.index = null;
     this.distance = 0;
     this.name = null;   
    }
  
    getCount(){
        var playerCountRef  = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
           playerCount = data.val();
      })
     
    }

    updateCount(count){
        database.ref('/').update({
         playerCount:count
        });
      }
    
    update(){
      var playerIndex = "players/player" + this.index; //string concatenation..players/player1, players/player2..
      database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance
      })
    }

    //Static functions are not attached to each object of the class. We are trying to get all the 
    //players’ info here - the work doesn’t involve any particular object(player1,player2,player3,player4)
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}

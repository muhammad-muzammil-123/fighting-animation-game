function firstPage(){
    var head = document.querySelector(".head");
    var section_1 = document.querySelector(".section-1")
    head.style.display = "none";
    section_1.style.display = "block";

}
function selectPlayer1(player){
   var character = document.getElementById("character");
   var player1 = document.querySelector(".player");
   var heading = document.querySelector(".heading-player");
   heading.style.display = "none";
  
  console.log(player1);
    console.log( player = player1.appendChild(character));   /*=== 'https://purepng.com/public/uploads/thumbnail//purepng.com-spidermanspider-manspidermansuperherocomic-bookmarvel-comicscharacterstan-leegamesmovie-1701528656381ojc7l.png'*/
      heading.style.display = "none"
      console.log(player1);
   player1.appendChild(character);
character.style.border = "none";
character.style.background = "none";
character.style.height = "200px";
character.style.position  = "absolute";
character.style.top = "260px"
character.style.bottom = "0px";
character.style.left = "100px";

 
      
}


function selectPlayer2(players){
    var character2 = document.getElementById("character2");
    var player2 = document.querySelector(".player2");
    var heading = document.querySelector(".heading-player1");
    heading.style.display = "none"
    console.log(player2);
    console.log(players)
   player2.appendChild(character2);
 character2.style.border = "none";
    character2.style.background = "none";
    character2.style.height = "200px";
   character2.style.position  = "absolute";
   character2.style.top = "260px"
    character2.style.bottom = "0px";
    character2.style.right = "150px";
}


function gameStartNow(){
  var section1 = document.querySelector(".section-1");
  var section2 = document.querySelector(".section-2");
  Swal.fire('you can use arrow key left right up  down and space for moving spider man ')


  section1.style.display = "none";
  section2.style.display = 'block';
  
  

}


// ################## game start now ############
var spiderMove = 0;

function gamePlay(){
  var spider = document.querySelector('.spider')

  console.log(event.keyCode)
  if(event.keyCode === 39  && spiderMove < 1200){
      spider.src = "images/spidey-walk1.gif";
      spiderMove = spiderMove + 10;
 spider.style.left = spiderMove + "px";
 console.log(spiderMove);
  } else if(event.keyCode === 38){
    spider.style.height = 150 + "px"
    spider.src = "images/spider-sting.gif";
    
    setTimeout(function(){
      spider.src = "images/spidey-scratchin.gif";
    },2300);

  } 
  else if(event.keyCode === 37 && spiderMove > 10){
    spider.src = "images/spidey-walk1.gif";
    spiderMove = spiderMove - 10;
    spider.style.left = spiderMove + "px";
    
    
  }else if(event.keyCode === 32){
    spider.src = "images/spidey-dashing.gif";
    setTimeout(function(){
      spider.src = "images/spidey-scratchin.gif";
    },4000);
  }else if(event.keyCode === 40){
    spider.src = "images/spidet-webball.gif";
    setTimeout(function(){
      spider.src = "images/spidey-scratchin.gif";
    },3000)
  }
  
 

  }


window.onkeydown = gamePlay











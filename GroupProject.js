$(document).ready(function() {
        $("#game-start").click(function() {
            // $("body").css({"background-image": "url(bg_2.png)"});  //change to choose player
            $(this).empty(); //clear all text in div
            var x = document.getElementsByClassName("character");
            x[0].style.display = 'block';
        });
});
var char=1;
var name;
var mode;
var score = 0;
var catches = 0;
window.onload=pageLoad;
function pageLoad(){
  var pic1 =document.getElementById("photo1");
  pic1.onclick=choosecharacter1;
  var pic2 =document.getElementById("photo2");
  pic2.onclick=choosecharacter2;
  var pic3 =document.getElementById("photo3");
  pic3.onclick=choosecharacter3;
  var pic4 =document.getElementById("photo4");
  pic4.onclick=choosecharacter4;
  var pic5 =document.getElementById("photo5");
  pic5.onclick=choosecharacter5;
  var enterbutton =document.getElementById("enter");
  enterbutton.onclick=chooseLevel;
}
function choosecharacter1(){
  char=1;
  updatePage("1","none");
};
function choosecharacter2(){
  char=2;
  updatePage("2","none");
};
function choosecharacter3(){
  char=3;
  updatePage("3","none");
};
function choosecharacter4(){
  char=4;
  updatePage("4","none");
};
function choosecharacter5(){
  char=5;
  updatePage("5","none");
};
function updatePage(x,y){
  var player=document.getElementById("choosenchar");
  var sarray=player.src.split('/');
  var str=sarray[sarray.length-1];
    player.src="p"+x+".gif";
  if(x=="1"){
      var choosephoto=document.getElementById("photo"+x);
      choosephoto.style.filter=y;
      choosephoto.style.border="5px solid blue";
      resetPage("2","3","4","5");
  }else if(x=="2"){
      var choosephoto=document.getElementById("photo"+x);
      choosephoto.style.filter=y;
      choosephoto.style.border="5px solid blue";
      resetPage("1","3","4","5");
  }
  else if(x=="3"){
      var choosephoto=document.getElementById("photo"+x);
      choosephoto.style.filter=y;
      choosephoto.style.border="5px solid blue";
      resetPage("1","2","4","5");
  }else if(x=="4"){
      var choosephoto=document.getElementById("photo"+x);
      choosephoto.style.filter=y;
      choosephoto.style.border="5px solid blue";
      resetPage("1","2","3","5");
  }else if(x=="5"){
      var choosephoto=document.getElementById("photo"+x);
      choosephoto.style.filter=y;
      choosephoto.style.border="5px solid blue";
      resetPage("1","2","3","4");
  }
};
function resetPage(a,b,c,d){
  var choosephoto=document.getElementById("photo"+a);
      choosephoto.style.filter="grayscale(100)";
  var choosephoto2=document.getElementById("photo"+b);
      choosephoto2.style.filter="grayscale(100)";
  var choosephoto3=document.getElementById("photo"+c);
      choosephoto3.style.filter="grayscale(100)";
  var choosephoto4=document.getElementById("photo"+d);
      choosephoto4.style.filter="grayscale(100)";
};
function chooseLevel(){
  var id=document.getElementById("playerid").value;
  name=id;
  if (id.length==0){
    alert("Please insert your ID");
  }else if(id.length>0){
    nextStep(id);
  }
};
function nextStep(i){
  document.getElementById("name").innerHTML="PLAYER";

    var selectedlevel;
  var ele = document.getElementsByName("difficulty");
  for(j=0;j<ele.length;j++){
    if(ele[j].checked){
        selectedlevel=ele[j].value;  
        mode=j+1;  
      }
  }

  var myDiv=document.getElementById("id");
  var parent=myDiv.parentNode;
  parent.removeChild(myDiv);

    var myDiv2=document.getElementById("characterphoto");
  var parent2=myDiv2.parentNode;
  parent2.removeChild(myDiv2);

  var np=document.createElement("p");
  np.style.border="none";
  np.innerHTML="ID:\t\t"+i+"<br>"+"DIFFICULTY:\t\t"+selectedlevel;
  np.style.height="60";
  parent.appendChild(np);

  var nimg=document.createElement("img");
  nimg.src="p"+char+".gif";
  nimg.width="300";
  nimg.border="5px solid black";
  nimg.style.display="block";
  nimg.style.marginLeft="auto";
  nimg.style.marginRight="auto";
  parent.appendChild(nimg);

    var pressAnything=document.createElement("p");
    pressAnything.style.border="none";
    pressAnything.innerHTML="(PRESS ENTER TO CONTINUE)";
    pressAnything.style.fontSize="35px";
    parent.appendChild(pressAnything);

  document.body.addEventListener('keypress', animationIntro);

};

function animationIntro(){
  var x = document.getElementsByClassName("character");
    x[0].style.display = 'none';
    var i =document.getElementsByClassName("opening");
    i[0].style.display="block";
    $('#passbutton').click(function(){
  $(".opening").css("display","none");
  var removeDiv=document.getElementById("openingvideo");
  var parent=removeDiv.parentNode;
  parent.removeChild(removeDiv);
  var newpage=document.getElementsByClassName("firstpage");
  newpage[0].style.display="block";
  setCanvas(1);
  $('audio').attr("src","stage1.mp3");
  });
    var textarray=[">>  Hello, My name is Jiu and Im going to travel this world!", ">>  My goal is to beat everyone and catch Pokemon as much as I can.",">>  No matter where I am, in tall grass or behind a rock, I will find you.",">>  Pokemon, gonna catch \'em all!",">>  Press the PASS button" ];
    var k=0;
    $('#nextbutton').click(function(){

  changetext=textarray[k];
  $('#textmessage').html(changetext);
  k++;

    });
}

function setCanvas(i){
  var imgArr = ['pok1.png','pok2.png','pok3.png','pok4.png',
'pok5.png','pok6.png','pok7.png','pok8.png',
'pok9.png','pok10.png','pok11.png','pok12.png'];
var statusArr = new Array(48);

//2~13????????? ???????????? status
function initArr(){
  statusArr.fill(0);
  for(var i =0; i< 12; i++){
    statusArr[i] = i+3;
  }
}
initArr();

function reStatus(){
  statusArr.sort(()=>Math.random() - 0.5);
  return statusArr.pop();
}
var stage =i;
var canvas = document.getElementById("myCanvas"); //????????? ?????? ????????????
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
//?????? ????????? ??????????????? ????????????
if (stage==1){
      dx=2.7;
      dy=-2.7;
}else if(stage==2){
      dx=3.5;
      dy=-3.5;
      document.getElementById("seconds").innerHTML="START";
}

      // ????????? ??????
var ballRadius=15;

var paddleHeight = 10;
var paddleWidth;
if(mode==2){
  paddleWidth=70;
}
else if(mode==1){
  paddleWidth=100;
}
      //?????? ??????
      //x?????? ?????? ??????
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 4;
var brickColumnCount = 12;
var brickWidth = 60;
var brickHeight = 60;
var brickPadding = 8;
var brickOffsetTop = 30;
    //?????? ?????? ??????
var brickOffsetLeft = 25;
var colorSet = false;
var lives = 3;
    //????????? ??????
var diff;
if(mode==2){
  diff=2;
}
else if(mode==1){
  diff=1;
}
var timeleft;
if(stage==1){
       timeleft = 40; 
   }
else if(stage==2){
  timeleft= 30;
  if(mode==1){
   canvas.style.backgroundImage="url('canvas2.png')";
  }
  else if(mode==2){
    canvas.style.backgroundImage="url('canvas3.jpg')";
  }     
   }

      // 2?????? ?????? table ?????? - ???(c) ???(R) ????????? ???,?????? ?????? ????????? ?????? ?????? (???????????????)
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
  bricks[c][r] = { x: 0, y: 0, status: diff }; //status 1, 2
  }
}
   
   // ?????? ????????? ??????
   
   //Easy mode (stage 1, 2)
    function drawBricks1() {
        for (var c = 0; c < brickColumnCount; c++) {
          for (var r = 0; r < brickRowCount; r++) {
            //status??? 1?????? ????????? ????????? 0?????? ????????? ?????????.
            if (bricks[c][r].status === 1) {
              var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              var img = new Image(); 
              img.src = "bush.png" ; 
              ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);
            }
            else if (bricks[c][r].status >= 3) {
              var imgIndex = bricks[c][r].status - 3; //0~11
              var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              var img = new Image(); 
              img.src = imgArr[imgIndex] ;  //????????? ????????? reStatus?????? ????????? 
              ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);
            }
          }
        }
    }
    
    //Hard mode (stage 1, 2)
    function drawBricks2() {
        for (var c = 0; c < brickColumnCount; c++) {
          for (var r = 0; r < brickRowCount; r++) {
            //status??? 2?????? stone2???, 1?????? stone1???, ??? ?????? ????????? or 0 ????????? ?????? 
            if (bricks[c][r].status === 2) {
              var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              var img = new Image(); 
              img.src = "stone1.png" ; 
              ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);
            }

            else if (bricks[c][r].status === 1) {
              var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              var img = new Image(); 
              img.src = "stone2.png" ; 
              ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);
            }

            else if (bricks[c][r].status >= 3) {
              var imgIndex = bricks[c][r].status -3 ; //0~11
              var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              var img = new Image(); 
              img.src = imgArr[imgIndex] ;  //????????? ????????? reStatus?????? ????????? 
              ctx.drawImage(img, brickX, brickY, brickWidth, brickHeight);

            }
          }  
        }
      }
    
    
//??? ????????? ??????
  function drawBall() {
        var ballImage= new Image();
        ballImage.src="pokemonball.jpg";
        ctx.drawImage(ballImage,x, y,  ballRadius*2, ballRadius*2);
  }
    //?????? ?????????
  function drawPaddle() {
       var padddleImage = new Image();
       padddleImage.src = "paddle.jpg";
       ctx.drawImage(padddleImage, paddleX, canvas.height-paddleHeight,
        paddleWidth, paddleHeight);
  }
  //???????????? ?????? block??????
    function draw() {
        //?????? ????????? ??? ??? ??????
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        if(mode==1)
          drawBricks1();
        else if(mode==2)
          drawBricks2();
        drawScore();
        drawName();
        drawLives();
        drawStage();
        catchCount();
        collisionDetection();
        movingball();
        requestAnimationFrame(draw);
    }
    var downloadTimer = setInterval(function(){
  if(timeleft == 0){
    
    if(stage===1) {
      alert("?????? ??????????????? ???????????????");
    clearInterval(downloadTimer);
    var newpage=document.getElementsByClassName("firstpage");
    newpage[0].style.display="none";
    var nextpage=document.getElementsByClassName("middle");
     nextpage[0].style.display="block";
     midAnimation();
     $('audio').attr("src","mid_animation.mp3");
     bricks=[];
      //nextpage();
    }
    else if(stage===2) {
      alert("GAME CLEAR!!");
      clearInterval(downloadTimer);
      document.body.style.backgroundImage="url('nightimg.jpg')";
      var currentpage=document.getElementsByClassName("firstpage");
    currentpage[0].style.display="none";
    var lastpage=document.getElementsByClassName("score");
    lastpage[0].style.display="block";
    finalscore();
    $('audio').attr("src","ending_bgm2.mp3");
    }
  }
  document.getElementById("seconds").value = 10 - timeleft;
  timeleft -= 1;
   document.getElementById("seconds").innerHTML=timeleft;
}, 1000);
      draw();
      if(stage==1){
        drawImage();
      }
      //????????? ?????? (?????? ????????? false -> true)
    function movingball(){   
    //?????? ?????? ??? ?????? ?????? ??????(y??? ????????? ?????????)    
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius ) {
          dx = -dx;
        }
        if (y + dy < ballRadius) {
          dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
          if (x > paddleX && x < paddleX + paddleWidth) {
            if(stage==1)
              dy = -dy * 1.05;
            else if(stage==2)
              dy = -dy * 1.05;
            
          } else {
            lives--;
            if (!lives) {
              alert("GAME OVER");
              var currentpage=document.getElementsByClassName("firstpage");
            currentpage[0].style.display="none";
            document.body.style.backgroundImage="url('nightimg.jpg')";
            var lastpage=document.getElementsByClassName("score");
            lastpage[0].style.display="block";
            finalscore();

            } else {
              x = canvas.width / 2;
              y = canvas.height - 30;
              if (stage==1){
               dx =2.7;
               dy=-2.7;
              }else if (stage==2){
               dx=3;
               dy=-3.2;
              }
              paddleX = (canvas.width - paddleWidth) / 2;
            }
          }
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) {
          paddleX += 7;
          //leftPressed ??? ????????? ?????? 0?????? ??????
        } else if (leftPressed && paddleX > 0) {
          paddleX -= 7;
        }
        x += dx;
        y += dy;
    }
    function keyDownHandler(e) {
        if (e.keyCode === 39) {
          rightPressed = true;
        } else if (e.keyCode === 37) {
          leftPressed = true;
        }
      }
    function keyUpHandler(e) {
        if (e.keyCode === 39) {
          rightPressed = false;
        } else if (e.keyCode === 37) {
          leftPressed = false;
        }
      }
      //????????? ???????????? ?????? ????????? ????????? ??????
    document.addEventListener("mousemove", mouseMoveHandler, false);
    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
          paddleX = relativeX - paddleWidth / 2;
        }
    }
  // ????????? ?????? ?????? ??????
    // ?????? ???????????? ????????????????
    // ?????? x,y????????? ????????? x,y???????????? ????????????.
    // ?????? x,y????????? ????????? x,y?????? + ????????????, ???????????? ?????? ???????????????.
    function collisionDetection() {
        for (var c = 0; c < brickColumnCount; c++) {
          for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status === 2) {
              if (x > b.x &&
                x < b.x + brickWidth &&
                y > b.y &&
                y < b.y + brickHeight)
               {
                colorSet = true;
                dy = -dy;
                //????????? ????????? status??? 1??? ?????????.
                b.status = 1;
                score= score + 5; //????????? ????????? 5??? ??????
                }
            }
            else if (b.status === 1) {
              if (
                x > b.x &&
                x < b.x + brickWidth &&
                y > b.y &&
                y < b.y + brickHeight
                ) {
                colorSet = true;
                dy = -dy;
                //????????? ????????? status??? 3~14??? ????????? 36?????? 0 ??? ????????? ??????
                b.status = reStatus(); 
                if(b.status === 0)
                  score = score + 3;
                }
            }
            else if(b.status > 2){
            if (
              x > b.x &&
              x < b.x + brickWidth &&
              y > b.y &&
              y < b.y + brickHeight
              ) {
              colorSet = true;
              dy = -dy;
                //????????? ????????? status??? 0?????? ?????????.
                b.status = 0;
                score = score + 10;
                catches++; 
                
              }
            }
          }
        }
    }
    // ?????? ??????
     function drawScore() {
        //?????? ?????? ?????????
        var sc=document.getElementById("score");
        sc.innerHTML="Score :   "+score;
    }
    function drawName() {
    var sc = document.getElementById("playername");
    sc.innerHTML = "Player Name :  " + name;
    }

    function drawImage() {
    var image = document.createElement("img");
    var imageParent = document.getElementById("playerimage");

    image.src="p"+char+".gif";
    image.width = "200";
    image.border = "5px solid black";
    image.style.display = "block";
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";
    imageParent.appendChild(image);
    }
    function drawStage(){
      var currentstage=document.getElementById("stagenumber");
      currentstage.innerHTML="Stage "+stage;
    }


    function drawLives() {
        ctx.font = "20px Pangolin";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Life: " , canvas.width - 125, 20);
        var ballImage2= new Image();
        ballImage2.src="pokemonball1.jpg";
        var liveswidth=10;
        
        if(lives==3) {
          ctx.drawImage(ballImage2,canvas.width-70, 7,  liveswidth*2, liveswidth*2);
          ctx.drawImage(ballImage2,canvas.width-50, 7,  liveswidth*2, liveswidth*2);
          ctx.drawImage(ballImage2,canvas.width-30, 7,  liveswidth*2, liveswidth*2);
        }
        else if(lives==2) {
          ctx.drawImage(ballImage2,canvas.width-70, 7,  liveswidth*2, liveswidth*2);
          ctx.drawImage(ballImage2,canvas.width-50, 7,  liveswidth*2, liveswidth*2);        }
        else if(lives==1) {
          ctx.drawImage(ballImage2,canvas.width-70, 7,  liveswidth*2, liveswidth*2);
        }
        else
           ctx.fillText("Lives: ", canvas.width - 125, 20);
        
    }

    function catchCount() {
      var catchcount = document.getElementById("catches");
      catchcount.innerHTML="Catches.   " + catches;
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    //????????? ???: ????????? ?????????(????????? ?????? ??????), ?????? ?????????, ????????? ???
}
function midAnimation(){
$('#mpassbutton').click(function(){

  $(".middle").css("display","none");

  //???????????????
  var removeDiv=document.getElementById("middlemp3");
  var parent=removeDiv.parentNode;
  parent.removeChild(removeDiv);
  var newpage=document.getElementsByClassName("firstpage");
    newpage[0].style.display="block";
    stage=2;
  setCanvas(2);
  $('audio').attr("src","stage2_1.mp3");

});


var mtextarray=[">>  and prove that I am stronger.",">>  I wont give up until I beat him!",">>  More pokemon to catch after this!!",">>  Press the PASS button" ];

var aindex=2;//????????? ?????????
var t=0;//mtextarray ?????????
$('#mnextbutton').click(function(){
  //????????? ????????? ????????? ?????????
  if(aindex>=5)
    aindex=5;


  aimg_num="aimg"+aindex+".PNG";
  $("#aimg").attr("src",aimg_num);
  
  aindex++;
  




  //????????? ????????? ????????? ?????????
  changetext=mtextarray[t];
  $('#mtextmessage').html(changetext);
  t++;

});
}
function finalscore(){
  ////latestt?????? ?????? 
  var finalscoreh1=document.getElementById("finalscoreh1");
  finalscoreh1.innerHTML ="FINAL SCORE";
  ////
  var player=document.getElementById("playerscore");
  player.innerHTML="<br><br><br><br><br>";
  player.innerHTML="<br><br><br>PLAYER :"+name+"<br>"+"SCORE:"+score+"<br>"+"TOTAL CATCHES:"+catches;


    var pressAnything=document.createElement("p");
    pressAnything.style.border="none";
    pressAnything.innerHTML="<br><br><br>(PRESS ENTER TO REPLAY)";
    pressAnything.style.fontSize="35px";
    player.appendChild(pressAnything);

  document.addEventListener('keypress', function(e){
  if(e.keyCode == 13)
    window.location.reload();
    
   })
  
}

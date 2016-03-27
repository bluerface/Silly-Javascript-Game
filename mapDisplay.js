

var playerX = 20;
var playerY = 20;
var xOff = 0;
var yOff = 0;
var width = 5;


function drawMap()
{
  for (var y = 0; y < mapHeight; y++)
  {
    mapTable += "<tr>";
    for (var x = 0; x < mapWidth; x++)
    {
      mapTable += '<td id="t' + x + y + '"> <img src="images/desert_' + tiles[y][x].img +'.png"> </td>'
    }
    mapTable += "</tr>";
  }
  //txt = "<tr><td> Hello Loosers</td> </tr>";
  document.getElementById('map-table').innerHTML = mapTable;
}


function drawMapView()
{
  var mapTable = "";
  var centerX = playerX - xOff;
  var centerY = playerY - yOff

  for (var y = centerY - width; y <= centerY + width; y++)
  {
    mapTable += "<tr>";
    for (var x = centerX - width; x <= centerX + width; x++)
    {
      mapTable += '<td id="t' + x + y + '"> <img src="images/desert_' + tiles[y][x].img +'.png"> </td>'
    }
    mapTable += "</tr>";
  }
  //txt = "<tr><td> Hello Loosers</td> </tr>";
  document.getElementById('map-table').innerHTML = mapTable;
}


function drawPlayer()
{
  document.getElementById("t" + playerX + playerY).innerHTML += '<img id="player" src="images/player.png">'
}


window.onkeydown = function(e)
{
    var evt = e ? e:event;
    switch(evt.keyCode){
        case 37: //left
            if (playerX > width)
            {
                playerX -= 1;
                if (playerX >= mapWidth - 1 - width)
                    xOff -= 1;
            }
            else if (playerX <= width && playerX > 0)
            {
                playerX -=1
                xOff -= 1
            }
            break;
        case 38: //up
            if (playerY > width)
            {
                playerY -= 1;
                if (playerY >= mapHeight - 1 - width)
                    yOff -= 1;
            }
            else if (playerY <= width && playerY > 0)
            {
                playerY -=1
                yOff -= 1
            }
            break;
        case 39: //right
            if (playerX < mapWidth - 1 - width)
            {
                playerX += 1;
                if (playerX <= width)
                  xOff += 1;
            }
            else if (playerX >= mapWidth - 1 - width && playerX < mapWidth - 1)
            {
                playerX +=1;
                xOff += 1;
            }
            break;
        case 40: //down
            if (playerY < mapHeight - 1 - width)
            {
                playerY += 1;
                if (playerY <= width)
                  yOff += 1;
            }
            else if (playerY >= mapHeight - 1 - width && playerY < mapHeight - 1)
            {
                playerY +=1;
                yOff += 1;
            }
            break;
        default:
            return;
        }
drawMapView()
drawPlayer()
}

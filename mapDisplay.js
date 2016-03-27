var snakKillCount = 0;

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

function getEventImage(x,y)
{
    switch (tiles[y][x].events)
    {
      case "snak":
        return '<img class="enemy" src="images/snak.png">'
      default:
        return ""
    }
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
      mapTable += '<td id="t' + x + y + '"> <img src="images/desert_' + tiles[y][x].img +'.png">' + getEventImage(x,y) + '</td>';
    }
    mapTable += "</tr>";
  }
  //txt = "<tr><td> Hello Loosers</td> </tr>";
  document.getElementById('map-table').innerHTML = mapTable;
  document.getElementById('kill-count').innerHTML = "You have killed " + snakKillCount + " snaks!"
}


function drawPlayer()
{
  document.getElementById("t" + playerX + playerY).innerHTML += '<img id="player" src="images/player.png">'
}

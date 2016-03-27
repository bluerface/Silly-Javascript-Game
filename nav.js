function goLeft() {
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
}
function goUp() {
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
}
function goRight() {
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
}
function goDown() {
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
}
function isEmpty(x,y) {
  if (x >= 0 && y>= 0 && x<mapWidth && y<mapHeight)
    return !tiles[y][x].wall

}

window.onkeydown = function(e)
{
    var evt = e ? e:event;
    switch(evt.keyCode){
        case 37: //left
            if(isEmpty(playerX-1, playerY))
              goLeft();
            break;
        case 38: //up
            if(isEmpty(playerX, playerY-1))
              goUp();
            break;
        case 39: //right
            if(isEmpty(playerX+1, playerY))
              goRight();
            break;
        case 40: //down
            if(isEmpty(playerX, playerY+1))
              goDown();
            break;
        default:
            return;
        }
drawMapView()
drawPlayer()
}

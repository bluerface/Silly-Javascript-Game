
var mapHeight = 6;
var mapWidth = 8;

var tiles = []
for (var y = 0; y < 6; y++)
{
  tiles[y] = [];
  for (var x = 0; x < 8; x++)
  {
    tiles[y].push(y*8+x)
  }
}

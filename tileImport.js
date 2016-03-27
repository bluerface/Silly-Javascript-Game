var tileRowArray = tileString.split('\n');
//['0,1,2,3,4,5,6,7' , '8,9,10,11,12,13,14,15']

var tiles = [];

for (var i = 0; i < tileRowArray.length; i++) {
  var tileRow = tileRowArray[i].split(',');
    for (j=0; j<tileRow.length; j++)
    {
      tileRow[j] = {img:tileRow[j]}
    }
  tiles.push(tileRow);
}

//tiles = [[0,1,2,3,4,5,6,7],[8,9,10,11,12,13,14,15]]

var mapHeight = tiles.length;
var mapWidth = tiles[0].length;

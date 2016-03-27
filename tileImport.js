// import image grid

var tileStringArray = tileString.split('\n');
//['0,1,2,3,4,5,6,7' , '8,9,10,11,12,13,14,15']

var tiles = [];

for (var i = 0; i < tileStringArray.length; i++) {
  var tileRow = tileStringArray[i].split(',');
    for (j=0; j<tileRow.length; j++)
    {
      tileRow[j] = {img:tileRow[j]}
    }
  tiles.push(tileRow);
}

//tiles = [[{img:1}, {img:2}, ...], [{img:8}, {img:9}...]]

var mapHeight = tiles.length;
var mapWidth = tiles[0].length;




// import walls
wallString = wallString.replace(/-1/g, "0")
var wallStringArray = wallString.split('\n')      //["1, 0, 0, 1", "1, 1, 0, 1"]

var walls = [];                                   // empty array

for (var i=0; i<wallStringArray.length; i++)
{
  var wallRow = wallStringArray[i].split(',');    // converts each string to an array and saves it in wallRow
  walls.push(wallRow);                            //adds wallRow to the end of the wall array
}                                                 // walls = [["1", "0", "0", "1"], ["1", "1", "0", "1"]]


for (var y = 0; y < walls.length; y++) {
  for (var x = 0; x < walls[0].length; x++) {
    tiles[y][x].wall = Number(walls[y][x]);
  }
}



// import events
eventString = eventString.replace(/0/g, "snak")
eventString = eventString.replace(/-1/g, "0")
eventString = eventString.replace(/1/g, "trap")

var eventStringArray = eventString.split('\n')      //["snak, 0, 0, trap", "0, 0, 0, snak"]

var events = [];                                   // empty array

for (var i=0; i<eventStringArray.length; i++)
{
  var eventRow = eventStringArray[i].split(',');    // converts each string to an array and saves it in eventRow
  events.push(eventRow);                            //adds eventRow to the end of the wall array
}                                                 // events = [["snak", "0", "0", "trap"], ["0", "0", "0", "snak"]]


for (var y = 0; y < events.length; y++)
{
  for (var x = 0; x < events[0].length; x++)
  {
    if(events[y][x] === "0")
      tiles[y][x].events = Number(events[y][x]);
    else
      tiles[y][x].events = events[y][x];
  }
}

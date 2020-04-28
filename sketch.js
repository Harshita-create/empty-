var database
var drawing =[] 
var currentPath = []
var isDrawing = 'false'

function setup(){
  var firebaseConfig = {
    apiKey: "AIzaSyBLKZ9MM2cnI3QhsgNgeBA1XUA7p094Sa4",
    authDomain: "car-game-f757a.firebaseapp.com",
    databaseURL: "https://car-game-f757a.firebaseio.com",
    projectId: "car-game-f757a",
    storageBucket: "car-game-f757a.appspot.com",
    messagingSenderId: "54982321432",
    appId: "1:54982321432:web:6291df3e4ec75bd5686a6d"
  };
  .//firebase.intializeApp(firebaseConfig)
  canvas = createCanvas(400,400)
canvas.mousePressed(startPath)
canvas.parent = "canvascontainer"

var saveButton = select('#saveButton')
saveButton.mousePressed(saveDrawing)
canvas.mouseReleased(endPath)
}

function startPath(){
  isDrawing ='true'
  currentPath = []
  drawing.push(currentPath)
}

function endPath(){
 isDrawing ='false' 
}

function draw(){
  background(0)

  if(isDrawing){
    var point = {
      x : mouseX,
      y : mouseY
    }
    currentPath.push(point)
  }

  
  stroke(255)
  strokeWeight(4)
  noFill()
  for (var i = 0; i < drawing.length; i++){
    var path = drawing[i]
    beginShape()
    for (var j = 0; j < path.length; j++){
     vertex(path[j].x, path[j].y)
    }
    endShape()
  }
  
}

function saveDrawing(){
  var ref = database.ref('drawings')
  var data = {
    name: "Harshita",
    drawing : drawing
  }
  var result = ref.push(data,dataSent)
  console.log(result.key)
}

function dataSent(err ,status){
console.log(status)
}

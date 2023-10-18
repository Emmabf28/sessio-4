controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 20, 20)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 9 9 9 9 9 4 4 4 9 9 9 9 9 4 4 
    4 9 4 4 4 9 4 4 4 9 4 4 4 9 4 4 
    9 9 4 f 4 9 4 4 4 9 4 f 4 9 9 9 
    4 9 4 f 4 9 9 9 9 9 4 f 4 9 4 4 
    4 9 9 9 9 9 4 4 4 9 9 9 9 9 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 a a a 4 4 4 4 4 4 4 
    4 4 4 4 4 4 a a a 4 4 4 4 4 4 4 
    4 4 4 4 4 4 a a a 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 7 7 4 7 7 7 7 7 7 4 7 7 4 4 4 
    4 4 7 7 7 2 2 2 2 7 7 7 4 4 4 4 
    4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 
    4 4 4 4 4 1 2 2 2 4 4 4 4 4 4 4 
    4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)

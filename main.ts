namespace SpriteKind {
    export const HUD = SpriteKind.create()
}
function broHubthing (hubSprite: Sprite) {
    hubSprite.z = 200
    hubSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    hubSprite.setPosition(12, 9)
    hubSprite.setImage(image.create(meterWidth, 4))
    hubSprite.y = 115
}
function createTechnoblade () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 . 5 . 5 . 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . 3 f 1 3 1 f 3 . . . . . 
        . . . . 3 f 1 3 1 f 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . 2 2 2 2 5 2 2 2 2 . . . . 
        . . . 2 2 2 2 1 2 2 2 2 . . . . 
        . . . 2 2 2 2 5 2 2 2 2 . . . . 
        . . . 2 2 2 2 1 2 2 2 2 . . . . 
        . . . . 2 2 2 5 2 2 2 . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function drawHUBMeter (percent: number, hubSprite: Sprite, onColor: number, offColor: number) {
    hubSprite.image.fill(offColor)
    fillWidth = percent * meterWidth + 100
    hubSprite.image.fillRect(0, 0, fillWidth, hubSprite.height, onColor)
}
let mySprite: Sprite = null
let fillWidth = 0
let meterWidth = 0
tiles.setCurrentTilemap(tilemap`level1`)
createTechnoblade()
let Hunger = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.HUD)
meterWidth = scene.screenWidth() - 20
broHubthing(Hunger)
drawHUBMeter(100, Hunger, 7, 1)
fillWidth = 100
forever(function () {
    for (let index = 0; index < 10; index++) {
        pause(1000)
    }
    fillWidth += -25
    if (fillWidth == 100) {
        drawHUBMeter(100, Hunger, 7, 1)
    }
    if (fillWidth == 75) {
        drawHUBMeter(100, Hunger, 5, 1)
    }
    if (fillWidth == 50) {
        drawHUBMeter(100, Hunger, 3, 1)
    }
    if (fillWidth == 25) {
        drawHUBMeter(100, Hunger, 1, 1)
    }
})

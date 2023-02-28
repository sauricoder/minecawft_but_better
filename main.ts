namespace SpriteKind {
    export const HUD = SpriteKind.create()
}
function broHubthing (hubSprite: Sprite) {
    hubSprite.z = 200
    hubSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    hubSprite.setPosition(12, 9)
    hubSprite.setImage(image.create(scene.screenWidth() - 30, 4))
    hubSprite.y = 115
    hubSprite.image.fill(5)
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
let mySprite: Sprite = null
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
broHubthing(Hunger)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (green_jump_count <= 1) {
        greensnake.vy = JUMP_SPEED
        green_jump_count += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    sprite.vy = 0
    tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
})
let greensnake: Sprite = null
let green_jump_count = 0
let JUMP_SPEED = 0
let GRAVITY = 250
JUMP_SPEED = -90
green_jump_count = 2
let greensnake_left_image = img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `
let greensnake_right_image = greensnake_left_image.clone()
greensnake_right_image.flipX()
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
greensnake = sprites.create(greensnake_left_image, SpriteKind.Player)
controller.moveSprite(greensnake, 100, 0)
greensnake.ay = GRAVITY
scene.centerCameraAt(60, 76)
game.onUpdate(function () {
    if (greensnake.isHittingTile(CollisionDirection.Bottom)) {
        green_jump_count = 0
    }
})
game.onUpdate(function () {
    if (greensnake.vy < 0) {
        greensnake.setImage(greensnake_right_image)
    } else {
    	
    }
})

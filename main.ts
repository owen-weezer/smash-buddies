controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . 6 6 6 6 . . 
        . 6 7 7 7 7 6 . 
        6 7 9 9 7 7 7 6 
        6 7 7 7 7 7 7 6 
        . 6 7 7 7 7 6 . 
        . . 6 6 6 6 . . 
        `, greensnake, BULLET_VX, 0)
    music.pewPew.play()
    if (greensnake.image == greensnake_left_image) {
        projectile.vx = BULLET_VX * -1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (green_jump_count <= 1) {
        music.thump.play()
        greensnake.vy = JUMP_SPEED
        green_jump_count += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.bigCrash.play()
    sprite.vy = 0
    tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
})
function create_redsnake () {
    redsnake_left_image = img`
        . . . c c c c c c . . . . . . . 
        . . c 2 3 3 3 3 2 c . . . . . . 
        . c 3 3 3 3 3 3 3 3 c . . . . . 
        c 2 3 3 3 3 3 3 3 3 2 c . . . . 
        c 3 c 2 2 2 2 c 3 3 3 c . . . . 
        f 3 2 f 2 2 f 2 3 3 3 f . . . . 
        f 3 3 3 3 3 3 3 3 3 3 f . . . . 
        . f 3 3 3 3 2 c 3 3 2 f . . . . 
        . . f c c c c 3 3 2 f c c c . . 
        . . c 2 8 3 3 3 f c c 3 3 3 c . 
        . c 2 3 3 8 3 3 c f 2 3 3 3 3 c 
        . c 1 1 1 1 3 2 2 c 2 2 2 c c c 
        . c 1 1 1 1 1 2 2 2 2 2 2 c . . 
        . c 2 1 1 1 1 1 2 2 2 2 2 c . . 
        . . c 2 1 1 1 1 1 3 2 2 c c . . 
        . . . c c c c c c c c c c . . . 
        `
    redsnake_right_image = redsnake_left_image.clone()
    redsnake_right_image.flipX()
    redsnake = sprites.create(redsnake_right_image, SpriteKind.Player)
    controller.player2.moveSprite(redsnake, 100, 0)
    redsnake.ay = GRAVITY
}
function create_greensnake () {
    greensnake_left_image = img`
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
    greensnake_right_image = greensnake_left_image.clone()
    greensnake_right_image.flipX()
    greensnake = sprites.create(greensnake_left_image, SpriteKind.Player)
    controller.moveSprite(greensnake, 100, 0)
    greensnake.ay = GRAVITY
}
let greensnake_right_image: Image = null
let redsnake: Sprite = null
let redsnake_right_image: Image = null
let redsnake_left_image: Image = null
let greensnake_left_image: Image = null
let greensnake: Sprite = null
let projectile: Sprite = null
let green_jump_count = 0
let JUMP_SPEED = 0
let GRAVITY = 0
let BULLET_VX = 0
BULLET_VX = 100
GRAVITY = 250
JUMP_SPEED = -90
green_jump_count = 2
let red_jump_count = 2
scene.setBackgroundColor(10)
tiles.setTilemap(tilemap`level1`)
scene.centerCameraAt(60, 76)
create_greensnake()
create_redsnake()
game.onUpdate(function () {
    if (redsnake.isHittingTile(CollisionDirection.Bottom)) {
        red_jump_count = 0
    }
})
game.onUpdate(function () {
    if (greensnake.isHittingTile(CollisionDirection.Bottom)) {
        green_jump_count = 0
    }
})
game.onUpdate(function () {
    if (greensnake.vx < 0) {
        greensnake.setImage(greensnake_left_image)
    } else if (greensnake.vx > 0) {
        greensnake.setImage(greensnake_right_image)
    }
})
game.onUpdate(function () {
    if (redsnake.vx < 0) {
        redsnake.setImage(redsnake_left_image)
    } else if (redsnake.vx > 0) {
        redsnake.setImage(redsnake_right_image)
    }
})

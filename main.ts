namespace SpriteKind {
    export const a = SpriteKind.create()
    export const bac = SpriteKind.create()
    export const ll = SpriteKind.create()
    export const gt = SpriteKind.create()
    export const dfs = SpriteKind.create()
    export const pl = SpriteKind.create()
    export const ccacc = SpriteKind.create()
    export const dd = SpriteKind.create()
    export const mmm = SpriteKind.create()
    export const dfd = SpriteKind.create()
    export const b = SpriteKind.create()
    export const lol = SpriteKind.create()
    export const dddddd = SpriteKind.create()
    export const yjy = SpriteKind.create()
    export const kuk = SpriteKind.create()
    export const mode = SpriteKind.create()
    export const info = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dfd, function (sprite, otherSprite) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ll, function (sprite6, otherSprite6) {
    sprites.destroyAllSpritesOfKind(SpriteKind.ll)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mmm, function (sprite14, otherSprite14) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EvilDroneHp >= 1) {
        game.showLongText("Paused                                                                         Press A to continue                                                                                                                                                                     ", DialogLayout.Full)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (TimeControlMathPi >= 66 * Math.PI && TimeControlMathPi <= 69 * Math.PI) {
        s = sprites.create(assets.image`myImage0`, SpriteKind.gt)
        s.setVelocity(0, -100)
        s.setPosition(Droney.x, Droney.y)
    }
    if (TimeControlMathPi >= 130 * Math.PI && TimeControlMathPi <= 139 * Math.PI) {
        ss = sprites.create(assets.image`myImage0`, SpriteKind.pl)
        ss.setVelocity(0, -100)
        ss.setPosition(Droney.x, Droney.y)
    }
    if (TimeControlMathPi >= 232 * Math.PI && TimeControlMathPi <= 239 * Math.PI) {
        sss = sprites.create(assets.image`myImage0`, SpriteKind.b)
        sss.setVelocity(0, -100)
        sss.setPosition(Droney.x, Droney.y)
    }
    if (EvilDroneHp > 0 && 462 * Math.PI <= TimeControlMathPi) {
        if (t < 0) {
            t = 1
            mySprite8 = sprites.create(assets.image`myImage8`, SpriteKind.lol)
        } else {
            t = -1
            mySprite8 = sprites.create(assets.image`myImage8`, SpriteKind.yjy)
        }
        animation.runImageAnimation(
        mySprite8,
        assets.animation`myAnim12`,
        50,
        true
        )
        mySprite8.setPosition(Droney.x, Droney.y)
        mySprite8.setVelocity(0, -100)
    }
    bb = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite9, otherSprite9) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bac, function (sprite10, otherSprite10) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.yjy, SpriteKind.Enemy, function (sprite12, otherSprite12) {
    EvilDroneHp += -10
    sprites.destroyAllSpritesOfKind(SpriteKind.yjy)
})
sprites.onOverlap(SpriteKind.b, SpriteKind.Enemy, function (sprite8, otherSprite8) {
    sss.setVelocity(0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.b, effects.disintegrate, 500)
    c += 1
    if (c == 10) {
        animation.runImageAnimation(
        Evil_Drone,
        assets.animation`Drone2`,
        100,
        false
        )
        sprites.destroyAllSpritesOfKind(SpriteKind.ccacc)
        TimeControlMathPi = 250 * Math.PI
        pause(1500)
        color.startFadeFromCurrent(color.White, 1000)
        pause(1500)
        animation.runImageAnimation(
        Evil_Drone,
        assets.animation`Drone3`,
        100,
        true
        )
        color.startFadeFromCurrent(color.originalPalette, 1000)
        TimeControlMathPi = 300 * Math.PI
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.a, function (sprite2, otherSprite2) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.gt, SpriteKind.Enemy, function (sprite4, otherSprite4) {
    s.setVelocity(0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.gt, effects.disintegrate, 500)
    c += 1
    if (c == 10) {
        animation.runImageAnimation(
        Evil_Drone,
        assets.animation`Drone0`,
        150,
        true
        )
        sd = 1
        sprites.destroyAllSpritesOfKind(SpriteKind.ccacc)
        c = 0
        TimeControlMathPi = 70 * Math.PI
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dfs, function (sprite11, otherSprite11) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.lol, SpriteKind.Enemy, function (sprite3, otherSprite3) {
    EvilDroneHp += -10
    sprites.destroyAllSpritesOfKind(SpriteKind.lol)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dd, function (sprite5, otherSprite5) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
sprites.onOverlap(SpriteKind.pl, SpriteKind.Enemy, function (sprite7, otherSprite7) {
    ss.setVelocity(0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.pl, effects.disintegrate, 500)
    c += 1
    if (c == 10) {
        TimeControlMathPi = 140 * Math.PI
        animation.runImageAnimation(
        Evil_Drone,
        assets.animation`Drone1`,
        200,
        true
        )
        sprites.destroyAllSpritesOfKind(SpriteKind.ccacc)
        c = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ccacc, function (sprite13, otherSprite13) {
    if (0 != buff) {
        info.changeLifeBy(-1)
        buff = 0
        pause(500)
        buff = 1
    }
})
let mySprite13: Sprite = null
let credits: Sprite = null
let mySprite12: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let dx = 0
let dy = 0
let mySprite7: Sprite = null
let zcz: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let wa = 0
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let chase_bot = 0
let ab: Sprite = null
let aaaaa = 0
let _as = 0
let aaaa = 0
let aaa = 0
let mySprite: Sprite = null
let sas: Sprite = null
let bb = 0
let mySprite8: Sprite = null
let t = 0
let sss: Sprite = null
let ss: Sprite = null
let s: Sprite = null
let TimeControlMathPi = 0
let buff = 0
let c = 0
let Droney: Sprite = null
let EvilDroneHp = 0
let Evil_Drone: Sprite = null
let sd = 0
music.stopAllSounds()
music.setVolume(255)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`myImage1`)
game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
pauseUntil(() => controller.A.isPressed())
music.stopAllSounds()
music.setVolume(50)
music.play(music.createSong(assets.song`background`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`myImage10`)
color.setPalette(
color.originalPalette
)
sd = 0
Evil_Drone = sprites.create(assets.image`1`, SpriteKind.Enemy)
animation.runImageAnimation(
Evil_Drone,
assets.animation`Drone`,
100,
true
)
EvilDroneHp = 500
Evil_Drone.x = 80
Evil_Drone.y = 60
let mySprite11 = sprites.create(assets.image`1`, SpriteKind.kuk)
mySprite11.setPosition(75, 90)
Droney = sprites.create(assets.image`myImage`, SpriteKind.Player)
Droney.setPosition(75, 95)
controller.moveSprite(Droney, 100, 100)
animation.runImageAnimation(
Droney,
assets.animation`myAnim0`,
100,
true
)
c = 0
buff = 1
info.setLife(30)
TimeControlMathPi = 0 * Math.PI
let Pause = sprites.create(assets.image`myImage16`, SpriteKind.info)
Pause.setPosition(142, 112)
forever(function () {
    if (Droney.x < 0) {
        Droney.x = 0
    }
    if (Droney.x > 160) {
        Droney.x = 160
    }
    if (Droney.y < 0) {
        Droney.y = 0
    }
    if (Droney.y > 120) {
        Droney.y = 120
    }
    TimeControlMathPi += Math.PI * (1 / 30)
    if (TimeControlMathPi <= 461 * Math.PI) {
        Evil_Drone.setPosition(80, 60 + 20 * Math.sin(TimeControlMathPi))
    }
    if (12.5 < TimeControlMathPi && 12.6 > TimeControlMathPi) {
        sprites.destroyAllSpritesOfKind(SpriteKind.a)
        sas = sprites.create(assets.image`myImage8`, SpriteKind.a)
        animation.runImageAnimation(
        sas,
        assets.animation`myAnim`,
        175,
        true
        )
    }
    if (12.5 < TimeControlMathPi && 30 * Math.PI > TimeControlMathPi) {
        sas.setPosition(80, 62 + 20 * Math.sin(TimeControlMathPi))
    }
    if (TimeControlMathPi > 30 * Math.PI && TimeControlMathPi < 30.01 * Math.PI) {
        sprites.destroyAllSpritesOfKind(SpriteKind.a)
    }
    if (Math.sin(TimeControlMathPi * 5) == 1 && (TimeControlMathPi > 31 * Math.PI && TimeControlMathPi < 60 * Math.PI)) {
        mySprite = sprites.createProjectileFromSprite(assets.image`myImage5`, Evil_Drone, 0, -100)
        mySprite.setPosition(randint(0, 160), 120)
    }
    if (TimeControlMathPi >= 231 * Math.PI && TimeControlMathPi <= 231.04 * Math.PI || TimeControlMathPi >= 130 * Math.PI && TimeControlMathPi <= 130.04 * Math.PI || TimeControlMathPi >= 65 * Math.PI && TimeControlMathPi <= 65.04 * Math.PI) {
        game.showLongText("Press A to Attack!", DialogLayout.Center)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        Evil_Drone.setStayInScreen(true)
        aaa = randint(-15, 15)
    }
    if (TimeControlMathPi >= 66 * Math.PI && TimeControlMathPi <= 69 * Math.PI) {
        TimeControlMathPi = 66 * Math.PI
        aaaa = randint(-20, 20)
        Evil_Drone.setVelocity(0, 0)
        if (aaaa == -20) {
            aaa = randint(-15, 15)
        }
    }
    if (TimeControlMathPi >= 70 * Math.PI && (TimeControlMathPi <= 100 * Math.PI && Math.percentChance(5))) {
        sprites.destroyAllSpritesOfKind(SpriteKind.ccacc)
        _as = randint(-50, 50)
        aaaaa = randint(-50, 50)
        ab = sprites.create(assets.image`myImage8`, SpriteKind.Projectile)
        ab.setFlag(SpriteFlag.DestroyOnWall, true)
        if (_as <= 0) {
            ab.setVelocity(0 - Math.sqrt(_as * _as - aaaaa * aaaaa), aaaaa)
        } else {
            ab.setVelocity(Math.sqrt(_as * _as - aaaaa * aaaaa), aaaaa)
        }
        ab.vx += randint(-10, 10)
        ab.setFlag(SpriteFlag.AutoDestroy, true)
        ab.vy += randint(-10, 10)
    }
    if (chase_bot == 0 && TimeControlMathPi >= 101 * Math.PI) {
        chase_bot = 1
        mySprite2 = sprites.create(assets.image`myImage7`, SpriteKind.dfs)
        mySprite2.follow(Droney, 50)
    }
    if (TimeControlMathPi <= 130.1 * Math.PI) {
        sprites.destroyAllSpritesOfKind(SpriteKind.dfs)
    }
    if (TimeControlMathPi >= 131 * Math.PI && TimeControlMathPi <= 139 * Math.PI) {
        TimeControlMathPi = 131 * Math.PI
    }
    if (TimeControlMathPi >= 232 * Math.PI && TimeControlMathPi <= 239 * Math.PI) {
        TimeControlMathPi = 233 * Math.PI
    }
    if (TimeControlMathPi >= 250 * Math.PI && TimeControlMathPi <= 280 * Math.PI) {
        TimeControlMathPi = 250 * Math.PI
    }
    if (Math.percentChance(5) && (TimeControlMathPi >= 131 * Math.PI && TimeControlMathPi <= 139 * Math.PI || (TimeControlMathPi >= 232 * Math.PI && TimeControlMathPi <= 239 * Math.PI || TimeControlMathPi >= 66 * Math.PI && TimeControlMathPi <= 69 * Math.PI))) {
        mySprite3 = sprites.create(assets.image`ccacc`, SpriteKind.ccacc)
        mySprite3.x = randint(0, 160)
        mySprite3.setVelocity(0, 100)
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite3.y = 0
    }
    if (Math.percentChance(4) && (TimeControlMathPi >= 140 * Math.PI && TimeControlMathPi <= 170 * Math.PI)) {
        mySprite4 = sprites.create(assets.image`myImage2`, SpriteKind.dfd)
        mySprite4.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite4.setVelocity(75, 75)
        mySprite4.setPosition(0, randint(0, 160))
        if (Math.percentChance(50)) {
            mySprite4.setPosition(randint(0, 160), 0)
        }
    }
    if (1 == Math.sin(TimeControlMathPi / 2) && (TimeControlMathPi >= 171 * Math.PI && TimeControlMathPi <= 230 * Math.PI)) {
        wa = randint(1, 6)
        for (let index = 0; index < 5; index++) {
            mySprite5 = sprites.create(assets.image`1`, SpriteKind.dd)
            animation.runImageAnimation(
            mySprite5,
            assets.animation`myAnim2`,
            100,
            true
            )
            mySprite5.setPosition(-5, -1 + 20 * wa)
            mySprite5.setVelocity(100, 0)
            mySprite5.setFlag(SpriteFlag.DestroyOnWall, true)
            mySprite5.setFlag(SpriteFlag.AutoDestroy, true)
            wa += 1
            if (wa == 7) {
                wa = 1
            }
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.dfd)
    }
    if (TimeControlMathPi >= 171 * Math.PI && TimeControlMathPi <= 200 * Math.PI) {
        sprites.destroyAllSpritesOfKind(SpriteKind.dfd)
    }
    if (TimeControlMathPi >= 304 * Math.PI && TimeControlMathPi <= 304.04 * Math.PI) {
        mySprite6 = sprites.create(assets.image`myImage8`, SpriteKind.a)
        animation.runImageAnimation(
        mySprite6,
        assets.animation`myAnim4`,
        100,
        true
        )
        zcz = sprites.create(assets.image`myImage8`, SpriteKind.a)
        animation.runImageAnimation(
        zcz,
        assets.animation`myAnim10`,
        100,
        true
        )
    }
    if (304 * Math.PI < TimeControlMathPi && 340 * Math.PI > TimeControlMathPi) {
        mySprite6.setPosition(80, 60)
        zcz.setPosition(80, 60)
        if (Droney.x < mySprite6.x) {
            Droney.x += 1
        }
        if (Droney.x > mySprite6.x) {
            Droney.x += -1
        }
        if (Droney.y < mySprite6.y) {
            Droney.y += 1
        }
        if (Droney.y > mySprite6.y) {
            Droney.y += -1
        }
    } else if (340 * Math.PI < TimeControlMathPi && 340.04 * Math.PI > TimeControlMathPi) {
        sprites.destroyAllSpritesOfKind(SpriteKind.a)
    }
    if (340 * Math.PI < TimeControlMathPi && 380 * Math.PI > TimeControlMathPi && 1 == Math.sin(TimeControlMathPi)) {
        for (let index = 0; index < 2; index++) {
            mySprite7 = sprites.create(assets.image`myImage8`, SpriteKind.Projectile)
            animation.runImageAnimation(
            mySprite7,
            assets.animation`myAnim5`,
            75,
            true
            )
            mySprite7.setVelocity(100, randint(0, 5))
            mySprite7.x = 0
            mySprite7.y = randint(0, 120)
            mySprite7.setFlag(SpriteFlag.AutoDestroy, true)
        }
        mySprite7.x = 160
        mySprite7.setVelocity(-100, randint(0, 5))
    }
    if (380 * Math.PI < TimeControlMathPi && 420 * Math.PI > TimeControlMathPi && 1 == Math.sin(TimeControlMathPi)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        mySprite7 = sprites.create(assets.image`myImage8`, SpriteKind.ccacc)
        animation.runImageAnimation(
        mySprite7,
        assets.animation`myAnim6`,
        50,
        true
        )
        mySprite7.setVelocity(-100, randint(0, 5))
        mySprite7.x = 160
        mySprite7.y = randint(0, 120)
        mySprite7.setFlag(SpriteFlag.AutoDestroy, true)
        mySprite7 = sprites.create(assets.image`myImage8`, SpriteKind.ccacc)
        animation.runImageAnimation(
        mySprite7,
        assets.animation`myAnim6`,
        50,
        true
        )
        mySprite7.setVelocity(100, randint(0, 5))
        mySprite7.x = 0
        mySprite7.y = randint(0, 120)
        mySprite7.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (4 * Math.PI < TimeControlMathPi && 0 <= EvilDroneHp && Math.percentChance(0.1)) {
        if (info.life() < 30) {
            sprites.destroyAllSpritesOfKind(SpriteKind.ll)
            mySprite7 = sprites.create(assets.image`myImage8`, SpriteKind.ll)
            animation.runImageAnimation(
            mySprite7,
            assets.animation`myAnim7`,
            50,
            true
            )
            mySprite7.x = randint(0, 160)
            mySprite7.y = randint(0, 120)
            mySprite7.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
    if (421 * Math.PI < TimeControlMathPi && 460 * Math.PI > TimeControlMathPi && Math.percentChance(10)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        mySprite7 = sprites.create(assets.image`myImage8`, SpriteKind.mmm)
        animation.runImageAnimation(
        mySprite7,
        assets.animation`myAnim9`,
        50,
        true
        )
        mySprite7.setVelocity(randint(-10, 10), 150)
        mySprite7.x = randint(0, 160)
        mySprite7.y = 0
        mySprite7.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (461 * Math.PI <= TimeControlMathPi && 461.03 * Math.PI >= TimeControlMathPi) {
        EvilDroneHp = 500
        dy = Droney.y
        dx = Droney.x
        controller.moveSprite(Droney, 0, 0)
        Evil_Drone.setStayInScreen(false)
        scene.centerCameraAt(Droney.x, Droney.y)
        Evil_Drone.setVelocity(0, 0)
        Evil_Drone.x += Evil_Drone.x - Droney.x
        Evil_Drone.y += Evil_Drone.y - Droney.y
        scaling.scaleByPercent(mySprite11, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleByPercent(Evil_Drone, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleByPercent(Droney, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        animation.runImageAnimation(
        Droney,
        assets.animation`myAnim11`,
        100,
        false
        )
        animation.runImageAnimation(
        mySprite11,
        assets.animation`myAnim13`,
        100,
        true
        )
        pause(14600)
        scaling.scaleByPercent(Droney, -100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        scaling.scaleByPercent(Evil_Drone, -100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        controller.moveSprite(Droney, 100, 100)
        Evil_Drone.y += (Droney.y - Evil_Drone.y) / 2
        Evil_Drone.x += (Droney.x - Evil_Drone.x) / 2
        sprites.destroyAllSpritesOfKind(SpriteKind.kuk)
        scene.centerCameraAt(80, 60)
        game.showLongText("PRESS A TO USE MEGA_ATTACK!!!!!!!!!!!!!!!!", DialogLayout.Center)
        mySprite9 = sprites.create(assets.image`myImage12`, SpriteKind.dddddd)
        mySprite10 = sprites.create(assets.image`myImage13`, SpriteKind.dddddd)
        mySprite9.setPosition(80, 30)
        mySprite10.setPosition(30 + EvilDroneHp / 10, 30)
        scaling.scaleToPixels(mySprite10, 55, ScaleDirection.Horizontally, ScaleAnchor.Left)
        EvilDroneHp = 500
    }
    if (EvilDroneHp > 0) {
        if (461 * Math.PI < TimeControlMathPi) {
            mySprite10.setPosition(55 + EvilDroneHp / 20, 30)
            scaling.scaleToPixels(mySprite10, 5 + EvilDroneHp / 10, ScaleDirection.Horizontally, ScaleAnchor.Left)
            if (Math.percentChance(10)) {
                mySprite12 = sprites.create(assets.image`1`, SpriteKind.ccacc)
                animation.runImageAnimation(
                mySprite12,
                assets.animation`myAnim14`,
                50,
                true
                )
                mySprite12.setPosition(randint(0, 160), 0)
                mySprite12.setVelocity(0, 150)
                mySprite12.setFlag(SpriteFlag.AutoDestroy, true)
            }
        } else {
            mySprite11.setPosition(Droney.x, Droney.y)
        }
    }
    if (EvilDroneHp <= 0 && EvilDroneHp > -5) {
        scene.cameraShake(4, 2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.dddddd)
        sprites.destroyAllSpritesOfKind(SpriteKind.yjy)
        sprites.destroyAllSpritesOfKind(SpriteKind.lol)
        animation.runImageAnimation(
        Evil_Drone,
        assets.animation`Drone4`,
        100,
        false
        )
        credits = sprites.create(assets.image`myImage15`, SpriteKind.Player)
        credits.setPosition(80, 100)
        pause(4500)
        mySprite13 = sprites.create(assets.image`myImage14`, SpriteKind.Player)
        mySprite13.setPosition(80, 20)
        sprites.destroy(Evil_Drone)
        EvilDroneHp = -6
        animation.runImageAnimation(
        Droney,
        assets.animation`myAnim15`,
        100,
        false
        )
        color.setColor(12, color.rgb(255, 255, 0))
        scene.setBackgroundImage(assets.image`myImage3`)
        Evil_Drone.setPosition(80, 20)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
    }
})

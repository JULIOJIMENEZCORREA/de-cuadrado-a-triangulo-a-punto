basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.showLeds(`
        . # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        # . . . #
        # # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . . #
        # # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # . #
        . # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . # . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . #
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
    basic.pause(1000)
})

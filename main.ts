basic.forever(function () {
    if (input.temperature() == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (input.temperature() == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (input.temperature() == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (input.temperature() == 4) {
        basic.showLeds(`
            . # . . .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (input.temperature() == 5) {
        basic.showLeds(`
            . # # . .
            . # . . .
            . # # . .
            . . # . .
            . # # . .
            `)
    } else if (input.temperature() == 6) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (input.temperature() == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (input.temperature() == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (input.temperature() == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (input.temperature() == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (input.temperature() == 11) {
        basic.showLeds(`
            . # . # .
            # # # # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (input.temperature() == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (input.temperature() == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (input.temperature() == 14) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # . # # #
            # . . # .
            # . . # .
            `)
    } else {
        basic.showLeds(`
            # . # # .
            # . # . .
            # . # # .
            # . . # .
            # . # # .
            `)
    }
    if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) < 50) {
        BitCar.move(0, 0)
        BitCar.move(-40, -40)
        basic.pause(500)
        BitCar.move(30, 0)
        basic.pause(100)
        if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) < 50) {
            BitCar.move(-40, -40)
            basic.pause(500)
            BitCar.move(0, 30)
            basic.pause(100)
        }
    } else {
        BitCar.move(60, 60)
    }
})

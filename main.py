def on_forever():
    if input.temperature() == 1:
        basic.show_leds("""
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            """)
    elif input.temperature() == 2:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            """)
    elif input.temperature() == 3:
        basic.show_leds("""
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif input.temperature() == 4:
        basic.show_leds("""
            . # . . .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            """)
    elif input.temperature() == 5:
        basic.show_leds("""
            . # # . .
            . # . . .
            . # # . .
            . . # . .
            . # # . .
            """)
    elif input.temperature() == 6:
        basic.show_leds("""
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif input.temperature() == 7:
        basic.show_leds("""
            . # # # .
            . . . # .
            . . # . .
            . . # . .
            . . # . .
            """)
    elif input.temperature() == 8:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
    elif input.temperature() == 9:
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . # # # .
            """)
    elif input.temperature() == 10:
        basic.show_leds("""
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            """)
    else:
        basic.show_leds("""
            . # . # .
            # # # # .
            . # . # .
            . # . # .
            . # . # .
            """)
    if BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.CM) < 30:
        BitCar.move(0, 0)
        BitCar.move(-40, -40)
        basic.pause(500)
        BitCar.move(30, 0)
        basic.pause(100)
        if BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.CM) < 30:
            BitCar.move(-40, -40)
            basic.pause(500)
            BitCar.move(0, 30)
            basic.pause(100)
    else:
        BitCar.move(60, 60)
basic.forever(on_forever)

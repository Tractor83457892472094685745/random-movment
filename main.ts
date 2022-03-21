basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (randint(1, 13) == 1) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, randint(50, 255))
        basic.pause(1000)
    }
    if (randint(1, 13) == 2) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, randint(50, 255))
        basic.pause(1000)
    }
    if (randint(1, 13) == 3) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, randint(50, 255))
        basic.pause(1000)
    }
    if (randint(1, 13) == 4) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, randint(50, 255))
        basic.pause(1000)
    }
    if (randint(1, 13) == 5) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, randint(50, 255))
        basic.pause(1000)
    }
    if (randint(1, 13) == 6) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
        basic.pause(1000)
    }
    if (randint(1, 13) == 7) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        basic.pause(1000)
    }
    if (randint(1, 13) == 8) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
        basic.pause(1000)
    }
    if (randint(1, 13) == 9) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        basic.pause(1000)
    }
    if (randint(1, 13) == 10) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
        basic.pause(1000)
    }
    if (randint(1, 13) == 11) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
        basic.pause(1000)
    }
    if (randint(1, 13) == 12) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        basic.pause(1000)
    }
    if (randint(1, 13) == 13) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, randint(50, 255))
        basic.pause(1000)
    }
})

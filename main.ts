let Random_A = 0
let Timer_A = 0
let Timer_B = 0
let Flash = 0
input.onButtonPressed(Button.A, function () {
    Random_A = randint(1, 10)
    basic.showNumber(Random_A)
    for (let index = 0; index < Random_A; index++) {
        Timer_A = Timer_A + 1
        basic.showNumber(Timer_A)
        basic.pause(1000)
    }
    Timer_B = 0
    Display_LED()
})
function Display_LED () {
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    Flash = 1
    while (Flash == 1) {
        Timer_B += 1
        basic.pause(1)
    }
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Flash = 0
    basic.pause(1000)
    basic.showString("" + (Timer_B))
    basic.showString("ms")
})

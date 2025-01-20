input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
    play()
})

let gameRunning = false
let startTime = 0

function play() {
    basic.pause(randint(3000, 6000))
    startTime = control.millis();
    gameRunning = true
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
}

Sensors.OnLightDrop(function () {
    console.log(control.millis() - startTime)
    gameRunning = false
    play()
})

basic.forever(function () {
    //if (gameRunning = false && ) {
    //    basic.showIcon(IconNames.Sad)
    //}
})
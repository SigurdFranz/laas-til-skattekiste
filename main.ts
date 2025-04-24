radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3241) {
        Lås_åpen()
        Glys_på()
    } else if (receivedNumber < 3241) {
        Rlys_på()
        basic.pause(2000)
        Rlys_av()
    } else if (receivedNumber > 3241) {
        Rlys_på()
        basic.pause(2000)
        Rlys_av()
    }
})
function Glys_av () {
    pins.digitalWritePin(DigitalPin.P13, 0)
}
input.onButtonPressed(Button.A, function () {
    Lås_åpen()
    Glys_på()
    Rlys_på()
    basic.pause(5000)
    Glys_av()
    Rlys_av()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hei") {
        Lås_låst()
        Glys_på()
        Rlys_på()
        basic.pause(5000)
        Glys_av()
        Rlys_av()
    }
})
input.onButtonPressed(Button.B, function () {
    Lås_låst()
    Glys_av()
    Rlys_av()
})
function Rlys_av () {
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function Lås_åpen () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function Lås_låst () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function Glys_på () {
    pins.digitalWritePin(DigitalPin.P13, 1)
}
function Rlys_på () {
    pins.digitalWritePin(DigitalPin.P14, 1)
}
basic.showIcon(IconNames.Heart)
radio.setGroup(125)
Glys_på()
Rlys_på()
basic.pause(2000)

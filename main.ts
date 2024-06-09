radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1337) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (receivedNumber != 1337) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
})
basic.showIcon(IconNames.Heart)
radio.setGroup(125)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)

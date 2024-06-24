input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("un sourire !")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Chessboard)
})
radio.setGroup(2)

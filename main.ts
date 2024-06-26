input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("un sourire !")
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
})
input.onButtonPressed(Button.AB, function () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
    Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
    Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    if (receivedString == "A") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 20)
    } else {
        if (receivedString == "R") {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 20)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    radio.sendString("un sourire !")
    basic.clearScreen()
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 180)
})
radio.setGroup(1)

radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    if (receivedString == "R") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 0)
        basic.showString("R")
    } else {
        if (receivedString == "A") {
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
            Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
            basic.showString("A")
            Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
            Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        } else {
            if (receivedString == "S") {
                Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
                Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
                basic.showString("S")
                Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
                Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
                Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
                Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
            } else {
            	
            }
        }
    }
})
radio.setGroup(1)

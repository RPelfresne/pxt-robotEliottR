def on_button_pressed_a():
    basic.clear_screen()
    radio.send_string("un sourire !")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_icon(IconNames.HAPPY)
radio.on_received_string(on_received_string)

def on_gesture_shake():
    basic.show_icon(IconNames.CHESSBOARD)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

radio.set_group(2)
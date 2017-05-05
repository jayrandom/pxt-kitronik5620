
enum KTMotor {
    //% block="the left motor"
    Left,
    //% block="the right motor"
    Right,
    //% block="both motors"
    Both
}


enum KTMotorDirection {
    //% block="go forward"
    Forward,
    //% block="go in reverse"
    Reverse,
    //% block="stop running"
    Stop
}


/**
 * Custom blocks
 */
//% color=#0fbc11 icon="\uf1b9"
namespace motors {

    /**
      * Drive a motor forward, in reverse or stop
      *
      * @param motor motor to drive
      * @param direction of motor
      */
    //% blockId="drive_kitronik_motor" block="make %motor| %direction"
    export function drive(motor: KTMotor, direction: KTMotorDirection): void {
        if ((motor == KTMotor.Left) || (motor == KTMotor.Both)) {
            pins.digitalWritePin(DigitalPin.P12, (direction == KTMotorDirection.Forward) ? 1 : 0);
            pins.digitalWritePin(DigitalPin.P8,  (direction == KTMotorDirection.Reverse) ? 1 : 0);
        }

        if ((motor == KTMotor.Right) || (motor == KTMotor.Both)) {
            pins.digitalWritePin(DigitalPin.P16, (direction == KTMotorDirection.Forward) ? 1 : 0);
            pins.digitalWritePin(DigitalPin.P0,  (direction == KTMotorDirection.Reverse) ? 1 : 0);
        }
    }
}

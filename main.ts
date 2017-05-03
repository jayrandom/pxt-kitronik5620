
/**
  * Enumeration of motors
  */
enum KTMotor {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="both"
    Both
}

/**
  * Enumeration of motor directions
  */
enum KTMotorDirection {
    //% block="forward"
    Forward,
    //% block="reverse"
    Reverse,
    //% block="stop"
    Stop
}


/**
 * Custom blocks
 */
//% color=#0fbc11 icon="\uf1b9"
namespace kitronik5620 {

    /**
      * Drive a motor forward, in reverse or stop
      *
      * @param motor motor(s) to drive
      * @param direction of motor(s)
      */
    //% blockId="kitronik_motor" block="drive the %motor motor in direction %direction"
    export function motor(motor: KTMotor, direction: KTMotorDirection): void {
        if( (motor == KTMotor.Left) || (motor == KTMotor.Both)) {
            pins.digitalWritePin(DigitalPin.P12, (direction == KTMotorDirection.Forward)? 1 : 0);
            pins.digitalWritePin(DigitalPin.P8,  (direction == KTMotorDirection.Reverse)? 1 : 0);
        }

        if ((motor == KTMotor.Right) || (motor == KTMotor.Both)) {
            pins.digitalWritePin(DigitalPin.P16, (direction == KTMotorDirection.Forward)? 1 : 0);
            pins.digitalWritePin(DigitalPin.P0,  (direction == KTMotorDirection.Reverse)? 1 : 0);
        }
    }
}

# kitronik5620

A Kitronik 5620 motor driver package for pxt-microbit.

## Description

Adds a new "Motors" category with a "drive" or "make" block to control one or both motors connected to the [Kitronik-5620 board](https://www.kitronik.co.uk/pdf/5620%20Motor%20Driver%20Board%20V1.1-2.pdf).
The same package also works with robots based on Kitronik-5620, for example, [BoBBot](https://bobbot.co.uk/).

## Usage example

```javascript
basic.forever(() => {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        motors.drive(KTMotor.Right, KTMotorDirection.Forward)
        led.plot(0, 0)
    } else {
        motors.drive(KTMotor.Right, KTMotorDirection.Stop)
        led.plot(0, 2)
    }
    if (input.buttonIsPressed(Button.B)) {
        motors.drive(KTMotor.Left, KTMotorDirection.Forward)
        led.plot(4, 0)
    } else {
        motors.drive(KTMotor.Left, KTMotorDirection.Stop)
        led.plot(4, 2)
    }
    basic.pause(100)
})
```

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


{
  // Drive 500 ms forward
  motors.drive(KTMotor.Both, KTMotorDirection.Forward);
  basic.pause(500);

  // Turn Right for 300 ms
  motors.drive(KTMotor.Left, KTMotorDirection.Forward);
  motors.drive(KTMotor.Right, KTMotorDirection.Stop);
  basic.pause(300);

  // Drive 700 ms reverse
  motors.drive(KTMotor.Both, KTMotorDirection.Reverse);
  basic.pause(700);
}

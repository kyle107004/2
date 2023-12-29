let IR = 0
BitIR.IR_callbackUserV2(function (message) {
    if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Up)) {
        IR = 1
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Down)) {
        IR = 2
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Left)) {
        IR = 3
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Right)) {
        IR = 4
    } else if (message == BitIR.IR_KeyValue(BitIR.enIRButton.Beep)) {
        IR = 5
    }
})
basic.forever(function () {
    if (IR == 1) {
        IR = 0
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    } else if (IR == 2) {
        IR = 0
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    } else if (IR == 3) {
        IR = 0
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    } else if (IR == 4) {
        IR = 0
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    } else if (IR == 5) {
        IR = 0
        mbit_小車類.CarCtrlSpeed(mbit_小車類.CarState.Car_Run, 150)
    }
})

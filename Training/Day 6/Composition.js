const motor = {
    accelerate(motorSpeed, incrementSpeed) {
        return motorSpeed * incrementSpeed;
    },

    decelerate(motorSpeed, decrementSpeed) {
        return motorSpeed * decrementSpeed;
    }

};

const stopMotor = {
    stop(motorSpeed) {
        this.motorSpeed = 0;
        return 0;
    }
};
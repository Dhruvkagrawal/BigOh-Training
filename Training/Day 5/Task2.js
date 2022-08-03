class IOTInverterBattery {

    constructor(batteryName, current, operatingVoltage, solar) {
        this.batteryName = batteryName;
        this.current = current;
        this.operatingVoltage = operatingVoltage;
        this.solar = solar
    }

    powerRating() {
        this.power = this.current * this.operatingVoltage;
        return this.power;
    }

    isSolarPanels() {
        if (this.solar === true) {
            this.solarPanels = true;
        } else {
            this.solarPanels = false;
        };
        return this.solarPanels
    };

    isBatteryRequired () {
        if (this.batteryName === "PCU") {
            this.BattryRequired = true
        }else{
            this.BattryRequired = false
        }
        return this.BattryRequired;
    }
};

let pcuBattery = new IOTInverterBattery("PCU", 2.4, 240, true);
let gtiBattery = new IOTInverterBattery("GTI", 3, 3, true);
let zelioBattery = new IOTInverterBattery("Zelio", 4, 4, false);
let regaliaBattery = new IOTInverterBattery("Regalia", 5, 5, true);
let icruzeBattery = new IOTInverterBattery("Icruze", 6, 6, false);

console.log("PCU", pcuBattery);
console.log(pcuBattery.powerRating());
console.log(pcuBattery.isSolarPanels());
console.log(pcuBattery.isBatteryRequired());
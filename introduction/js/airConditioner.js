class AirConditioner{
    constructor(){
        this.isOn = false;
        this.temperature = 25;
    }
    

    turnOn(){
        this.isOn = true;
    }

    turnOff(){
        this.isOn = false;
    }

    setTemperature(newTemp){
        if(this.isOn){
            this.temperature = newTemp;
        }else {
            console.log("Please turn on the air conditioner first");
        }
    }

    getTemperature(){
        return this.temperature;
    }


}

module.exports = AirConditioner;
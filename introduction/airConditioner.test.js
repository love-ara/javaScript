let AirConditioner = require("./airConditioner.js")

describe("Airconditioner", ()=> {
let ac;

beforeEach(() =>{
    ac = new AirConditioner();
});

it("should turn on the air conditioner", ()=> {
    ac.turnOn();
    expect(ac.isOn).toBe(true);
});

it("should turn off the air conditioner", ()=> {
    ac.turnOn();
    ac.turnOff();
    expect(ac.isOn).toBe(false);
});

it("should set the temperature", () => {
    ac.turnOn();
    ac.setTemperature(22);
    expect(ac.temperature).toBe(22);
});

it("should not set temperature if the Ac is off", ()=> {
    ac.setTemperature(20);
    expect(ac.temperature).toBe(25);
});
     
it("should get the current temperature", ()=> {
    ac.turnOn();
    ac.setTemperature(23);

    expect(ac.getTemperature()).toBe(23);
});
});
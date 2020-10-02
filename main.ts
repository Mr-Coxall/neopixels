// Created By: Mr. Coxall
// Created on: Sept 2020
// 
// This program lights up Neopixels on a Robot:Bit
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
})

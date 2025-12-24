let temp = 0
basic.showString("Remote")
radio.setGroup(42)
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    radio.sendNumber(temp)
    basic.pause(2000)
})

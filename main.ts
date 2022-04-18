let displej = 5
while (true) {
    for (let x = 0; x < displej; x++) {
        for (let y = 0; y < displej; y++) {
            led.plot(x, y)
        }
        basic.pause(200)
        basic.clearScreen()
    }
}

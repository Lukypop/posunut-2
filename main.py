displej = 5
while True:
    for x in range(displej):
        for y in range (displej):
            led.plot(x, y)
        basic.pause(200)
        basic.clear_screen()
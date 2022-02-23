import qiskit
import random
import eel


eel.init('hackathonGame')

@eel.expose
def ran():
    return random.randint(0, 100)
    
eel.start('main.html')
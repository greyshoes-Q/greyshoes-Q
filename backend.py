import qiskit
import random
import eel

n=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
print(len(n))

eel.init('hackathonGame')

def print_js(x,y,z):
    n[z] = (x,y)

@eel.expose
def ran():
    return random.randint(1, 16)

# def ran(x):
#     print(x)

# eel.hello()(ran)
    
eel.start('main.html')
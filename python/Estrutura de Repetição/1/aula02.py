import time
contador = -5
while contador <100:
    contador = contador + 5
    time.sleep(0.02)
    print(contador)
else:
    print("Estão aí os número de 0 a 100, contando de 5 em 5")

count = 1
resultado =  5
while (count <= 10):
    print(f"5 x {count} = {resultado * count }")
    count = count + 1
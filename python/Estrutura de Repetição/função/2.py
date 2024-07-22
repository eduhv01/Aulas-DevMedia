numero = int(input("Digite um número inteiro positivo: "))

if numero < 0:
    print("Por favor, digite um número inteiro positivo.")
else:
    for i in range(numero, -1,-1):
        print(i)

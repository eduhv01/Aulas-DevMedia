while 'entrada':
    usuario = input("Digite algo, se quiser sair digite 'sair': ")
    if usuario.lower() == 'sair':
        print("Adeus")
        break
    else:
        print(f"{usuario}")

quem_vai_para_a_praia = ["edu", "joão", "will", "guilherme", "luciano"]
print(f"Essas são as pessoas que vão para a praia {quem_vai_para_a_praia}")
print("Porem mais uma pessoa quer ir, adicione ela")
mais_um = input("Digite aqui o nome dela: ")
quem_vai_para_a_praia.append(mais_um)
print(f"Essas são as pessoas que vão para a praia: {quem_vai_para_a_praia}")
adicionar = input("Gostaria de adicionar mais alguém? digite S ou N caso queira: ").lower()

while adicionar == 's':
    mais_um = input("Digite aqui o nome dela: ")
    quem_vai_para_a_praia.append(mais_um)
    print(f"Essas são as pessoas que vão para a praia: {quem_vai_para_a_praia}")
    adicionar = input("Gostaria de adicionar mais alguém? Digite S ou N: ").lower()
if adicionar == 'n':
      print(f"Adição finalizada, essa é a lista atual {quem_vai_para_a_praia}")
else:
    print("Resposta inválida")

    

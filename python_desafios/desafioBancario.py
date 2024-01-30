
menu = """

[d] Depósito
[s] Saque
[e] Extrato
[q] Sair

=> """
print()

saldo = 0
limite = 500
extrato = ""
numero_saques = 0
LIMITE_SAQUES = 3

while True:

    opcao = input(menu)

    if opcao == "d":
        deposito = float(input("Informe o valor do depósito: "))

        if deposito > 0:
            saldo += deposito
            extrato += f"Depósito: R$ {deposito:.2f}\n"

        else:
            print("Operação falhou! O valor informado é inválido.")


    elif opcao == "s":
        saque = float(input("Informe o valor do saque: "))

        saldo_insuficiente = saque > saldo
        passou_limite = saque > limite
        excedou_saques = numero_saques >= LIMITE_SAQUES

        if saldo_insuficiente:
            print("Operação falhou! Você não possui saldo suficiente.")

        elif passou_limite:
            print("Operação falhou! O valor do saque excede o limite")
        
        elif excedou_saques:
            print("Operação falhou! Número máximp de saques excedido.")

        elif saque > 0:
            saldo -= saque
            extrato += f"Saque: R$ {saque:.2f}\n"
            numero_saques += 1

        else:
            print("Operação falhou! O valor informado é inválido.")

    elif opcao == "e":
        print("\n=============== EXTRATO ===============")
        print("Não foram realizadas movimentações." if not extrato else extrato)
        print(f"\nSaldo: R$ {saldo:.2f}")
        print("========================================")

    elif opcao == "q":
        break

    else:
        print("Operação inválida, por fvor selecione novamente a operação desejada.")

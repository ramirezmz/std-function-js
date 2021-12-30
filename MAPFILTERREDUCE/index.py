def apply(num, f):
    return f(num)

def double(num):
    return num * 2
# funciones lambda servem para uma linha de codigo
print(apply(5, lambda num: 2 * num))

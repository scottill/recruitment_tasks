def sum_even_numbers(array):
    sumEven = sum(num for num in array if not num % 2)
    if sumEven == 0:
        return 'array either empty or has no even numbers'
    return sumEven 



list = [2,3,4]
print(sum_even_numbers(list))

first_integer = int(input("Enter An Integer: "))
second_integer = int(input("Enter An Integer: "))
third_integer =  int(input("Enter An Integer: "))

sum_of_integers = first_integer+ second_integer+third_integer

average = sum_of_integers /3

product = first_integer * second_integer*third_integer

smallest=first_integer
largest=first_integer

if second_integer > largest:
    largest=second_integer 
elif third_integer>largest:
    largest=third_integer

if second_integer < smallest:
    smallest=second_integer
elif third_integer>smallest:
    smallest=third_integer 

print(f"the sumof integers are {sum_of_integers} average is {average} product is {product} the smallest is {smallest} and largest {largest}")

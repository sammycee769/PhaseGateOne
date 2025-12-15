def is_largest(numbers):
    largest = numbers[0] 

    for count in numbers:
        if count > largest:
            largest = count
    return(largest)

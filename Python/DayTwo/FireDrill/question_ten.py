def is_largest_is_smallest(numbers):
    largest = numbers[0] 
    smallest = numbers[0]

    for count in numbers:
        if count > largest:
            largest = count
        if count < smallest:
            smallest = count
    return(largest,smallest)

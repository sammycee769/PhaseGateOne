def is_smallest(numbers):
    smallest = numbers[0] 

    for count in numbers:
        if count < smallest:
            smallest = count
    return(smallest)

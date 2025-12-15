def reverse (numbers):
new_array=[]
     for count in range(len(numbers),0):
          new_array[count]=number%10;
          number/=10;
    return new_array

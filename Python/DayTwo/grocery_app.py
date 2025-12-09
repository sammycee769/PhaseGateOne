menu = """
        1. Add item
        2. Remove Item
        3. Show All Available Items.
        0. Exit

"""
items =[]

print(menu)
while(True):
    menu_option = int(input("Enter an option: "))
    match menu_option:
        case 1:
            while(True):
    #            print("What items do you wish to add: ")
                options = input("What items do you wish to add: ")
                items.append(options)
                print("Added Successfully")
                print(menu)
                break
#            if len(items) == 0:
#                    
#                break
#        
        case 2:
            while(True):
                option_two = input("What items do you wish to remove: ")
                if option_two not in items:
                    print("invalid")
                    break
                items.remove(option_two)
                print("Removed Successfully")
                print(menu)
                break
                
        case 3:
            while(True):
                for item in items:
                    print(item)
                print(menu)
                break 
        case 0:
            print("Exiting.........")
            break
        case _:
            print("Enter A valid Option")

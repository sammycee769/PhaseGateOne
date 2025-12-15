user_input=input("Enter input: ").lower()
if user_input == "saturday" or "sunday":
    print("Weekend")
elif user_input == "monday" or "tuesday" or "wednesday" or "thursday" or "friday":
    print("Weekday")
else:
    print("invalid option")

#If n is odd, print Weird
#If n is even and in the inclusive range of 2 to 5, print Not Weird
#If n is even and in the inclusive range of 6 to 20, print Weird
#If n is even and greater than 20, print Not Weird
def hello(n):
    if n % 2 != 0 or n % 2 == 0 and n>6 and n<20:
        print('wierd')
    elif n % 2 == 0 and n>2 and n<5 or n % 2 == 0 and n>20:
        print('not wierd')
    else:
        print('wierd and not wierd')
hello(int(input('Enter a number: ')))
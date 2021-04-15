import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('192.168.1.33', 80))

while True:
    msg = s.recv(4837)
    print(len(msg))
    print(msg.decode('utf-8'))
    exit()
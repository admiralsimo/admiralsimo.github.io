import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('0.0.0.0', 80))
s.listen(3)

while True:
  clientsocket, address = s.accept()
  print(f"Connection from {address}  has been established!")
  clientsocket.send(bytes('testtesttest', "utf-8"))
  clientsocket.send(bytes("Welcome to the server!", "utf-8"))
  clientsocket.close()
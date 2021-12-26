# Instruction to run
    1. Download or clone the app
    2. open index.html file in a browser.

# Input params for URL
- name: Name of the user
- image: URL of the profile image
- phone: Phone Number
- email: Email Id

> **_NOTE:_** The URL must be in an encoded form.

# Example
## Suppose an user with input params and base url to be 'localhost:5500'
    name = Md Ahsan Raza
    image = https://picsum.photos/400/400?random=1
    phone = 900999009090
    email = ahsan007raza@gmail.com

Encoded URL Must be = __http://localhost:5500?name=Md%20Ahsan%20Raza&image=https%3A%2F%2Fpicsum.photos%2F400%2F400%3Frandom%3D1&phone=900999009090&email=ahsan007raza%40gmail.com__

> Tool to help encode URL : https://www.345tool.com/generator/query-string-generator
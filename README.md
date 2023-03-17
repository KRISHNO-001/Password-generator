# Password-generator

Generates random password based on input parameters (uppercase,lowercase,number,symbols) and the length given by the user 

 Use of Math.Random() and helper functions to generate random Uppercase , lowercase , Numbers and symbols required to generate the password ,
 then a shuffler function  is used on top of it to shuffle the generated password , to make the password genetared in the order of selected parameters by user shuffled. 
 
 There is strength indicator that shows the strength of the generated password by changing to different colors(green is the strongest) 
 also a copy button to copy the generated password to the clipboard
 
 No frontend framework used 
 
 #corner case handle
 
 if the #selected  parameters is more than the length of the password which is not possible, slider sets to the length equal to the number of 
 parameters selected by user.
 
 UI Demo
 
[pass gen demo.webm](https://user-images.githubusercontent.com/84618879/225933322-cfdbb9e3-6687-44c3-b1c4-fca8bff586b3.webm)

/*------------------------  Chapters 21-25  --------------------------------*/
/*------------------------  String Methods  ----------------------------------*/

/*
//Question 01
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
var fullName = firstName + " " + lastName;
alert("Assalam-o-aikum "+ fullName);



//Question 02
var phn = prompt("Enter your favorite mobile phone model: ");
var len = phn.length;
document.write("My favorite phone is: "+phn+"<br>");
document.write("Length of string is: "+len);



//Question 03
var word = "Pakistani";
var indexof=word.indexOf("n");
document.write("String: "+word+"<br>");
document.write("Index of 'n' is: "+indexof);



//Question 04
var word = "Hello World";
var lindexof=word.lastIndexOf("l");
document.write("String: "+word+"<br>");
document.write("Last Index of 'l' is: "+lindexof);



//Question 05
var word = "Pakistani";
var ch = word.charAt(3);
document.write("String: "+word+"<br>");
document.write("Character at  Index 3 is: "+ch);


//Question 06
var firstName = prompt("Enter your First Name: ");
var lastName = prompt("Enter your Last Name: ");
var fullName = firstName.concat(" ",lastName);
alert("Assalam-o-aikum "+ fullName);



//Question 07
var word = "Hyderabad"
var c = word.indexOf("Hyder");
var word1 =word.slice(0,c)+"Islam"+word.slice(c+5);
document.write("City: "+word+"<br>");
document.write("After replacement: "+word1);



//Question 08:
var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g,"&");
document.write(message);



//Question 09:
var value = "472";
var value1 =Number(value);
document.write("value: "+value+"<br>");
document.write("Type: "+typeof(value) +"<br>");
document.write("value: "+value1+"<br>");
document.write("Type: "+typeof(value1) +"<br>");


//Question 10:
var input=prompt("Enter a string: ");
document.write("User input: "+input+"<br>");
document.write("Uppercase: "+input.toUpperCase());


//Question 11:
var input=prompt("Enter a string: ");
document.write("User input: "+input+"<br>");
document.write("Titlecase: "+input.slice(0,1).toUpperCase() +input.slice(1).toLowerCase() );




//Question 12:
var num = 35.36 ;
num1 = num.toString();
num1 = num1.replace(".","");
document.write("Number: "+num+"<br>");
document.write("Result: "+num1);


//Question 13
var username = prompt("Enter user name: ");
for (var a = 0 ; a< username.length;a++)
{
    var chk = username.charCodeAt(a);
    if(chk === 33 || chk === 44 || chk === 46 || chk === 64 )
    {
        alert("Please enter a valid username!");
    }
}


//Question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Welcome to ABC bakery.What do you want to order!");
var c = b.toLowerCase();
var flag = false;
for(var i =0;i<A.length;i++)
{
    if(A[i] === c)
    {
        flag = true;
        document.write(b+" is avaliable at index "+i+" in our bakery");
    }
}
if (flag === false)
{
    document.write("We are very sorry!! "+b+ " is not avaliable in our bakery " );
}



//Question 15
var pas =prompt("Enter a passward: ");
var flag1 = true; 
for (var a = 0;a< pas.length;a++)
{
    var c = pas.charCodeAt(a);
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (+c >= 48 && +c <= 57) )
    {
        
    } 
    else
    {
        flag1 = false;
        document.write("Entered passward is: "+pas+"<br>");
        document.write("PAssward is incorrect!! It can contain only numbers and alphabets "+"<br>")
        alert("PAssward is incorrect!!");
        document.write("Please Enter a valid passward");
        break;
    }

    
}
var c = pas.charCodeAt(0);
if(flag1 === true)
{
    if (c >= 48 && c <= 57)
    {
        document.write("Entered passward is: "+pas+"<br>");
        document.write("Passward cannot start with a number"+"<br>");
        document.write("Please Enter a valid passward");
        alert("Passward cannot start with a number");
    } 
    else
    {
        if (pas.length < 6)
        {
            alert("passward must at least 6 characters long!!");
            document.write("Entered passward is: "+pas+"<br>");
            document.write("passward must at least 6 characters long!!"+"<br>")
            document.write("Please Enter a valid passward");
        }   
        else
        {
            document.write("Entered passward is: "+pas);
        }
    }

}



//Question 16
var university = "University of Karachi";
var a = university.split("");

for(var i =0 ; i< a.length ; i++)
{
    document.write(a[i]+"<br>");
}



//Question 17
var input = prompt("Enter a string: ");
var c = input[input.length -1];
document.write("User Input: "+input+"<br>");
document.write("Last character of input: "+c);



//Question 18
var text ="The quick brown fox jumps over the lazy dog";
var c = text.split(" ");
var count = 0;
for( var a = 0 ; a<c.length ;a++)
{
    if (c[a].toLowerCase() === "the")
    {
        count=count+1;
    }
}
document.write("Text: "+text+"<br>");
document.write("There are "+count+" occouraces of word 'the'");
*/

/*------------------------  Chapters 26-30  --------------------------------*/
/*------------------------  Math Methods  ----------------------------------*/
/*
//Question 01:
var input = prompt("Enter a positive number: ");
document.write("Number: "+input+"<br>");
document.write("round of value: "+Math.round(input)+"<br>");
document.write("floor value: "+Math.floor(input)+"<br>");
document.write("ceil value: "+Math.ceil(input)+"<br>");



//Question 02:
var input = prompt("Enter a negative number: ");
document.write("Number: "+input+"<br>");
document.write("round of value: "+Math.round(input)+"<br>");
document.write("floor value: "+Math.floor(input)+"<br>");
document.write("ceil value: "+Math.ceil(input)+"<br>");



//Question 3:
var input = prompt("Enter a negative number: ");
document.write("The absolute value of "+input+" is "+Math.abs(input));



//Question 04:
var a = Math.random() * 6 ;
var b = Math.ceil(a);
document.write("Random dice value: "+b);


//Question 05:
var a = Math.random() * 2 ;
var b = Math.ceil(a);
if ( b === 1)
{
    document.write(b+"<br>");
    document.write("Random coin value: Head");
}
else
{
    document.write(b+"<br>");
    document.write("Random coin value: Tail");
    
}



//Question 06:
var a = Math.random() * 100 ;
var b = Math.ceil(a);
document.write("Random number between 1 and 100: "+b);



//Question 07
var input = prompt("Enter your weight in kiligrams: ");
var n = 0;

n = parseFloat(input);
document.write(n+"<br>");




//Question 08
var a = Math.random() * 10 ;
var b = Math.ceil(a);
var c = +prompt("Enter a number between 1 to 10: ");
if (c === b)
{
    alert("Congratulation you guess a correct number");
}
else
{
    alert("Sorry!!! try again...");
}
*/

/*------------------------  Chapters 31-34  --------------------------------*/
/*------------------------  DATE METHODS  ----------------------------------*/
/*

//Question 01:
var a = new Date();
document.write(a);




//Question 02:
var a = new Date();
a=a.getMonth();

if(a === 0)
{
document.write("Current month: january");
}
else if(a === 1)
{
document.write("Current month: Febuary");
}

else if(a === 2)
{
document.write("Current month: March");
}
else if(a === 3)
{
document.write("Current month: April");
}
else if(a === 4)
{
document.write("Current month: May");
}
else if(a === 5)
{
document.write("Current month: June");
}
else if(a === 6)
{
document.write("Current month: July");
}
else if(a === 7)
{
document.write("Current month: August");
}
else if(a === 8)
{
document.write("Current month: September");
}
else if(a === 9)
{
document.write("Current month: Octuber");
}
else if(a === 10)
{
document.write("Current month: November");
}
else if(a === 11)
{
document.write("Current month: December");
}



//Question 03

var a = new Date();
a=a.getDay();
if (a === 0)
{
    document.write("Today is Sun");
}
else if (a === 1)
{
    document.write("Today is Mon");
}
else if (a === 2)
{
    document.write("Today is Tue");
}
else if (a === 3)
{
    document.write("Today is Wed");
}
else if (a === 4)
{
    document.write("Today is Thu");
}
else if (a === 5)
{
    document.write("Today is Fri");
}
else if (a === 6)
{
    document.write("Today is Sat");
}





//Question 04

var a = new Date();
a=a.getDay();
if (a === 0 ||a === 6)
{
    document.write("Its fun day");
}




//Question 05
var a = new Date();
a=a.getDate();
if (a >= 1 && a<= 15)
{
    document.write("First fifteen days of the month");
}
else if(a >=16 && a <= 31)
{
    document.write("Last days of the month");
}




//Question 06
var a = new Date();
var b = a.getTime();
var c =Math.ceil(b/(1000*60)) ;
document.write("Current Date: "+a+"<br>");
document.write("Elapsed miliseconds since january1 ,1970: "+b+"<br>");
document.write("Elapsed minutes since january1 ,1970: "+c+"<br>");




//Question 07
var a = new Date();
var b = a.getHours();
if(b >=0 && b <= 11 )
{
    alert("Its AM");
}
else if(b >=12 && b <= 23 )
{
    alert("Its AM");
}




//Question 08
var later_date = new Date("May 31,2020");
document.write("Later Date: "+later_date);




//Question 09
var Ramdan_date = new Date("Apr 25,2020");
var today_date   = new Date();
var diff = today_date-Ramdan_date;
diff =diff/(1000*60*60*24);
diff =Math.ceil(diff)
alert(diff+" days passed since 1st Ramadan, 2020");



//Question 10
var date1 = new Date("Jan 1,2015 ");
var date = new Date("Dec 5,2015 22:50:16");

var a = date.getTime();
var b = date1.getTime();
var diff = a - b;
diff = diff/(1000*60);
diff =Math.ceil(diff);

document.write("On refference date"+new Date("Dec 5,2015 22:50:16")+","+diff+" second has passed since begining of 2015");







//Question 11:
var date = new Date();
var h = date.getHours();

document.write("current date: "+date+"<br>");
h = h-1
date.setHours(h)
document.write("1 hour ago,it was "+date);






//Question 12:
var date = new Date();
var h = date.getFullYear();

document.write("current date: "+date+"<br>");
h = h-100
date.setFullYear(h)
document.write("100 year back,it was "+date);





//Question 13:
var age = +prompt("Enter your age: ");

var date = new Date();
var h = date.getFullYear();
h = h-age;
date.setFullYear(h)
var by= date.getFullYear();
document.write("Your age is: "+age+"<br>");
document.write("Your birth year is: "+by);






//Question 14
var costumerName = "Hira Khan";
var date = new Date();
var c_month = date.getMonth();
var nbr_of_units = 334;
var charges_per_unit = 16;
var Late_Payment_Surcharge = 350;
var Net_Amount_Payable  = nbr_of_units * charges_per_unit ;
var Gross_amount_payable = Net_Amount_Payable + Late_Payment_Surcharge;
document.write("Costumer Name"+costumerName+"<br>");
document.write("Month: "+c_month+"<br>");
document.write("charges per unit: "+charges_per_unit.toFixed(2)+"<br>");
document.write("Number of units: "+nbr_of_units.toFixed(2)+"<br>");
document.write("Net Amount Payable: "+Net_Amount_Payable.toFixed(2)+"<br>");
document.write("Late Payment Surcharge: "+Late_Payment_Surcharge.toFixed(2)+"<br>");
document.write("Gross Amount payable: "+Gross_amount_payable.toFixed(2)+"<br>");


*/


/*------------------------  Chapters 35-38  --------------------------------*/
/*------------------------  FUNCTIONS  ----------------------------------*/

/*
//Question 01
function a ()
{
    document.write(new Date());
}

a();








//Question 02
var first_Name=prompt("Enter your first name: ");
var last_Name=prompt("Enter your last name: ");
function b(first,last)
{
    document.write("Assalam-o-alikum "+first+" "+last);
}
b(first_Name,last_Name);



//Question 03:
var first_Nbr=+prompt("Enter first number: ");
var second_Nbr=+prompt("Enter second number: ");
function add(first,second)
{
    document.write(first+second);
}
add(first_Nbr,second_Nbr);







//Question 04:
var first_Nbr=+prompt("Enter first number: ");
var second_Nbr=+prompt("Enter second number: ");
var opt=prompt("Enter operator: ");
function calc(f,s,o)
{
    if(o === "+")
    {
        var c = f+s;
        document.write("Sum is: "+c);
    }
    else if(o === '-')
    {
        document.write("Subtraction is: "+f-s);
    }
    else if(o === '*')
    {
        document.write("Multipication is: "+f*s);
    }
    else if(o === '/')
    {
        document.write("Division is: "+f/s);
    }
    else{
        document.write("Wrong operator!");
    }
}
calc(first_Nbr,second_Nbr,opt);








//Question 05:
var input = +prompt("Enter a number: ");
function sqr(a)
{
    return a*a;
}
document.write("Square of "+input+" is: "+sqr(input));







//Question 06:
var input = +prompt("Enter a number: ");
var fac =1;
function factorial(num)
{
for (var a = num; a>0; a--)
{
    fac = fac * a;
}
return fac;
}
document.write("Factorial of "+input+" is: "+factorial(input));







//Question 07:
var a = +prompt("Enter start number: ");
var b = +prompt("Enter end number: ");
function count1(a,b)
{
    for(var c = a;c<=b;c++)
    {
        document.write(c+"<br>");
    }
}
count1(a,b);






//Question 08:
var base = +prompt("Enter a base: ");
var per = +prompt("Enter a perpendicular: ");
function calculateHypotenuse(b,p)
{
    function sqr (n)
    {
        return n*n
    }
    var bsqr = sqr(b);
    var psqr = sqr(p);
    h = bsqr+psqr;
    document.write("Hypotenuse"+"<sup>2</sup>"+"  = "+h);
document
}
calculateHypotenuse(base,per);







//Question 09:
var height = 4;
function area(w,h)
{
    var area = w*h;
    return area;
}
document.write("Area of rectangle is: "+area(6,height));







//Question 10:
function pal(word,l)
{
    var chk = "";
    for(var a=l-1; a >= 0; a--)
    {
         chk =chk+word[a]; 
    }
    if(chk === word)
    {
        document.write("Word is palandrome");
    }
    else
    {
        document.write("Word is not palandrome");
    }
}
var input = prompt("Enter a word to check its palandrome or not:");

input = input.toLowerCase();
var l =input.length;
pal(input,l);






//Question 11
var a = "the quick brown fox";

function chng(str)
{
    var s= [];

    s = str.split(" ");
    
    for (var a = 0 ;a< s.length;a++ )
    {

        var str1 = s[a];
        var  chk = "";
        for (var b = 0 ; b< str1.length ; b++)
        {

            if ( b === 0)
            {
                chk = chk + str1[b].toUpperCase();
            }
            else
            {
                chk = chk + str1[b];
            }

        }

       s[a]=chk; 

    }
    var ss ="";
   for ( var a = 0 ; a< s.length; a++)
   {
        ss= ss +" "+s[a];
   }
   document.write(ss);
}
chng(a);







//Question 12:
function longestword(str)
{
    var s= [];

    s = str.split(" ");
    var a = 0;
    var chk = "";

    for (var  b = 0 ; b<s.length;b++ )
    {
        if (s[b].length > a)
        {
            a = s[b].length;
            chk = s[b];
        }
    }    
    document.write(chk);
}

longestword("Web Development Tutorial");






//Question 13:
function Count(str,ch)
{
    
var a = 0

 for (var b = 0; b < str.length; b++) 
 {
    if (str[b] === ch) 
      {
      a += 1;
      }
  }
  return a;

}
document.write(Count("JSResourceS.com","o"));






//Question 14:
var pi = 3.14;
var radius = +prompt("Enter the value of radius: ");
function calcCircumference(r)
{
    var circumtance = 2 * pi * r
    document.write("The circumference is: "+circumtance+"<br>");
}
function calcArea(r)
{
    var area  = pi * r *r;
    document.write("The area is: "+area+"<br>");
}
calcCircumference(radius);
calcArea(radius);
*/
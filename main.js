// even numbers and their sum
let n=5;
sum=0;
document.write("The even numbers are: ");
for(i=1;i<=n;i++){
	if(i%2==0){
		sum=sum+i;
		document.write(" "+ i+" ");
	 }
	 
 }
 document.write("<br>");
 document.write("Sum of even numbers: " +sum);
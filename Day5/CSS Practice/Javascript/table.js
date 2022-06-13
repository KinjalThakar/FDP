// alert ("This is an alert dialog box");  

function drawTable()
 {
	
 		// alert ("This is an alert dialog box");  

	var row = parseInt(prompt("Enter the row"));
	var column = parseInt(prompt("Enter the column"));

   // console.log(typeof(row));
   // console.log(typeof(column));

	var html = "<h1> Row : " + row +"</h1>";
	 html += "<h1> column : " + column +"</h1>";
	html += "<table border = '1'>";

	 for(var i=1; i<=row ; i++)
     {
	 	html += "<tr>";
	 	for(var j=1; j<=column;j++)
	 	 {
	 	   if(i%2 == 1)
	        {
	 		 if (j%2==1)
	 	      {
	 		     html += "<td bgcolor='black'> row : " +i+" ; column :"+ j +"</td>";
	 	      }
	 	     else
	 	      {
	 		    html += "<td> row : " +i+" ; column :"+ j +"</td>";
	 	      }
	        } 
	       else
	       {
	 	      if (j%2==0)
	 	       {
	 		     html += "<td bgcolor='black'> row : " +i+" ; column :"+ j +"</td>";
	 	       }
	 	      else
	 	       {
	 		     html += "<td> row : " +i+" ; column :"+ j +"</td>";
	 	       }
	        } 
	    }
    
	 	html += "</tr>";

  }
html += "</table>";
 //document.write(html);
document.getElementById('printTable').innerHTML = html;
// console.log(row);
// console.log(column);

// document.getElementById('span.row').innerHTML = row;
// document.getElementById('span.column').innerHTML = column;
}
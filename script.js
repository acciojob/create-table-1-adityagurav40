function insert_Row() {
    //Write your code here
   // Get table element
  var table = document.getElementById("sampleTable");
  
  // Insert new row at the top of the table
  var newRow = table.insertRow(0);
  
  // Add cells to the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  
  // Set the innerHTML of the new cells to your desired content
  cell1.innerHTML = "New Cell 1";
  cell2.innerHTML = "New cell 2";
  
}

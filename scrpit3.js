<script>
let input = document.getElementById('task');
let btn = document.getElementById('addTask');
let ul = document.getElementById('todo');

btn.addEventListener('click', function(){
    if(input.value.trim() !== "") {
        let newItem = document.createElement('li');  
        newItem.textContent = input.value; 
        
        // Add click event to remove this li
        newItem.addEventListener('click', function(){
            newItem.remove();  // removes the clicked item
        });

        ul.appendChild(newItem); 
        input.value = ""; 
    }
});
    // Step 4: Create a new <li> element

    // let li=document.createElement('li');  // create li
    // newItem.textContent=input.value;      // set its text to input value

    // Step 5: Append the new item to the list

   // list.appendChild(newItem)   // add the li to ul

    // Step 6: Clear input after adding

    // input.value=""; // optional, clears the input box
</script>

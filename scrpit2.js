
    let btn=document.getElementById('btn')

    // btn.addEventListener('click',function(){
        // document.body.style.background="lightblue";
        // if i want to change the colours then

        btn.addEventListener('click',function(){
            let color=["Red","Orange","Green","lightblue","Brown"]
            let randomcolor=color[Math.floor(Math.random()*color.length)]
            // how to work means color.length (5 there are 5 elements in index so floor means it will round of to the lower value so)
            // colors = ["red", "blue", "green", "yellow", "orange"];

            // Step 1: Generate a random number

// Math.random() → 0.72  (random decimal between 0 and 1)

// Step 2: Multiply by array length (5)

// 0.72 * 5 = 3.6

// Step 3: Round down using Math.floor

// Math.floor(3.6) = 3

// Step 4: Pick color at index 3

// colors[3] → "yellow"
            document.body.style.backgroundColor=randomcolor;
        })
    // })

function change(){
   let change = document.getElementById('change')

   change.innerHTML = `
   
   <form>
      <div>
         <label for="name">City Name</label>
         <input type="text" id="name" placeholder="Input your city name here...">
      </div>
      <div>
         <label for="code">Post Code</label>
         <input type="number" id="code" placeholder="Input your post code here...">
      </div>
      <div>
         <label for="adress">Adress</label>
         <input type="text" id="adress" placeholder="Input your adress here...">
      </div>
   </form>
   
   `
}

function change2(){
   let change = document.getElementById('change')

   change.innerHTML = `
   
   <form>
      <div>
         <label for="name">Name</label>
         <input type="text" id="name" placeholder="Input your name here...">
      </div>
      <div>
         <label for="number">Number</label>
         <input type="number" id="number" placeholder="Input your number here...">
      </div>
      <div>
         <label for="birth">Birthday</label>
         <input type="date" id="birth" placeholder="Input your birth here...">
      </div>
   </form>
   
   `
}
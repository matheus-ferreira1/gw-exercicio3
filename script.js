const selection = document.getElementById('selection')

function fetchData() {

   const url = './data.json';

   let request = new XMLHttpRequest();

   request.open("GET", url);
   request.send();

   request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
         let data = JSON.parse(request.responseText);
         console.log(request.status);

         selection.innerHTML = data.map(users => `
            <option>${users.id} - ${users.name}</option>
         `)
      }
   };
}
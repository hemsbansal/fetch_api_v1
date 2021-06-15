function fakeFetchAPI() {
      fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return (response.json());

    })
    .then(data => {

      var results = document.querySelector('.result');

      var values = ``;

      data.forEach(element => {
        values += `
        <div class="rs">${element.id}. Name : ${element.title}</div>
        `
      })

      results.innerHTML = values;
      
    })
    }

    fakeFetchAPI();

    var refreshBtn = document.querySelector('.refresh');

    refreshBtn.addEventListener('click',() => {
      document.querySelector('.result').innerHTML = '';
      // alert(9)
      fakeFetchAPI()
    })

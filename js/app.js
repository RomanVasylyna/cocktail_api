


$(document).ready(() => {

$('#searchInput').on('keyup', function(e) {
  fetchData($(this).val());
});
  
  fetchData();



function fetchData(search) {
axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)

  .then((response) => {
    console.log(response);
    let arr = response.data.drinks;
    let output = '';
    $.each(arr, (i, elem) => {
    output += `
    <div class="col-lg-4 text-center">
      <img src="${elem.strDrinkThumb}" alt="" class="img-fluid cocktailImg">
      <div class="label"><h4>${elem.strDrink}</h4></div>
    </div>
    `;
    })
    $('.cocktails').html(output);
    })

  .catch((err) => {
    console.log(err);
  })
}





})

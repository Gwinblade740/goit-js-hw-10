const countriesContainer = document.querySelector('.country-list');
const countryContainer = document.querySelector('.country-info');

function renderCountries(selectedCountries) {
  countriesContainer.innerHTML = '';
  countryContainer.innerHTML = '';

  const countries = selectedCountries.map(country => {
    const li = document.createElement('li');
    li.classList.add('item');

    const img = document.createElement('img');
    img.classList.add('image');
    img.setAttribute('src', country.flags.svg);
    img.setAttribute('alt', country.name.official);
    li.append(img);

    const p = document.createElement('p');
    p.textContent = country.name.official;
    li.append(p);
    return li;
  });
  countriesContainer.append(...countries);
}

function renderCountry(selectedCountry) {
  countriesContainer.innerHTML = '';
  countryContainer.innerHTML = '';
  const arr = [];

  const div = document.createElement('div');
  div.classList.add('container');

  const img = document.createElement('img');
  img.classList.add('large-image');
  img.setAttribute('src', selectedCountry[0].flags.svg);
  img.setAttribute('alt', selectedCountry[0].name.official);
  div.append(img);

  const h1 = document.createElement('h1');
  h1.classList.add('title-country');
  h1.textContent = selectedCountry[0].name.official;
  div.append(h1);
  arr.push(div);

  const p1 = document.createElement('p');
  const span1 = document.createElement('span');
  span1.textContent = 'Capital: ';
  p1.append(span1, selectedCountry[0].capital[0]);
  arr.push(p1);

  const p2 = document.createElement('p');
  const span2 = document.createElement('span');
  span2.textContent = 'Population: ';
  p2.append(span2, selectedCountry[0].population);
  arr.push(p2);

  const p3 = document.createElement('p');
  const span3 = document.createElement('span');
  span3.textContent = 'Languages: ';
  p3.append(span3, Object.values(selectedCountry[0].languages).join(', '));
  arr.push(p3);

  countryContainer.append(...arr);
}
const clearCountries = () => {
  countriesContainer.innerHTML = '';
  countryContainer.innerHTML = '';
};
export { renderCountries, renderCountry, clearCountries };

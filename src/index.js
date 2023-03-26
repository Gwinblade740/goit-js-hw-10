import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix, { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { renderCountries, renderCountry, clearCountries } from './renderFunc';
const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  if (event.target.value.trim()) {
    fetchCountries(event.target.value.trim())
      .then(responce => {
        if (responce.length > 10) {
          Notify.info(
            "'Too many matches found. Please enter a more specific name.'"
          );
        } else if (responce.length >= 2 && responce.length <= 10) {
          renderCountries(responce);
        } else {
          renderCountry(responce);
        }
      })
      .catch(error => {
        clearCountries();
        Notify.failure('Oops, there is no country with that name');
      });
  }
  clearCountries();
}

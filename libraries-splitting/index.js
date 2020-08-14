import moment from "moment";
import _ from 'lodash';

const element = document.querySelectorAll('p');

document.addEventListener("DOMContentLoaded", function (event) {
  element[0].innerText = moment().format();
  element[1].innerText = _.drop([1, 2, 3], 0);
});

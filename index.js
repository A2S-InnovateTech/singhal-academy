document.getElementById('IX').style.display = 'none';
document.getElementById('X').style.display = 'none';
document.getElementById('XI').style.display = 'none';
document.getElementById('XII').style.display = 'none';
document.getElementById('JEE-NEET').style.display = 'none';
document.getElementById('PSYCHOLOGY').style.display = 'none';

var opt;
var buttoninnerhtml;

document.querySelectorAll('.opt')[0].addEventListener('click', function () {
  opt = 'IX';
  document.getElementById('IX').style.display = 'block';
  document.getElementById('X').style.display = 'none';
  document.getElementById('XI').style.display = 'none';
  document.getElementById('XII').style.display = 'none';
  document.getElementById('JEE-NEET').style.display = 'none';
  document.getElementById('PSYCHOLOGY').style.display = 'none';
});

document.querySelectorAll('.opt')[1].addEventListener('click', function () {
  opt = 'X';
  document.getElementById('IX').style.display = 'none';
  document.getElementById('X').style.display = 'block';
  document.getElementById('XI').style.display = 'none';
  document.getElementById('XII').style.display = 'none';
  document.getElementById('JEE-NEET').style.display = 'none';
  document.getElementById('PSYCHOLOGY').style.display = 'none';
});

document.querySelectorAll('.opt')[2].addEventListener('click', function () {
  opt = 'XI';
  document.getElementById('IX').style.display = 'none';
  document.getElementById('X').style.display = 'none';
  document.getElementById('XI').style.display = 'block';
  document.getElementById('XII').style.display = 'none';
  document.getElementById('JEE-NEET').style.display = 'none';
  document.getElementById('PSYCHOLOGY').style.display = 'none';
});

document.querySelectorAll('.opt')[3].addEventListener('click', function () {
  opt = 'XII';
  document.getElementById('IX').style.display = 'none';
  document.getElementById('X').style.display = 'none';
  document.getElementById('XI').style.display = 'none';
  document.getElementById('XII').style.display = 'block';
  document.getElementById('JEE-NEET').style.display = 'none';
  document.getElementById('PSYCHOLOGY').style.display = 'none';
});

document.querySelectorAll('.opt')[4].addEventListener('click', function () {
  opt = 'XII';
  document.getElementById('IX').style.display = 'none';
  document.getElementById('X').style.display = 'none';
  document.getElementById('XI').style.display = 'none';
  document.getElementById('XII').style.display = 'none';
  document.getElementById('JEE-NEET').style.display = 'block';
  document.getElementById('PSYCHOLOGY').style.display = 'none';
});

document.querySelectorAll('.opt')[5].addEventListener('click', function () {
  opt = 'XII';
  document.getElementById('IX').style.display = 'none';
  document.getElementById('X').style.display = 'none';
  document.getElementById('XI').style.display = 'none';
  document.getElementById('XII').style.display = 'none';
  document.getElementById('JEE-NEET').style.display = 'none';
  document.getElementById('PSYCHOLOGY').style.display = 'block';
});

// $(".price-period").each(function (i) {
//   var classes = $(this).attr("class"),
//     id = $(this).attr("id"),
//     name = $(this).attr("name");
//   $(this).wrap('<div class="input-price-period" id="' + name + '"></div>');
//   $(this).after('<label for="price-period-' + i + '"></label>');
//   $(this).attr("id", "price-period-" + i);
//   $(this).attr("name", name);
// });
// $(".input-price-period input").change(function () {
//   $(".card-pricing-toggle").toggleClass("card-price--annual");
// });

// var online_1 = document.getElementById('online-1');
// var offline_1 = document.getElementById('offline-1');
// var online_price_1 = document.getElementById('online-price-1');
// var offline_price_1 = document.getElementById('offline-price-1');
// var checkbox_1 = document.getElementById('checkbox-1');

// online_price_1.style.display = 'none';
// offline_price_1.style.display = 'none';
// if (checkbox_1.checked == true) {
//   offline_price_1.style.display = 'block';
//   online_1.style.opacity = '0.6';
// } else {
//   online_price_1.style.display = 'block';
//   offline_1.style.opacity = '0.6';
//   online_1.style.scale = '2';
// }
document.addEventListener('DOMContentLoaded', function () {
  var online_1 = document.getElementById('online-1');
  var offline_1 = document.getElementById('offline-1');
  var online_price_1 = document.getElementById('online-price-1');
  var offline_price_1 = document.getElementById('offline-price-1');
  var checkbox_1 = document.getElementById('checkbox-1');

  online_price_1.style.display = 'block';
  offline_price_1.style.display = 'none';

  checkbox_1.addEventListener('change', function () {
    if (checkbox_1.checked) {
      console.log('Checked');
      offline_1.style.opacity = '1';
      online_1.style.opacity = '0.6';
      offline_price_1.style.display = 'block';
      online_price_1.style.display = 'none';
    } else {
      console.log('Not checked');
      online_1.style.opacity = '1';
      offline_1.style.opacity = '0.6';
      online_price_1.style.display = 'block';
      offline_price_1.style.display = 'none';
    }
  });
});
document.getElementById('getCode1').addEventListener('click', () => {
  var x = document.getElementById('code1').value;
  console.log(x);
  if (x === 'Tarun2021') {
    // var price = document.getElementById('card-price-total').textContent;
    document.getElementById('online-price-1').innerHTML = '3500';
    document.getElementById('offline-price-1').innerHTML = '3000';
    document.getElementById('success-message1').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('message1').innerHTML =
      'Coupon discount: ₹500 Discounted total: ₹3500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('message1').innerHTML = 'Please Enter Code!!!';
    } else {
      document.getElementById('online-price-1').innerHTML = '4000';
      document.getElementById('offline-price-1').innerHTML = '3500';
      document.getElementById('message1').innerHTML = 'Invalid Coupon Code!!!';
      document.getElementById('success-message1').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var online_2 = document.getElementById('online-2');
  var offline_2 = document.getElementById('offline-2');
  var online_price_2 = document.getElementById('online-price-2');
  var offline_price_2 = document.getElementById('offline-price-2');
  var checkbox_2 = document.getElementById('checkbox-2');

  online_price_2.style.display = 'block';
  offline_price_2.style.display = 'none';

  checkbox_2.addEventListener('change', function () {
    if (checkbox_2.checked) {
      console.log('Checked');
      offline_2.style.opacity = '1';
      online_2.style.opacity = '0.6';
      offline_price_2.style.display = 'block';
      online_price_2.style.display = 'none';
    } else {
      console.log('Not checked');
      online_2.style.opacity = '1';
      offline_2.style.opacity = '0.6';
      online_price_2.style.display = 'block';
      offline_price_2.style.display = 'none';
    }
  });
});
document.getElementById('getCode2').addEventListener('click', () => {
  var x = document.getElementById('code2').value;
  console.log(x);
  if (x === 'Tarun2021') {
    // var price = document.getElementById('card-price-total').textContent;
    document.getElementById('online-price-2').innerHTML = '3500';
    document.getElementById('offline-price-2').innerHTML = '3000';
    document.getElementById('success-message2').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('message2').innerHTML =
      'Coupon discount: ₹500 Discounted total: ₹3500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('message2').innerHTML = 'Please Enter Code!!!';
    } else {
      document.getElementById('online-price-2').innerHTML = '4000';
      document.getElementById('offline-price-2').innerHTML = '3500';
      document.getElementById('message2').innerHTML = 'Invalid Coupon Code!!!';
      document.getElementById('success-message2').innerHTML = '';
    }
  }
});

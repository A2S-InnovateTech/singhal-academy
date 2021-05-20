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

// ******************************************************************IXth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var IX_science_online = document.getElementById('IX-science-online');
  var IX_science_offline = document.getElementById('IX-science-offline');
  var IX_science_online_price = document.getElementById(
    'IX-science-online-price'
  );
  var IX_science_offline_price = document.getElementById(
    'IX-science-offline-price'
  );
  var IX_science_checkbox = document.getElementById('IX-science-checkbox');

  IX_science_online_price.style.display = 'block';
  IX_science_offline_price.style.display = 'none';
  IX_science_offline.style.opacity = '0.6';

  IX_science_checkbox.addEventListener('change', function () {
    if (IX_science_checkbox.checked) {
      console.log('Checked');
      IX_science_offline.style.opacity = '1';
      IX_science_online.style.opacity = '0.6';
      IX_science_offline_price.style.display = 'block';
      IX_science_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      IX_science_online.style.opacity = '1';
      IX_science_offline.style.opacity = '0.6';
      IX_science_online_price.style.display = 'block';
      IX_science_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('IX-science-getCode').addEventListener('click', () => {
  var x = document.getElementById('IX-science-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('IX-science-online-price').innerHTML = '18,000';
    document.getElementById('IX-science-offline-price').innerHTML = '20,000';
    document.getElementById('IX-science-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('IX-science-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('IX-science-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('IX-science-online-price').innerHTML = '18,500';
      document.getElementById('IX-science-offline-price').innerHTML = '20,500';
      document.getElementById('IX-science-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('IX-science-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var IX_maths_online = document.getElementById('IX-maths-online');
  var IX_maths_offline = document.getElementById('IX-maths-offline');
  var IX_maths_online_price = document.getElementById('IX-maths-online-price');
  var IX_maths_offline_price = document.getElementById(
    'IX-maths-offline-price'
  );
  var IX_maths_checkbox = document.getElementById('IX-maths-checkbox');

  IX_maths_online_price.style.display = 'block';
  IX_maths_offline_price.style.display = 'none';
  IX_maths_offline.style.opacity = '0.6';

  IX_maths_checkbox.addEventListener('change', function () {
    if (IX_maths_checkbox.checked) {
      console.log('Checked');
      IX_maths_offline.style.opacity = '1';
      IX_maths_online.style.opacity = '0.6';
      IX_maths_offline_price.style.display = 'block';
      IX_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      IX_maths_online.style.opacity = '1';
      IX_maths_offline.style.opacity = '0.6';
      IX_maths_online_price.style.display = 'block';
      IX_maths_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('IX-maths-getCode').addEventListener('click', () => {
  var x = document.getElementById('IX-maths-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('IX-maths-online-price').innerHTML = '18,000';
    document.getElementById('IX-maths-offline-price').innerHTML = '20,000';
    document.getElementById('IX-maths-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('IX-maths-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('IX-maths-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('IX-maths-online-price').innerHTML = '18,500';
      document.getElementById('IX-maths-offline-price').innerHTML = '20,500';
      document.getElementById('IX-maths-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('IX-maths-success-message').innerHTML = '';
    }
  }
});

// ******************************************************************Xth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var X_science_online = document.getElementById('X-science-online');
  var X_science_offline = document.getElementById('X-science-offline');
  var X_science_online_price = document.getElementById(
    'X-science-online-price'
  );
  var X_science_offline_price = document.getElementById(
    'X-science-offline-price'
  );
  var X_science_checkbox = document.getElementById('X-science-checkbox');

  X_science_online_price.style.display = 'block';
  X_science_offline_price.style.display = 'none';
  X_science_offline.style.opacity = '0.6';

  X_science_checkbox.addEventListener('change', function () {
    if (X_science_checkbox.checked) {
      console.log('Checked');
      X_science_offline.style.opacity = '1';
      X_science_online.style.opacity = '0.6';
      X_science_offline_price.style.display = 'block';
      X_science_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      X_science_online.style.opacity = '1';
      X_science_offline.style.opacity = '0.6';
      X_science_online_price.style.display = 'block';
      X_science_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('X-science-getCode').addEventListener('click', () => {
  var x = document.getElementById('X-science-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    // var price = document.getElementById('card-price-total').textContent;
    document.getElementById('X-science-online-price').innerHTML = '18,000';
    document.getElementById('X-science-offline-price').innerHTML = '20,000';
    document.getElementById('X-science-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('X-science-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('X-science-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('X-science-online-price').innerHTML = '18,500';
      document.getElementById('X-science-offline-price').innerHTML = '20,500';
      document.getElementById('X-science-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('X-science-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var X_maths_online = document.getElementById('X-maths-online');
  var X_maths_offline = document.getElementById('X-maths-offline');
  var X_maths_online_price = document.getElementById('X-maths-online-price');
  var X_maths_offline_price = document.getElementById('X-maths-offline-price');
  var X_maths_checkbox = document.getElementById('X-maths-checkbox');

  X_maths_online_price.style.display = 'block';
  X_maths_offline_price.style.display = 'none';
  X_maths_offline.style.opacity = '0.6';

  X_maths_checkbox.addEventListener('change', function () {
    if (X_maths_checkbox.checked) {
      console.log('Checked');
      X_maths_offline.style.opacity = '1';
      X_maths_online.style.opacity = '0.6';
      X_maths_offline_price.style.display = 'block';
      X_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      X_maths_online.style.opacity = '1';
      X_maths_offline.style.opacity = '0.6';
      X_maths_online_price.style.display = 'block';
      X_maths_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('X-maths-getCode').addEventListener('click', () => {
  var x = document.getElementById('X-maths-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('X-maths-online-price').innerHTML = '18,000';
    document.getElementById('X-maths-offline-price').innerHTML = '20,000';
    document.getElementById('X-maths-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('X-maths-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('X-maths-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('X-maths-online-price').innerHTML = '18,500';
      document.getElementById('X-maths-offline-price').innerHTML = '20,500';
      document.getElementById('X-maths-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('X-maths-success-message').innerHTML = '';
    }
  }
});

// ******************************************************************XIth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var XI_maths_online = document.getElementById('XI-maths-online');
  var XI_maths_offline = document.getElementById('XI-maths-offline');
  var XI_maths_online_price = document.getElementById('XI-maths-online-price');
  var XI_maths_offline_price = document.getElementById(
    'XI-maths-offline-price'
  );
  var XI_maths_checkbox = document.getElementById('XI-maths-checkbox');

  XI_maths_online_price.style.display = 'block';
  XI_maths_offline_price.style.display = 'none';
  XI_maths_offline.style.opacity = '0.6';

  XI_maths_checkbox.addEventListener('change', function () {
    if (XI_maths_checkbox.checked) {
      console.log('Checked');
      XI_maths_offline.style.opacity = '1';
      XI_maths_online.style.opacity = '0.6';
      XI_maths_offline_price.style.display = 'block';
      XI_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XI_maths_online.style.opacity = '1';
      XI_maths_offline.style.opacity = '0.6';
      XI_maths_online_price.style.display = 'block';
      XI_maths_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('XI-maths-getCode').addEventListener('click', () => {
  var x = document.getElementById('XI-maths-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('XI-maths-online-price').innerHTML = '20,000';
    document.getElementById('XI-maths-offline-price').innerHTML = '22,000';
    document.getElementById('XI-maths-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('XI-maths-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('XI-maths-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('XI-maths-online-price').innerHTML = '20,500';
      document.getElementById('XI-maths-offline-price').innerHTML = '22,500';
      document.getElementById('XI-maths-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('XI-maths-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var XI_physics_online = document.getElementById('XI-physics-online');
  var XI_physics_offline = document.getElementById('XI-physics-offline');
  var XI_physics_online_price = document.getElementById(
    'XI-physics-online-price'
  );
  var XI_physics_offline_price = document.getElementById(
    'XI-physics-offline-price'
  );
  var XI_physics_checkbox = document.getElementById('XI-physics-checkbox');

  XI_physics_online_price.style.display = 'block';
  XI_physics_offline_price.style.display = 'none';
  XI_physics_offline.style.opacity = '0.6';

  XI_physics_checkbox.addEventListener('change', function () {
    if (XI_physics_checkbox.checked) {
      console.log('Checked');
      XI_physics_offline.style.opacity = '1';
      XI_physics_online.style.opacity = '0.6';
      XI_physics_offline_price.style.display = 'block';
      XI_physics_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XI_physics_online.style.opacity = '1';
      XI_physics_offline.style.opacity = '0.6';
      XI_physics_online_price.style.display = 'block';
      XI_physics_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('XI-physics-getCode').addEventListener('click', () => {
  var x = document.getElementById('XI-physics-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('XI-physics-online-price').innerHTML = '20,000';
    document.getElementById('XI-physics-offline-price').innerHTML = '22,000';
    document.getElementById('XI-physics-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('XI-physics-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('XI-physics-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('XI-physics-online-price').innerHTML = '20,500';
      document.getElementById('XI-physics-offline-price').innerHTML = '22,500';
      document.getElementById('XI-physics-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('XI-physics-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var XI_chemistry_online = document.getElementById('XI-chemistry-online');
  var XI_chemistry_offline = document.getElementById('XI-chemistry-offline');
  var XI_chemistry_online_price = document.getElementById(
    'XI-chemistry-online-price'
  );
  var XI_chemistry_offline_price = document.getElementById(
    'XI-chemistry-offline-price'
  );
  var XI_chemistry_checkbox = document.getElementById('XI-chemistry-checkbox');

  XI_chemistry_online_price.style.display = 'block';
  XI_chemistry_offline_price.style.display = 'none';
  XI_chemistry_offline.style.opacity = '0.6';

  XI_chemistry_checkbox.addEventListener('change', function () {
    if (XI_chemistry_checkbox.checked) {
      console.log('Checked');
      XI_chemistry_offline.style.opacity = '1';
      XI_chemistry_online.style.opacity = '0.6';
      XI_chemistry_offline_price.style.display = 'block';
      XI_chemistry_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XI_chemistry_online.style.opacity = '1';
      XI_chemistry_offline.style.opacity = '0.6';
      XI_chemistry_online_price.style.display = 'block';
      XI_chemistry_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('XI-chemistry-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('XI-chemistry-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('XI-chemistry-online-price').innerHTML = '20,000';
      document.getElementById('XI-chemistry-offline-price').innerHTML =
        '22,000';
      document.getElementById('XI-chemistry-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('XI-chemistry-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('XI-chemistry-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('XI-chemistry-online-price').innerHTML =
          '20,500';
        document.getElementById('XI-chemistry-offline-price').innerHTML =
          '22,500';
        document.getElementById('XI-chemistry-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('XI-chemistry-success-message').innerHTML = '';
      }
    }
  });

// ******************************************************************XIIth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var XII_maths_online = document.getElementById('XII-maths-online');
  var XII_maths_offline = document.getElementById('XII-maths-offline');
  var XII_maths_online_price = document.getElementById(
    'XII-maths-online-price'
  );
  var XII_maths_offline_price = document.getElementById(
    'XII-maths-offline-price'
  );
  var XII_maths_checkbox = document.getElementById('XII-maths-checkbox');

  XII_maths_online_price.style.display = 'block';
  XII_maths_offline_price.style.display = 'none';
  XII_maths_offline.style.opacity = '0.6';

  XII_maths_checkbox.addEventListener('change', function () {
    if (XII_maths_checkbox.checked) {
      console.log('Checked');
      XII_maths_offline.style.opacity = '1';
      XII_maths_online.style.opacity = '0.6';
      XII_maths_offline_price.style.display = 'block';
      XII_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XII_maths_online.style.opacity = '1';
      XII_maths_offline.style.opacity = '0.6';
      XII_maths_online_price.style.display = 'block';
      XII_maths_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('XII-maths-getCode').addEventListener('click', () => {
  var x = document.getElementById('XII-maths-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('XII-maths-online-price').innerHTML = '20,000';
    document.getElementById('XII-maths-offline-price').innerHTML = '22,000';
    document.getElementById('XII-maths-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('XII-maths-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('XII-maths-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('XII-maths-online-price').innerHTML = '20,500';
      document.getElementById('XII-maths-offline-price').innerHTML = '22,500';
      document.getElementById('XII-maths-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('XII-maths-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var XII_physics_online = document.getElementById('XII-physics-online');
  var XII_physics_offline = document.getElementById('XII-physics-offline');
  var XII_physics_online_price = document.getElementById(
    'XII-physics-online-price'
  );
  var XII_physics_offline_price = document.getElementById(
    'XII-physics-offline-price'
  );
  var XII_physics_checkbox = document.getElementById('XII-physics-checkbox');

  XII_physics_online_price.style.display = 'block';
  XII_physics_offline_price.style.display = 'none';
  XII_physics_offline.style.opacity = '0.6';

  XII_physics_checkbox.addEventListener('change', function () {
    if (XII_physics_checkbox.checked) {
      console.log('Checked');
      XII_physics_offline.style.opacity = '1';
      XII_physics_online.style.opacity = '0.6';
      XII_physics_offline_price.style.display = 'block';
      XII_physics_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XII_physics_online.style.opacity = '1';
      XII_physics_offline.style.opacity = '0.6';
      XII_physics_online_price.style.display = 'block';
      XII_physics_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('XII-physics-getCode').addEventListener('click', () => {
  var x = document.getElementById('XII-physics-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('XII-physics-online-price').innerHTML = '20,000';
    document.getElementById('XII-physics-offline-price').innerHTML = '22,000';
    document.getElementById('XII-physics-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('XII-physics-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('XII-physics-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('XII-physics-online-price').innerHTML = '20,500';
      document.getElementById('XII-physics-offline-price').innerHTML = '22,500';
      document.getElementById('XII-physics-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('XII-physics-success-message').innerHTML = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var XII_chemistry_online = document.getElementById('XII-chemistry-online');
  var XII_chemistry_offline = document.getElementById('XII-chemistry-offline');
  var XII_chemistry_online_price = document.getElementById(
    'XII-chemistry-online-price'
  );
  var XII_chemistry_offline_price = document.getElementById(
    'XII-chemistry-offline-price'
  );
  var XII_chemistry_checkbox = document.getElementById(
    'XII-chemistry-checkbox'
  );

  XII_chemistry_online_price.style.display = 'block';
  XII_chemistry_offline_price.style.display = 'none';
  XII_chemistry_offline.style.opacity = '0.6';

  XII_chemistry_checkbox.addEventListener('change', function () {
    if (XII_chemistry_checkbox.checked) {
      console.log('Checked');
      XII_chemistry_offline.style.opacity = '1';
      XII_chemistry_online.style.opacity = '0.6';
      XII_chemistry_offline_price.style.display = 'block';
      XII_chemistry_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      XII_chemistry_online.style.opacity = '1';
      XII_chemistry_offline.style.opacity = '0.6';
      XII_chemistry_online_price.style.display = 'block';
      XII_chemistry_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('XII-chemistry-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('XII-chemistry-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('XII-chemistry-online-price').innerHTML =
        '20,000';
      document.getElementById('XII-chemistry-offline-price').innerHTML =
        '22,000';
      document.getElementById('XII-chemistry-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('XII-chemistry-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('XII-chemistry-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('XII-chemistry-online-price').innerHTML =
          '20,500';
        document.getElementById('XII-chemistry-offline-price').innerHTML =
          '22,500';
        document.getElementById('XII-chemistry-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('XII-chemistry-success-message').innerHTML = '';
      }
    }
  });

// ******************************************************************JEE / NEET*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var jee_neet_online = document.getElementById('jee-neet-online');
  var jee_neet_offline = document.getElementById('jee-neet-offline');
  var jee_neet_online_price = document.getElementById('jee-neet-online-price');
  var jee_neet_offline_price = document.getElementById(
    'jee-neet-offline-price'
  );
  var jee_neet_checkbox = document.getElementById('jee-neet-checkbox');

  jee_neet_online_price.style.display = 'block';
  jee_neet_offline_price.style.display = 'none';
  jee_neet_offline.style.opacity = '0.6';

  jee_neet_checkbox.addEventListener('change', function () {
    if (jee_neet_checkbox.checked) {
      console.log('Checked');
      jee_neet_offline.style.opacity = '1';
      jee_neet_online.style.opacity = '0.6';
      jee_neet_offline_price.style.display = 'block';
      jee_neet_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      jee_neet_online.style.opacity = '1';
      jee_neet_offline.style.opacity = '0.6';
      jee_neet_online_price.style.display = 'block';
      jee_neet_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('jee-neet-getCode').addEventListener('click', () => {
  var x = document.getElementById('jee-neet-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('jee-neet-online-price').innerHTML = '18,000';
    document.getElementById('jee-neet-offline-price').innerHTML = '20,000';
    document.getElementById('jee-neet-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('jee-neet-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('jee-neet-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('jee-neet-online-price').innerHTML = '18,500';
      document.getElementById('jee-neet-offline-price').innerHTML = '20,500';
      document.getElementById('jee-neet-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('jee-neet-success-message').innerHTML = '';
    }
  }
});

// ******************************************************************PSYCHOLOGY*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var psychology_online = document.getElementById('psychology-online');
  var psychology_offline = document.getElementById('psychology-offline');
  var psychology_online_price = document.getElementById(
    'psychology-online-price'
  );
  var psychology_offline_price = document.getElementById(
    'psychology-offline-price'
  );
  var psychology_checkbox = document.getElementById('psychology-checkbox');

  psychology_online_price.style.display = 'block';
  psychology_offline_price.style.display = 'none';
  psychology_offline.style.opacity = '0.6';

  psychology_checkbox.addEventListener('change', function () {
    if (psychology_checkbox.checked) {
      console.log('Checked');
      psychology_offline.style.opacity = '1';
      psychology_online.style.opacity = '0.6';
      psychology_offline_price.style.display = 'block';
      psychology_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      psychology_online.style.opacity = '1';
      psychology_offline.style.opacity = '0.6';
      psychology_online_price.style.display = 'block';
      psychology_offline_price.style.display = 'none';
    }
  });
});
document.getElementById('psychology-getCode').addEventListener('click', () => {
  var x = document.getElementById('psychology-code').value;
  console.log(x);
  if (x === 'Tarun2021') {
    document.getElementById('psychology-online-price').innerHTML = '18,000';
    document.getElementById('psychology-offline-price').innerHTML = '20,000';
    document.getElementById('psychology-success-message').innerHTML =
      'Coupon code applied successfully.';
    document.getElementById('psychology-message').innerHTML =
      'Coupon discount: ₹500';
    console.log('Success');
  } else {
    if (x === '') {
      document.getElementById('psychology-message').innerHTML =
        'Please Enter Code!!!';
    } else {
      document.getElementById('psychology-online-price').innerHTML = '18,500';
      document.getElementById('psychology-offline-price').innerHTML = '20,500';
      document.getElementById('psychology-message').innerHTML =
        'Invalid Coupon Code!!!';
      document.getElementById('psychology-success-message').innerHTML = '';
    }
  }
});

// *****************************************************************************************************************888
// *****************************************************************************************************************888
// *****************************************************************************************************************888
// *****************************************************************************************************************888

// document.addEventListener('DOMContentLoaded', function () {
//   var online_2 = document.getElementById('online-2');
//   var offline_2 = document.getElementById('offline-2');
//   var online_price_2 = document.getElementById('online-price-2');
//   var offline_price_2 = document.getElementById('offline-price-2');
//   var checkbox_2 = document.getElementById('checkbox-2');

//   online_price_2.style.display = 'block';
//   offline_price_2.style.display = 'none';

//   checkbox_2.addEventListener('change', function () {
//     if (checkbox_2.checked) {
//       console.log('Checked');
//       offline_2.style.opacity = '1';
//       online_2.style.opacity = '0.6';
//       offline_price_2.style.display = 'block';
//       online_price_2.style.display = 'none';
//     } else {
//       console.log('Not checked');
//       online_2.style.opacity = '1';
//       offline_2.style.opacity = '0.6';
//       online_price_2.style.display = 'block';
//       offline_price_2.style.display = 'none';
//     }
//   });
// });
// document.getElementById('getCode2').addEventListener('click', () => {
//   var x = document.getElementById('code2').value;
//   console.log(x);
//   if (x === 'Tarun2021') {
//     // var price = document.getElementById('card-price-total').textContent;
//     document.getElementById('online-price-2').innerHTML = '3500';
//     document.getElementById('offline-price-2').innerHTML = '3000';
//     document.getElementById('success-message2').innerHTML =
//       'Coupon code applied successfully.';
//     document.getElementById('message2').innerHTML =
//       'Coupon discount: ₹500 Discounted total: ₹3500';
//     console.log('Success');
//   } else {
//     if (x === '') {
//       document.getElementById('message2').innerHTML = 'Please Enter Code!!!';
//     } else {
//       document.getElementById('online-price-2').innerHTML = '4000';
//       document.getElementById('offline-price-2').innerHTML = '3500';
//       document.getElementById('message2').innerHTML = 'Invalid Coupon Code!!!';
//       document.getElementById('success-message2').innerHTML = '';
//     }
//   }
// });

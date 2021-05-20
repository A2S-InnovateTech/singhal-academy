document.getElementById('IX-live').style.display = 'none';
document.getElementById('X-live').style.display = 'none';
document.getElementById('XI-live').style.display = 'none';
document.getElementById('XII-live').style.display = 'none';
document.getElementById('JEE-NEET-live').style.display = 'none';
document.getElementById('PSYCHOLOGY-live').style.display = 'none';

var live;

document.querySelectorAll('.live')[0].addEventListener('click', function () {
  live = 'IX';
  document.getElementById('IX-live').style.display = 'block';
  document.getElementById('X-live').style.display = 'none';
  document.getElementById('XI-live').style.display = 'none';
  document.getElementById('XII-live').style.display = 'none';
  document.getElementById('JEE-NEET-live').style.display = 'none';
  document.getElementById('PSYCHOLOGY-live').style.display = 'none';
});

document.querySelectorAll('.live')[1].addEventListener('click', function () {
  live = 'X';
  document.getElementById('IX-live').style.display = 'none';
  document.getElementById('X-live').style.display = 'block';
  document.getElementById('XI-live').style.display = 'none';
  document.getElementById('XII-live').style.display = 'none';
  document.getElementById('JEE-NEET-live').style.display = 'none';
  document.getElementById('PSYCHOLOGY-live').style.display = 'none';
});

document.querySelectorAll('.live')[2].addEventListener('click', function () {
  live = 'XI';
  document.getElementById('IX-live').style.display = 'none';
  document.getElementById('X-live').style.display = 'none';
  document.getElementById('XI-live').style.display = 'block';
  document.getElementById('XII-live').style.display = 'none';
  document.getElementById('JEE-NEET-live').style.display = 'none';
  document.getElementById('PSYCHOLOGY-live').style.display = 'none';
});

document.querySelectorAll('.live')[3].addEventListener('click', function () {
  live = 'XII';
  document.getElementById('IX-live').style.display = 'none';
  document.getElementById('X-live').style.display = 'none';
  document.getElementById('XI-live').style.display = 'none';
  document.getElementById('XII-live').style.display = 'block';
  document.getElementById('JEE-NEET-live').style.display = 'none';
  document.getElementById('PSYCHOLOGY-live').style.display = 'none';
});

document.querySelectorAll('.live')[4].addEventListener('click', function () {
  live = 'XII';
  document.getElementById('IX-live').style.display = 'none';
  document.getElementById('X-live').style.display = 'none';
  document.getElementById('XI-live').style.display = 'none';
  document.getElementById('XII-live').style.display = 'none';
  document.getElementById('JEE-NEET-live').style.display = 'block';
  document.getElementById('PSYCHOLOGY-live').style.display = 'none';
});

document.querySelectorAll('.live')[5].addEventListener('click', function () {
  live = 'XII';
  document.getElementById('IX-live').style.display = 'none';
  document.getElementById('X-live').style.display = 'none';
  document.getElementById('XI-live').style.display = 'none';
  document.getElementById('XII-live').style.display = 'none';
  document.getElementById('JEE-NEET-live').style.display = 'none';
  document.getElementById('PSYCHOLOGY-live').style.display = 'block';
});

// ******************************************************************IXth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_IX_science_online = document.getElementById(
    'live-IX-science-online'
  );
  var live_IX_science_offline = document.getElementById(
    'live-IX-science-offline'
  );
  var live_IX_science_online_price = document.getElementById(
    'live-IX-science-online-price'
  );
  var live_IX_science_offline_price = document.getElementById(
    'live-IX-science-offline-price'
  );
  var live_IX_science_checkbox = document.getElementById(
    'live-IX-science-checkbox'
  );

  live_IX_science_online_price.style.display = 'block';
  live_IX_science_offline_price.style.display = 'none';
  live_IX_science_offline.style.opacity = '0.6';

  live_IX_science_checkbox.addEventListener('change', function () {
    if (live_IX_science_checkbox.checked) {
      console.log('Checked');
      live_IX_science_offline.style.opacity = '1';
      live_IX_science_online.style.opacity = '0.6';
      live_IX_science_offline_price.style.display = 'block';
      live_IX_science_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_IX_science_online.style.opacity = '1';
      live_IX_science_offline.style.opacity = '0.6';
      live_IX_science_online_price.style.display = 'block';
      live_IX_science_offline_price.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var live_IX_maths_online = document.getElementById('live-IX-maths-online');
  var live_IX_maths_offline = document.getElementById('live-IX-maths-offline');
  var live_IX_maths_online_price = document.getElementById(
    'live-IX-maths-online-price'
  );
  var live_IX_maths_offline_price = document.getElementById(
    'live-IX-maths-offline-price'
  );
  var live_IX_maths_checkbox = document.getElementById(
    'live-IX-maths-checkbox'
  );

  live_IX_maths_online_price.style.display = 'block';
  live_IX_maths_offline_price.style.display = 'none';
  live_IX_maths_offline.style.opacity = '0.6';

  live_IX_maths_checkbox.addEventListener('change', function () {
    if (live_IX_maths_checkbox.checked) {
      console.log('Checked');
      live_IX_maths_offline.style.opacity = '1';
      live_IX_maths_online.style.opacity = '0.6';
      live_IX_maths_offline_price.style.display = 'block';
      live_IX_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_IX_maths_online.style.opacity = '1';
      live_IX_maths_offline.style.opacity = '0.6';
      live_IX_maths_online_price.style.display = 'block';
      live_IX_maths_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-IX-maths-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-IX-maths-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-IX-maths-online-price').innerHTML =
        '18,000';
      document.getElementById('live-IX-maths-offline-price').innerHTML =
        '20,000';
      document.getElementById('live-IX-maths-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-IX-maths-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-IX-maths-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-IX-maths-online-price').innerHTML =
          '18,500';
        document.getElementById('live-IX-maths-offline-price').innerHTML =
          '20,500';
        document.getElementById('live-IX-maths-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-IX-maths-success-message').innerHTML = '';
      }
    }
  });

// ******************************************************************Xth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_X_science_online = document.getElementById('live-X-science-online');
  var live_X_science_offline = document.getElementById(
    'live-X-science-offline'
  );
  var live_X_science_online_price = document.getElementById(
    'live-X-science-online-price'
  );
  var live_X_science_offline_price = document.getElementById(
    'live-X-science-offline-price'
  );
  var live_X_science_checkbox = document.getElementById(
    'live-X-science-checkbox'
  );

  live_X_science_online_price.style.display = 'block';
  live_X_science_offline_price.style.display = 'none';
  live_X_science_offline.style.opacity = '0.6';

  live_X_science_checkbox.addEventListener('change', function () {
    if (live_X_science_checkbox.checked) {
      console.log('Checked');
      live_X_science_offline.style.opacity = '1';
      live_X_science_online.style.opacity = '0.6';
      live_X_science_offline_price.style.display = 'block';
      live_X_science_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_X_science_online.style.opacity = '1';
      live_X_science_offline.style.opacity = '0.6';
      live_X_science_online_price.style.display = 'block';
      live_X_science_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-X-science-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-X-science-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      // var price = document.getElementById('card-price-total').textContent;
      document.getElementById('live-X-science-online-price').innerHTML =
        '18,000';
      document.getElementById('live-X-science-offline-price').innerHTML =
        '20,000';
      document.getElementById('live-X-science-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-X-science-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-X-science-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-X-science-online-price').innerHTML =
          '18,500';
        document.getElementById('live-X-science-offline-price').innerHTML =
          '20,500';
        document.getElementById('live-X-science-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-X-science-success-message').innerHTML =
          '';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  var live_X_maths_online = document.getElementById('live-X-maths-online');
  var live_X_maths_offline = document.getElementById('live-X-maths-offline');
  var live_X_maths_online_price = document.getElementById(
    'live-X-maths-online-price'
  );
  var live_X_maths_offline_price = document.getElementById(
    'live-X-maths-offline-price'
  );
  var live_X_maths_checkbox = document.getElementById('live-X-maths-checkbox');

  live_X_maths_online_price.style.display = 'block';
  live_X_maths_offline_price.style.display = 'none';
  live_X_maths_offline.style.opacity = '0.6';

  live_X_maths_checkbox.addEventListener('change', function () {
    if (live_X_maths_checkbox.checked) {
      console.log('Checked');
      live_X_maths_offline.style.opacity = '1';
      live_X_maths_online.style.opacity = '0.6';
      live_X_maths_offline_price.style.display = 'block';
      live_X_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_X_maths_online.style.opacity = '1';
      live_X_maths_offline.style.opacity = '0.6';
      live_X_maths_online_price.style.display = 'block';
      live_X_maths_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-X-maths-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-X-maths-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-X-maths-online-price').innerHTML = '18,000';
      document.getElementById('live-X-maths-offline-price').innerHTML =
        '20,000';
      document.getElementById('live-X-maths-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-X-maths-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-X-maths-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-X-maths-online-price').innerHTML =
          '18,500';
        document.getElementById('live-X-maths-offline-price').innerHTML =
          '20,500';
        document.getElementById('live-X-maths-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-X-maths-success-message').innerHTML = '';
      }
    }
  });

// ******************************************************************XIth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_XI_maths_online = document.getElementById('live-XI-maths-online');
  var live_XI_maths_offline = document.getElementById('live-XI-maths-offline');
  var live_XI_maths_online_price = document.getElementById(
    'live-XI-maths-online-price'
  );
  var live_XI_maths_offline_price = document.getElementById(
    'live-XI-maths-offline-price'
  );
  var live_XI_maths_checkbox = document.getElementById(
    'live-XI-maths-checkbox'
  );

  live_XI_maths_online_price.style.display = 'block';
  live_XI_maths_offline_price.style.display = 'none';
  live_XI_maths_offline.style.opacity = '0.6';

  live_XI_maths_checkbox.addEventListener('change', function () {
    if (live_XI_maths_checkbox.checked) {
      console.log('Checked');
      live_XI_maths_offline.style.opacity = '1';
      live_XI_maths_online.style.opacity = '0.6';
      live_XI_maths_offline_price.style.display = 'block';
      live_XI_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XI_maths_online.style.opacity = '1';
      live_XI_maths_offline.style.opacity = '0.6';
      live_XI_maths_online_price.style.display = 'block';
      live_XI_maths_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XI-maths-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XI-maths-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XI-maths-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XI-maths-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XI-maths-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XI-maths-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XI-maths-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XI-maths-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XI-maths-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XI-maths-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-XI-maths-success-message').innerHTML = '';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  var live_XI_physics_online = document.getElementById(
    'live-XI-physics-online'
  );
  var live_XI_physics_offline = document.getElementById(
    'live-XI-physics-offline'
  );
  var live_XI_physics_online_price = document.getElementById(
    'live-XI-physics-online-price'
  );
  var live_XI_physics_offline_price = document.getElementById(
    'live-XI-physics-offline-price'
  );
  var live_XI_physics_checkbox = document.getElementById(
    'live-XI-physics-checkbox'
  );

  live_XI_physics_online_price.style.display = 'block';
  live_XI_physics_offline_price.style.display = 'none';
  live_XI_physics_offline.style.opacity = '0.6';

  live_XI_physics_checkbox.addEventListener('change', function () {
    if (live_XI_physics_checkbox.checked) {
      console.log('Checked');
      live_XI_physics_offline.style.opacity = '1';
      live_XI_physics_online.style.opacity = '0.6';
      live_XI_physics_offline_price.style.display = 'block';
      live_XI_physics_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XI_physics_online.style.opacity = '1';
      live_XI_physics_offline.style.opacity = '0.6';
      live_XI_physics_online_price.style.display = 'block';
      live_XI_physics_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XI-physics-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XI-physics-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XI-physics-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XI-physics-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XI-physics-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XI-physics-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XI-physics-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XI-physics-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XI-physics-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XI-physics-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-XI-physics-success-message').innerHTML =
          '';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  var live_XI_chemistry_online = document.getElementById(
    'live-XI-chemistry-online'
  );
  var live_XI_chemistry_offline = document.getElementById(
    'live-XI-chemistry-offline'
  );
  var live_XI_chemistry_online_price = document.getElementById(
    'live-XI-chemistry-online-price'
  );
  var live_XI_chemistry_offline_price = document.getElementById(
    'live-XI-chemistry-offline-price'
  );
  var live_XI_chemistry_checkbox = document.getElementById(
    'live-XI-chemistry-checkbox'
  );

  live_XI_chemistry_online_price.style.display = 'block';
  live_XI_chemistry_offline_price.style.display = 'none';
  live_XI_chemistry_offline.style.opacity = '0.6';

  live_XI_chemistry_checkbox.addEventListener('change', function () {
    if (live_XI_chemistry_checkbox.checked) {
      console.log('Checked');
      live_XI_chemistry_offline.style.opacity = '1';
      live_XI_chemistry_online.style.opacity = '0.6';
      live_XI_chemistry_offline_price.style.display = 'block';
      live_XI_chemistry_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XI_chemistry_online.style.opacity = '1';
      live_XI_chemistry_offline.style.opacity = '0.6';
      live_XI_chemistry_online_price.style.display = 'block';
      live_XI_chemistry_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XI-chemistry-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XI-chemistry-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XI-chemistry-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XI-chemistry-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XI-chemistry-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XI-chemistry-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XI-chemistry-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XI-chemistry-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XI-chemistry-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XI-chemistry-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-XI-chemistry-success-message').innerHTML =
          '';
      }
    }
  });

// ******************************************************************XIIth class*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_XII_maths_online = document.getElementById('live-XII-maths-online');
  var live_XII_maths_offline = document.getElementById(
    'live-XII-maths-offline'
  );
  var live_XII_maths_online_price = document.getElementById(
    'live-XII-maths-online-price'
  );
  var live_XII_maths_offline_price = document.getElementById(
    'live-XII-maths-offline-price'
  );
  var live_XII_maths_checkbox = document.getElementById(
    'live-XII-maths-checkbox'
  );

  live_XII_maths_online_price.style.display = 'block';
  live_XII_maths_offline_price.style.display = 'none';
  live_XII_maths_offline.style.opacity = '0.6';

  live_XII_maths_checkbox.addEventListener('change', function () {
    if (live_XII_maths_checkbox.checked) {
      console.log('Checked');
      live_XII_maths_offline.style.opacity = '1';
      live_XII_maths_online.style.opacity = '0.6';
      live_XII_maths_offline_price.style.display = 'block';
      live_XII_maths_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XII_maths_online.style.opacity = '1';
      live_XII_maths_offline.style.opacity = '0.6';
      live_XII_maths_online_price.style.display = 'block';
      live_XII_maths_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XII-maths-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XII-maths-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XII-maths-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XII-maths-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XII-maths-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XII-maths-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XII-maths-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XII-maths-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XII-maths-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XII-maths-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-XII-maths-success-message').innerHTML =
          '';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  var live_XII_physics_online = document.getElementById(
    'live-XII-physics-online'
  );
  var live_XII_physics_offline = document.getElementById(
    'live-XII-physics-offline'
  );
  var live_XII_physics_online_price = document.getElementById(
    'live-XII-physics-online-price'
  );
  var live_XII_physics_offline_price = document.getElementById(
    'live-XII-physics-offline-price'
  );
  var live_XII_physics_checkbox = document.getElementById(
    'live-XII-physics-checkbox'
  );

  live_XII_physics_online_price.style.display = 'block';
  live_XII_physics_offline_price.style.display = 'none';
  live_XII_physics_offline.style.opacity = '0.6';

  live_XII_physics_checkbox.addEventListener('change', function () {
    if (live_XII_physics_checkbox.checked) {
      console.log('Checked');
      live_XII_physics_offline.style.opacity = '1';
      live_XII_physics_online.style.opacity = '0.6';
      live_XII_physics_offline_price.style.display = 'block';
      live_XII_physics_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XII_physics_online.style.opacity = '1';
      live_XII_physics_offline.style.opacity = '0.6';
      live_XII_physics_online_price.style.display = 'block';
      live_XII_physics_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XII-physics-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XII-physics-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XII-physics-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XII-physics-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XII-physics-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XII-physics-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XII-physics-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XII-physics-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XII-physics-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XII-physics-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById('live-XII-physics-success-message').innerHTML =
          '';
      }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  var live_XII_chemistry_online = document.getElementById(
    'live-XII-chemistry-online'
  );
  var live_XII_chemistry_offline = document.getElementById(
    'live-XII-chemistry-offline'
  );
  var live_XII_chemistry_online_price = document.getElementById(
    'live-XII-chemistry-online-price'
  );
  var live_XII_chemistry_offline_price = document.getElementById(
    'live-XII-chemistry-offline-price'
  );
  var live_XII_chemistry_checkbox = document.getElementById(
    'live-XII-chemistry-checkbox'
  );

  live_XII_chemistry_online_price.style.display = 'block';
  live_XII_chemistry_offline_price.style.display = 'none';
  live_XII_chemistry_offline.style.opacity = '0.6';

  live_XII_chemistry_checkbox.addEventListener('change', function () {
    if (live_XII_chemistry_checkbox.checked) {
      console.log('Checked');
      live_XII_chemistry_offline.style.opacity = '1';
      live_XII_chemistry_online.style.opacity = '0.6';
      live_XII_chemistry_offline_price.style.display = 'block';
      live_XII_chemistry_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_XII_chemistry_online.style.opacity = '1';
      live_XII_chemistry_offline.style.opacity = '0.6';
      live_XII_chemistry_online_price.style.display = 'block';
      live_XII_chemistry_offline_price.style.display = 'none';
    }
  });
});
document
  .getElementById('live-XII-chemistry-getCode')
  .addEventListener('click', () => {
    var x = document.getElementById('live-XII-chemistry-code').value;
    console.log(x);
    if (x === 'Tarun2021') {
      document.getElementById('live-XII-chemistry-online-price').innerHTML =
        '20,000';
      document.getElementById('live-XII-chemistry-offline-price').innerHTML =
        '22,000';
      document.getElementById('live-XII-chemistry-success-message').innerHTML =
        'Coupon code applied successfully.';
      document.getElementById('live-XII-chemistry-message').innerHTML =
        'Coupon discount: ₹500';
      console.log('Success');
    } else {
      if (x === '') {
        document.getElementById('live-XII-chemistry-message').innerHTML =
          'Please Enter Code!!!';
      } else {
        document.getElementById('live-XII-chemistry-online-price').innerHTML =
          '20,500';
        document.getElementById('live-XII-chemistry-offline-price').innerHTML =
          '22,500';
        document.getElementById('live-XII-chemistry-message').innerHTML =
          'Invalid Coupon Code!!!';
        document.getElementById(
          'live-XII-chemistry-success-message'
        ).innerHTML = '';
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

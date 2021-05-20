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

// ******************************************************************JEE / NEET*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_jee_neet_online = document.getElementById('live-jee-neet-online');
  var live_jee_neet_offline = document.getElementById('live-jee-neet-offline');
  var live_jee_neet_online_price = document.getElementById(
    'live-jee-neet-online-price'
  );
  var live_jee_neet_offline_price = document.getElementById(
    'live-jee-neet-offline-price'
  );
  var live_jee_neet_checkbox = document.getElementById(
    'live-jee-neet-checkbox'
  );

  live_jee_neet_online_price.style.display = 'block';
  live_jee_neet_offline_price.style.display = 'none';
  live_jee_neet_offline.style.opacity = '0.6';

  live_jee_neet_checkbox.addEventListener('change', function () {
    if (live_jee_neet_checkbox.checked) {
      console.log('Checked');
      live_jee_neet_offline.style.opacity = '1';
      live_jee_neet_online.style.opacity = '0.6';
      live_jee_neet_offline_price.style.display = 'block';
      live_jee_neet_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_jee_neet_online.style.opacity = '1';
      live_jee_neet_offline.style.opacity = '0.6';
      live_jee_neet_online_price.style.display = 'block';
      live_jee_neet_offline_price.style.display = 'none';
    }
  });
});

// ******************************************************************PSYCHOLOGY*****************************************************************************

document.addEventListener('DOMContentLoaded', function () {
  var live_psychology_online = document.getElementById(
    'live-psychology-online'
  );
  var live_psychology_offline = document.getElementById(
    'live-psychology-offline'
  );
  var live_psychology_online_price = document.getElementById(
    'live-psychology-online-price'
  );
  var live_psychology_offline_price = document.getElementById(
    'live-psychology-offline-price'
  );
  var live_psychology_checkbox = document.getElementById(
    'live-psychology-checkbox'
  );

  live_psychology_online_price.style.display = 'block';
  live_psychology_offline_price.style.display = 'none';
  live_psychology_offline.style.opacity = '0.6';

  live_psychology_checkbox.addEventListener('change', function () {
    if (live_psychology_checkbox.checked) {
      console.log('Checked');
      live_psychology_offline.style.opacity = '1';
      live_psychology_online.style.opacity = '0.6';
      live_psychology_offline_price.style.display = 'block';
      live_psychology_online_price.style.display = 'none';
    } else {
      console.log('Not checked');
      live_psychology_online.style.opacity = '1';
      live_psychology_offline.style.opacity = '0.6';
      live_psychology_online_price.style.display = 'block';
      live_psychology_offline_price.style.display = 'none';
    }
  });
});

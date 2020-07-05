/**
 * @param {Array} [h(°),s(%),v(%)]
 * @return {String} 'rgb(255,0,0)'
 */
function hsv2rgb(h, s, v) {
  console.log(`h=${h},s=${s},v=${v}`)
  let hsv_h = (h / 360).toFixed(2);
  let hsv_s = (s / 255).toFixed(2);
  let hsv_v = (v / 255).toFixed(2);

  let i = Math.floor(hsv_h * 6);
  let f = hsv_h * 6 - i;
  let p = hsv_v * (1 - hsv_s);
  let q = hsv_v * (1 - f * hsv_s);
  let t = hsv_v * (1 - (1 - f) * hsv_s);

  let rgb_r = 0,
    rgb_g = 0,
    rgb_b = 0;
  switch (i % 6) {
    case 0:
      rgb_r = hsv_v;
      rgb_g = t;
      rgb_b = p;
      break;
    case 1:
      rgb_r = q;
      rgb_g = hsv_v;
      rgb_b = p;
      break;
    case 2:
      rgb_r = p;
      rgb_g = hsv_v;
      rgb_b = t;
      break;
    case 3:
      rgb_r = p;
      rgb_g = q;
      rgb_b = hsv_v;
      break;
    case 4:
      rgb_r = t;
      rgb_g = p;
      rgb_b = hsv_v;
      break;
    case 5:
      rgb_r = hsv_v, rgb_g = p, rgb_b = q;
      break;
  }
  return 'rgb(' + (Math.floor(rgb_r * 255) + "," + Math.floor(rgb_g * 255) + "," + Math.floor(rgb_b * 255)) + ')';
}

module.exports = {
  hsv2rgb: hsv2rgb
}
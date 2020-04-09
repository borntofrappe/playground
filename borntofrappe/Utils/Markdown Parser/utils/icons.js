const icons = {
  html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></svg>`,
  css: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z" stroke-width=".42"/></svg>`,
  js: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></svg>`,
	permalink: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g transform="rotate(-53)" stroke-width="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none"><path stroke-dasharray="145 26" stroke-dashoffset="-16" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /><path transform="scale(-1 -1)" stroke-dasharray="145 26" stroke-dashoffset="-16" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /></g></svg>`,
  bug: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g stroke="currentColor"  stroke-linejoin="round" stroke-linecap="round"><g transform="scale(0.8)"><g stroke-width="16" fill="none"><g transform="translate(0 13.5)"><path d="M 34 0 h -68"/><path transform="rotate(45)" d="M 40 0 h -80"/><path transform="rotate(-45)" d="M 40 0 h -80"/></g></g><g stroke-width="8" fill="currentColor"><path  d="M -0 -46 a 17 17 0 0 1 17 17 h -34 a 17 17 0 0 1 17 -17" /><path  d="M -0 -10 h 25 v 25 a 25 25 0 0 1 -50 0 v -25 z" /></g></g></g></svg>`,
};

module.exports.getIcon = (icon, size = 42) =>
  icons[icon]
    ? icons[icon].replace(
        /width="\d+"\s+height="\d+"/,
        `width="${size}" height="${size}"`
      )
    : icons.bug.replace(
        /width="\d+"\s+height="\d+"/,
        `width="${size}" height="${size}"`
      );

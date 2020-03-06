<script>
  export let icon = "";
  export let size = 32;
</script>

{#if icon ==="search"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <circle r="36" cx="-10" cy="-10" />
    <path stroke-width="10" d="M 45 45 l -22 -22" />
    <path stroke-width="4" d="M 23 23 l -5 -5" />
  </g>
</svg>
{:else if icon === "idea"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -16 14 a 32 32 0 1 1 32 0 v 3 a 8 8 0 0 1 -8 8 h -16 a 8 8 0 0 1 -8 -8 z" />
    <g stroke-width="7">
      <path d="M -10 28 h 20" />
      <path d="M -8 37.25 h 16" />
      <path d="M -4 46.5 h 8" />
    </g>
  </g>
</svg>
{:else if icon === "pencil"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <g transform="rotate(45)">
      <path d="M -7 -55 h 14 a 8 8 0 0 1 8 8 v 10 h -30 v -10 a 8 8 0 0 1 8 -8" />
      <path d="M -15 -24 v 74 l 15 15 15 -15 v -74 z" />
    </g>
  </g>
</svg>
{:else if icon ==="copy"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 6 -46 h -36 a 10 10 0 0 0 -10 10 v 40" />
    <path d="M 30 -30 h -44 a 10 10 0 0 0 -10 10 v 56 a 10 10 0 0 0 10 10 h 44 a 10 10 0 0 0 10 -10 v -56 a 10 10 0 0 0 -10 -10" />
  </g>
</svg>

{:else if icon ==="share"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="currentColor">
    <circle r="15" stroke="none" cx="22.5" cy="-35" />
    <circle r="15" stroke="none" cx="-27.5" cy="0" />
    <circle r="15" stroke="none" cx="22.5" cy="35" />
  </g>
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path stroke-width="10" d="M 22.5 -35 l -45 35 45 35" />
  </g>
</svg>

{:else if icon ==="hat"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path stroke-width="8" d="M 0 -26 l -46 16 46 16 46 -16 z" />
    <g stroke-width="7">
      <path d="M -26 -1 v 20 a 52 52 0 0 0 52 0 v -20" />
      <path fill="currentColor" d="M 40 -4 v 25 c -4 5 -5 12 0 14 c 5 -2 5 -9 0 -14 " />
    </g>
  </g>
</svg>
{:else if icon === "certificate"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path stroke-width="8" d="M -46 -32 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -16 m -44 0 h -16 a 8 8 0 0 1 -8 -8 v -54" />
    <g stroke-width="7">
      <path d="M -25 -18 h 50" />
      <circle cx="0" cy="13" r="15" />
      <path d="M -10 26 v 16.5 l 10 -5 10 5 v -16.5" />
    </g>
  </g>
  <g fill="currentColor" stroke="none">
    <circle r="8" cx="-40" cy="-34" />
    <circle transform="scale(-1 1)" r="8" cx="-40" cy="-34" />
    <circle r="8" cx="-40" cy="24" />
    <circle transform="scale(-1 1)" r="8" cx="-40" cy="24" />
  </g>
</svg>
{:else if icon === "book"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <g stroke-width="8">
      <path d="M 0 -20 a 16 16 0 0 1 16 -16 h 22 a 8 8 0 0 1 8 8 v 50 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 0 -8 8 8 8 0 0 0 -8 -8 h -30 a 8 8 0 0 1 -8 -8 v -50 a 8 8 0 0 1 8 -8 h 22 a 16 16 0 0 1 16 16" />
      <path d="M 0 -20 v 50" />
    </g>
    <g stroke-width="7">
      <path d="M -30 -18 h 15" />
      <path transform="scale(-1 1)" d="M -30 -18 h 15" />
      <path d="M -30 -3 h 15" />
      <path transform="scale(-1 1)" d="M -30 -3 h 15" />
      <path d="M -30 12 h 15" />
      <path transform="scale(-1 1)" d="M -30 12 h 15" />
    </g>
  </g>
</svg>

{:else if icon === 'html'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-.65 11.051H-14.3l.65 11.049H24.7l-1.95 33.15L0 32.5l-22.75-9.75-.65-11.051h11.051l.325 5.525L0 22.426l12.025-5.202L13 .65h-37.05L-26-32.5z" />
</svg>
{:else if icon === 'css'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-3.25 55.25L0 32.5l-22.75-9.75-.65-11.051h11.05l.325 5.525L0 22.426l12.025-5.202L12.999.65h-37.05L-24.7-10.4h38.35l.65-11.05h-39.65L-26-32.5z" />
</svg>
{:else if icon === 'js'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <path
    fill="currentColor"
    d="M-50-50V50h39c-8.777 0-16-7.223-16-16v-5h10v5c0 3.373 2.627 6 6 6s6-2.627 6-6V0H5v34c0 8.777-7.223 16-16 16h21V40h15c2.82 0 5-2.18 5-5s-2.18-5-5-5c-8.225 0-15-6.775-15-15S16.775 0 25 0h13v10H25c-2.82 0-5 2.18-5 5s2.18 5 5 5c8.225 0 15 6.775 15 15s-6.775 15-15 15h25V-50H-50z"
  />
</svg>
{:else if icon === 'svg'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-width="8" fill="currentColor">
    <path d="M0 0v36a5 5 0 010 10 5 5 0 010-10v-72a5 5 0 010-10 5 5 0 010 10" />
    <path d="M0 0l-25.456 25.456a5 5 0 01-7.07 7.07 5 5 0 017.07-7.07l50.912-50.912a5 5 0 017.07-7.07 5 5 0 01-7.07 7.07" />
    <path d="M0 0h-36a5 5 0 01-10 0 5 5 0 0110 0h72a5 5 0 0110 0 5 5 0 01-10 0" />
    <path d="M0 0l-25.456-25.456a5 5 0 01-7.07-7.07 5 5 0 017.07 7.07l50.912 50.912a5 5 0 017.07 7.07 5 5 0 01-7.07-7.07" />
  </g>
</svg>
{:else if icon === 'react'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke="currentColor" fill="none" stroke-width="8">
    <ellipse transform="rotate(30)" rx="18" ry="46" />
    <ellipse transform="rotate(-30)" rx="18" ry="46" />
    <ellipse transform="rotate(90)" rx="18" ry="46" />
  </g>
  <circle r="8" fill="currentColor" />
</svg>
{:else if icon === 'd3'}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 100 100">
  <path
    d="M38.461 5A54.67 54.67 0 0158.69 25h13.811c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5h-7.873a53.544 53.544 0 011.373 12c0 2.717-.207 5.388-.6 8h7.1c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5H60.81a54.598 54.598 0 01-16.268 20h27.959c15.069 0 27.5-12.431 27.5-27.5 0-6.656-2.52-12.717-6.527-17.5C97.48 45.217 100 39.156 100 32.5c0-15.069-12.431-27.5-27.5-27.5H38.462z"
    fill="currentColor"
  />
  <path d="M0 15h10a35 35 0 010 70H0" fill="none" stroke="currentColor" stroke-width="20" />
</svg>

{:else if icon ==="like"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M 0 -15 c 5 -30 45 -30 45 0 q 0 25 -45 55 q -45 -30 -45 -55 c 0 -30 40 -30 45 0" />
  </g>
</svg>
{:else if icon === "comment"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M -9.5 25 a 35.5 35.5 0 0 1 0 -71 h 15 a 40 40 0 0 1 40 40 q 0 25 -54.5 52 v -20z" />
  </g>
</svg>
{:else if icon === "retweet"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M -10 -30 h 34 a 10 10 0 0 1 10 10 v 45 l 12 -12 m -12 12 l -12 -12" />
    <path transform="rotate(180)" d="M -10 -30 h 34 a 10 10 0 0 1 10 10 v 45 l 12 -12 m -12 12 l -12 -12" />
  </g>
</svg>
{:else if icon ==="direct-message"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M -46 -27 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" />
    <path d="M -46 -20 l 46 23 46 -23" />
  </g>
</svg>
{:else if icon ==="notification-bell"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M 0 -46 a 30 30 0 0 1 30 30 v 20 a 13 13 0 0 1 0 25 h -60 a 13 13 0 0 1 0 -25 v -20 a 30 30 0 0 1 30 -30" />
    <path d="M 15 31 a 15 15 0 0 1 -30 0" />
  </g>
</svg>
{:else if icon ==="bookmark"}

<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M -24 -46 h 48 a 8 8 0 0 1 8 8 v 84 l -32 -24 -32 24 v -84 a 8 8 0 0 1 8 -8" />
  </g>
</svg>

{:else if icon ==="repository"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -30 -46 h 60 a 8 8 0 0 1 8 8 v 70 a 8 8 0 0 1 -8 8 h -21 m -27 0 h -12 a 8 8 0 0 1 -8 -8 v -70 a 8 8 0 0 1 8 -8 v 65 h 68" />
    <path d="M -15 -30 h 2" />
    <path d="M -15 -15 h 2" />
    <path d="M -15 0 h 2" />
    <path stroke-width="7" d="M -15 30 v 16.5 l 10 -5 10 5 v -16.5 z" />
  </g>
</svg>
{:else if icon === "branch"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <circle r="15" cx="-14" cy="-31" />
    <circle r="15" cx="-14" cy="31" />
    <circle stroke-width="7" r="12" cx="30" cy="-23" />
    <path d="M -14 16 V -16" />
    <path d="M -14 16 a 12 12 0 0 1 12 -12 h 18 a 14 14 0 0 0 14 -14" />
  </g>
</svg>
{:else if icon === "pull-request"}

<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <circle r="15" cx="-24" cy="-31" />
    <circle r="15" cx="-24" cy="31" />
    <circle r="15" cx="24" cy="31" />
    <path d="M -24 16 V -16" />
    <path d="M 24 16 V -16 q 0 -15 -20 -20" />
    <path transform="translate(4 -36) rotate(-20)" d="M 0 0 h 18" />
    <path transform="translate(4 -36) rotate(70)" d="M 0 0 h 18" />
  </g>
</svg>

{:else if icon === "code"}
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="-50 -50 100 100">
  <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M -24 -22 l -22 22 22 22" />
    <path d="M 10 -30 L -10 30" />
    <path transform="rotate(180)" d="M -24 -22 l -22 22 22 22" />
  </g>
</svg>
{/if}

<script>
  export let left = false;
  export let copy;
  export let href;
</script>

<a class:left {href}>
  {copy}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <g transform="rotate(90)">
        <path stroke-width="0" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
        <g stroke-width="7">
          <path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" />
          <circle r="9" cy="-11" />
        </g>
        <path fill="none" stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
      </g>
    </g>
  </svg>
</a>

<style>
  a {
    --transition-duration: 0.5s;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    outline: none;
    position: relative;
  }

  a:after {
    outline: 0.1rem solid currentColor;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
  }
  a:focus:after {
    opacity: 1;
  }

  a:before {
    margin-top: 0.75em;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0%;
    height: 0.1em;
    width: 100%;
    content: "";
    background: currentColor;
    transform-origin: 0% 50%;
    transform: translate(0%, -50%) scale(0);
    transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }
  a:hover:before,
  a:focus:before {
    transform: translate(0%, -50%) scale(1);
  }

  a svg {
    pointer-events: none;
    margin: 0.75em 0.5rem;
    position: absolute;
    top: 100%;
    left: 0%;
    width: 100%;
    height: 1.5em;
    transform: translate(-50%, -50%);
    transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }
  a svg > g {
    fill: hsl(0, 0%, 97%);
    fill: var(--body-background);
  }
  a:hover svg,
  a:focus svg {
    transform: translate(50%, -50%);
  }

  @media (min-width: 42rem) {
    a.left:before {
      transform-origin: 100% 50%;
    }
    a.left svg {
      transform: translate(100%, -50%);
      right: 50%;
      left: initial;
    }
    a.left svg > g {
      transform: scaleX(-1);
    }
    a.left:hover svg,
    a.left:focus svg {
      transform: translate(0%, -50%);
    }
  }
</style>

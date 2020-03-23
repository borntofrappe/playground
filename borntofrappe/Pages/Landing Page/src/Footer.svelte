<footer>
  <a href="https://twitter.com/borntofrappe">@borntofrappe</a>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="32" height="32">
    <g stroke-width="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="currentColor">
      <path transform="scale(0.8)" d="M 0 -11.25 a 22.5 22.5 0 0 1 45 0 q 0 25 -45 50 q -45 -25 -45 -50 a 22.5 22.5 0 0 1 45 0" />
    </g>
  </svg>
</footer>

<style>
  footer {
    --animation-duration: 2s;
    --animation-timing-function: var(--ease-in-out-sine);
    --accent-color: var(--accent-4);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-100 -50 200 50'%3E%3Cdefs%3E%3Cpattern id='pattern-background' patternUnits='userSpaceOnUse' viewBox='-5 -5 10 10' width='1' height='1'%3E%3Cg fill='hsl(0, 0%25, 0%25)'%3E%3Ccircle r='1'/%3E%3Ccircle r='1' cx='5' cy='5'/%3E%3Ccircle r='1' cx='-5' cy='5'/%3E%3Ccircle r='1' cx='5' cy='-5'/%3E%3Ccircle r='1' cx='-5' cy='-5'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Cellipse fill='hsl(230, 30%25, 10%25)' rx='180' ry='50' /%3E%3Cellipse fill='url(%23pattern-background)' opacity='0.2' rx='180' ry='50' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 300%;
    background-position-x: 50%;
    padding: 3rem 1rem 2rem;
    text-align: center;
    position: relative;
    margin-top: 2rem;
  }

  footer a {
    color: hsl(0, 0%, 97%);
    color: var(--body-background);
    background: hsl(230, 30%, 10%);
    background: var(--body-color);
    font-family: "Maven Pro", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    border-bottom: 0.1rem solid var(--accent-4);
  }

  footer svg {
    position: absolute;
    top: 0%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    display: block;
    transform: translate(-50%, -50%);
    padding: 0.5rem;

    color: hsl(230, 30%, 10%);
    color: var(--body-color);
    background: hsl(0, 0%, 97%);
    background: var(--body-background);

    border: 0.4rem solid currentColor;
    border-radius: 50%;
    transition: color 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--transition-timing-function);
  }

  footer svg g {
    animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
    animation: heart-beat var(--animation-duration) var(--animation-timing-function) infinite;
    animation-play-state: paused;
  }

  @keyframes heart-beat {
    10%,
    30% {
      transform: scale(0.8);
    }
    0%,
    20%,
    40% {
      transform: scale(1);
    }
  }

  footer a:hover + svg,
  footer a:focus + svg {
    color: hsl(342, 80%, 50%);
    color: var(--accent-color);
  }
  footer a:hover + svg g,
  footer a:focus + svg g {
    animation-play-state: running;
  }

  @media (prefers-reduced-motion: reduce) {
    footer a:hover + svg g,
    footer a:focus + svg g,
    footer svg:hover g {
      animation-play-state: paused;
    }
  }

  footer svg:hover {
    color: hsl(342, 80%, 50%);
    color: var(--accent-color);
  }
</style>

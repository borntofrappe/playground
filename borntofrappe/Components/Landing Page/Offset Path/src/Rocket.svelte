<script>
  export let i = 0;

  const east = i % 2 === 0;
  let rocket;
  let observed = false;

  $: {
    if (window.IntersectionObserver && rocket) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            observed = entry.isIntersecting;
            if (observed) {
              observer.unobserve(rocket);
            }
          });
        },
        { threshold: 0 }
      );
      observer.observe(rocket);
    }
  }
  $: console.log(observed);
</script>

<style>
  div {
    min-height: 7rem;
    overflow-x: hidden;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 3rem;
    height: 3rem;
    display: block;
    transform: translate(400px, 0);
  }
  svg.east {
    transform: translate(-400px, 0);
  }
  div.observed svg {
    animation: update-transform 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
  }
  @keyframes update-transform {
    100% {
      transform: translate(0, 0);
    }
  }
  @supports (offset-distance: 0%) {
    svg {
      offset-distance: 0%;
      offset-path: path("m 400 0 q -100 50 -200 0 t -200 0 t -200 0 t -200 0");
      transform: translate(-50%, -50%);
    }
    svg.east {
      offset-path: path("m -400 0 q 100 50 200 0 t 200 0 t 200 0 t 200 0");
      transform: translate(50%, 50%);
    }
    svg.east > g {
      transform: rotate(90deg);
    }
    div.observed svg {
      animation: update-distance 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
    }
    @keyframes update-distance {
      100% {
        offset-distance: 50%;
      }
    }
  }
</style>

<div bind:this="{rocket}" class:observed>
  <svg class:east xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42">
    <g transform="{east ? 'rotate(-90)' : 'rotate(90)'}">
      <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
        <path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
        <g stroke-width="7">
          <path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" />
          <circle r="9" cy="-11" />
        </g>
      </g>
    </g>
  </svg>
</div>

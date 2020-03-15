<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let size = 100;

  let canvas;

  $: if (canvas) {
    // without a timeout the paint operation would be overwritten by the change in size
    const timeout = setTimeout(() => {
      const context = canvas.getContext("2d");
      // context.clearRect(0, 0, size, size);
      // context.save();
      context.translate(size / 2, size / 2);
      context.scale(1.85 * (size / 100), 1.85 * (size / 100));
      context.lineWidth = 8;
      context.strokeStyle = "hsl(0, 0%, 10%)";
      context.lineCap = "round";
      context.lineJoin = "round";

      const accent = new Path2D("M -10 -13 q 0 -8 -8 -10");
      context.setLineDash([14.01, 18.5]);
      context.lineDashOffset = -4.5;
      context.stroke(accent);

      const b = new Path2D("M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36");
      context.setLineDash([114.2, 146.28]);
      context.lineDashOffset = -9.145;
      context.stroke(b);

      // context.restore();

      dispatch("draw", canvas.toDataURL("image/png"));

      clearTimeout(timeout);
    });
  }
</script>

<style>
  canvas {
    margin: 2rem 0;
  }
</style>

<canvas bind:this="{canvas}" width="{size}" height="{size}"></canvas>

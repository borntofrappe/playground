<script>
  import getIcon from "./icons.js";

  let icon;
  let size = 100;
</script>

<style>
  form {
    line-height: 2;
    margin: 1rem 0;
  }
  label {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  input {
    font-size: 1.25rem;
    font-size: inherit;
    margin-left: 0.5rem;
    font-family: inherit;
    padding: 0.2rem 0.5rem;
    border: 2px solid currentColor;
    background: hsl(0, 0%, 100%);
  }
</style>

<form e:preventDefault>
  <label>
    Name ("html", "css", "js")
    <input type="text" bind:value="{icon}" />
  </label>
  <label>
    Default size
    <input type="number" bind:value="{size}" min="0" />
  </label>
</form>

{@html getIcon(icon, size)}

<template>
<div class="input">
  <p><slot></slot></p>
  <input :type="type" :name="name_field" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</div>
</template>

<script>
export default {
  name: "LoginInput",
  props: {
    modelValue: String,
    type: String,
    name_field: String,
  },
};
</script>

<style>
div.input {
  margin-bottom: 1em;
  width: 100%;
}

div.input > p {
  margin-bottom: 0.2em;
  font-size: 1.1em;
  text-align: left;
  width: 100%;
}

div.input > p:first-of-type {
  margin-top: 0;
}

div.input > input {
  border: solid black 0.1em;
  width: 100%;
}

div.input > input:hover {
  border: solid black 0.12em;
  background-color: #eeeeee;
}
</style>
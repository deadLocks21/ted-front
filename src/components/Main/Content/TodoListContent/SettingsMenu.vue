<template>
  <div id="settings_menu" v-show="$store.state.displayed_todolist.id != 0">
    <ion-icon
      name="ellipsis-vertical"
      class="bold"
      id="setting-button"
      @click="display_menu"
    />
    <div id="edit_delete_menu">
      <p @click="edit_todolist" v-if="!$store.state.edit">
        <ion-icon name="create"></ion-icon> Modifier la todolist
      </p>
      <div class="divider" v-if="!$store.state.edit"></div>
      <p @click="edit_todolist" v-if="$store.state.edit">
        <ion-icon name="close"></ion-icon> Fermer le mode édition
      </p>
      <div class="divider" v-if="$store.state.edit"></div>
      <p @click="delete_todolist">
        <ion-icon name="trash"></ion-icon> Supprimer la todolist
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsMenu",
  data() {
    return {
      top: 0,
      right: 0,
      opacity: 0,
      opacity_button: 0,
    };
  },
  methods: {
    display_menu() {
      if (this.top == 0 && this.right == 0) {
        var xPos = 0;
        var yPos = 0;
        var el = document.getElementById("setting-button");

        var b = el.getBoundingClientRect();
        xPos = b.x || b.left;
        yPos = b.y || b.top;

        this.top = yPos;
        this.top = `calc(${yPos}px + 3em)`;
        this.right = `calc(100% - ${xPos}px - 1em)`;
      }

      if (this.opacity == 0.0) this.opacity = 1;
      else this.opacity = 0;
    },
    edit_todolist() {
      this.$store.dispatch("setEditMode");
      this.display_menu();
    },
  },
};
</script>

<style scoped>
#settings_menu {
  padding: 1em;
  text-align: end;
}

div > ion-icon {
  width: 1.5em;
  height: 1.5em;
  padding-top: 1em;
  padding-right: 1em;
  cursor: pointer;
}

#edit_delete_menu {
  position: absolute;
  top: v-bind("top");
  right: v-bind("right");
  opacity: v-bind("opacity");
  background-color: #f6f3f0;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0.5em;
  border-radius: 5px;
}

#edit_delete_menu > p {
  margin: 0;
  text-align: center;
  cursor: pointer;
  padding: 0.2em;
}
#edit_delete_menu > .divider {
  height: 1px;
  border-radius: 1px;
  background-color: black;
}
</style>
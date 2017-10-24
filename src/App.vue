<template>
  <v-app class="blue-grey lighten-1">
    <v-navigation-drawer
      persistent
      floating
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
       class="blue-grey lighten-1"
    >
      <v-list class="blue lighten-2">
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          value="true"
          :href="item.href"
          class="blue lighten-2"
        >
          <v-list-tile-action>
            <v-icon class="white--text" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed flat app :clipped-left="clipped" class="blue lighten-1 white--text">
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn 
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon class="white--text" v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon class="white--text">web</v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    
    <main>
      <v-content>
        <v-container fluid >
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <router-view></router-view>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    
    <v-footer :fixed="fixed" app class="blue lighten-1 white--text">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { 
            icon: 'account_circle',
            title: 'Users',
            href: '/#/home',
            router: true
          },
          {
            icon: 'pets',
            title: 'Pets',
            href: '/#/pets',
            router: true
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

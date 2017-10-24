<template>
  <v-container class="pa-0">
    <v-container>
      <template>
        <v-layout row>
          <v-flex>
            <v-card>
              <v-toolbar>
              <v-toolbar-title> Welcome to the Vue Demo </v-toolbar-title>
              </v-toolbar>
              <v-container fluid>
                <v-card-text>
                  Welcome to the Vue Demo for the UW-Parkside App Factory. This will show how a basic Vue 
                  Single Page Application works. 

                  <br>
                  <br>
                  <h6>Data Binding Demo:</h6>
                  <v-text-field label="Enter a string" v-model="value"></v-text-field>
                  {{ value }}

                  <v-slider label="Number 1" v-model="num1" thumb-label></v-slider>
                  num1: {{ num1 }}
                  <v-slider label="Number 2" v-model="num2" thumb-label></v-slider>
                  num2: {{ num2 }}
                  <br>
                  <h6>Sum = {{ num1 + num2 }}</h6>
                </v-card-text>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: "",
    num1: 0,
    num2: 0
  })

}
</script>

<style>

</style>

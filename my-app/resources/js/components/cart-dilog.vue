<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Add to cart" id="add-cart"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Message" id="box" >
        <v-card-text style="color: green;">
          Your Item is add sucessfully in cart
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Ok" @click="isActive.value = false" style="border: 2px solid black"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
#add-cart {
  font-size: 10px;
  padding: 5px 5px 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 98, 98);
}
#add-cart:hover{
  color:#fff !important;
}
#box{
  padding: 30px 30px 30px 30px;
}
</style>
<template>
<!-- fluid -->
  <v-container fluid>
    <v-card class="pa-3">
      <!-- dense -->
      <!-- no-gutters -->
      <v-row  >
        <v-col cols="auto">
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    

    <v-card class="pa-3">
      <!-- dense -->
      <!-- no-gutters -->
      <v-row  :style="{height:'120px'}" class="red" align="start">
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
      </v-row>
      <v-row :style="{height:'120px'}" class="yellow" align="start">
        <v-col align-self="center">
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col align-self="start">
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
        <v-col align-self="end">
          <v-card class="pa-3" outlined>
            cp;
          </v-card>
        </v-col>
      </v-row>
    </v-card>





    <v-card class="pa-3">
      <!-- dense -->
      <!-- no-gutters -->
      <v-row justify="space-around">
          <v-col cols="auto">
            <v-card class="ap-3" outlined>Col</v-card>
          </v-col>
          <v-col cols="auto">
            <v-card class="ap-3" outlined>Col</v-card>
          </v-col>
          <v-col cols="auto">
            <v-card class="ap-3" outlined>Col</v-card>
          </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
  }
</script>

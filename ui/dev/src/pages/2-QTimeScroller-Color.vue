<template>
  <div class="q-pa-md row q-gutter-sm full-width">
    <div class="row full-width">
      <div class="text-h4">'time' Scroller</div>
    </div>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          text-color="yellow"
          color="primary"
          inner-text-color="yellow"
          inner-color="primary"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, vertical-bar, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          vertical-bar
          text-color="yellow"
          color="primary"
          inner-text-color="yellow"
          inner-color="primary"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, vertical-bar, bar-color, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          vertical-bar
          bar-color="yellow"
          text-color="yellow"
          color="primary"
          inner-text-color="yellow"
          inner-color="primary"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, vertical-bar, bar-color, border-color, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          vertical-bar
          bar-color="primary"
          border-color="primary"
          text-color="primary"
          color="yellow"
          inner-text-color="primary"
          inner-color="yellow"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, vertical-bar, hour12, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          vertical-bar
          hour12
          text-color="yellow"
          color="primary"
          inner-text-color="yellow"
          inner-color="primary"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        colored, vertical-bar, hour12, am-pm-labels, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="time"
          no-footer
          vertical-bar
          hour12
          :am-pm-labels="['a', 'p']"
          text-color="yellow"
          color="primary"
          inner-text-color="yellow"
          inner-color="primary"
          style="max-width: 150px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<template>
  <div class="q-pa-md row justify-evenly q-gutter-sm">

    <q-input color="blue-8" filled v-model="value" label="Enter date & time" mask="####-##-## ##:##">
      <template v-slot:append>
        <span>
          <q-icon name="far fa-calendar" class="cursor-pointer" />
          <q-icon name="far fa-clock" class="cursor-pointer" />
          <q-popup-proxy v-model="showScroller1" anchor="top right" self="bottom middle">
            <q-scroller
              v-model="value"
              view="date-time"
              no-header
              rounded-borders
              :style="scrollerPopupStyle200"
              @close="() => { showScroller1 = false }"
            />
          </q-popup-proxy>
        </span>
      </template>
    </q-input>

    <q-input color="blue-8" filled v-model="value" label="Enter date & time" mask="####-##-## ##:##">
      <template v-slot:append>
        <span>
          <q-icon name="far fa-calendar" class="cursor-pointer" />
          <q-icon name="far fa-clock" class="cursor-pointer" />
          <q-popup-proxy v-model="showScroller2" anchor="top right" self="bottom middle">
            <q-scroller
              v-model="value"
              view="date-time"
              vertical-bar
              :style="scrollerPopupStyle200"
              @close="() => { showScroller2 = false }"
            />
          </q-popup-proxy>
        </span>
      </template>
    </q-input>

    <q-input color="blue-8" filled v-model="value" label="Enter date & time" mask="####-##-## ##:##">
      <template v-slot:append>
        <span>
          <q-icon name="far fa-calendar" class="cursor-pointer" />
          <q-icon name="far fa-clock" class="cursor-pointer" />
          <q-popup-proxy v-model="showScroller3" anchor="top right" self="bottom middle">
            <q-scroller
              v-model="value"
              view="date-time"
              no-header
              vertical-bar
              bar-color="green"
              border-color="green"
              :style="scrollerPopupStyle200"
              @close="() => { showScroller3 = false }"
            />
          </q-popup-proxy>
        </span>
      </template>
    </q-input>

    <q-input color="blue-8" filled v-model="value" label="Enter date & time" mask="####-##-## ##:##">
      <template v-slot:append>
        <span>
          <q-icon name="far fa-calendar" class="cursor-pointer" />
          <q-icon name="far fa-clock" class="cursor-pointer" />
          <q-popup-proxy v-model="showScroller4" anchor="top right" self="bottom middle">
            <q-scroller
              v-model="value"
              view="date-time"
              rounded-borders
              no-border
              text-color="grey-3"
              color="black"
              inner-text-color="black"
              inner-color="grey-3"
              bar-color="#000"
              vertical-bar
              :style="scrollerPopupStyle200"
              @close="() => { showScroller4 = false }"
            />
          </q-popup-proxy>
        </span>
      </template>
    </q-input>

  </div>
</template>

<script>
export default {
  name: 'DateQInput',

  data () {
    return {
      showScroller1: false,
      showScroller2: false,
      showScroller3: false,
      showScroller4: false,
      value: ''
    }
  },

  computed: {
    scrollerPopupStyle200 () {
      if (this.$q.screen.lt.sm) {
        return {
          width: '90vw',
          height: '70vh'
        }
      } else {
        return {
          maxHeight: '200px',
          height: '200px',
          width: '200px'
        }
      }
    }
  }
}
</script>

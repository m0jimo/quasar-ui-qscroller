import props from '../utils/props'

export default {
  name: 'DateTimeBase',

  props: {
    ...props.common,
    ...props.base,
    ...props.locale,
    hour12: Boolean,
    amPmLabels: {
      type: Array,
      default: () => ['AM', 'PM'],
      validator: v => Array.isArray(v) && v.length === 2 && typeof v[0] === 'string' && typeof v[1] === 'string'
    }
  },

  data () {
    return {
      //
    }
  },

  computed: {
    //
  },

  methods: {
    //
  }
}
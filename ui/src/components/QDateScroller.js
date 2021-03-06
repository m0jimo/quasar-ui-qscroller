// Mixins
import Common from '../mixins/common'
import DateTimeBase from '../mixins/date-base'
import { QColorizeMixin } from 'q-colorize-mixin'

// Components
import ScrollerBase from '../mixins/scroller-base'

// Util
import props from '../utils/props'
import {
  Timestamp,
  parseTimestamp,
  parseDate,
  getDateObject,
  getDate,
  getTime,
  daysInMonth,
  copyTimestamp,
  compareTimestamps,
  padNumber,
  createNativeLocaleFormatter,
  DAYS_IN_MONTH_MAX
} from '../utils/timestamp'

/* @vue/component */
export default {
  name: 'QDateScroller',

  mixins: [DateTimeBase, QColorizeMixin, Common],

  props: {
    ...props.date,
    ...props.verticalBar,
    ...props.locale
  },

  data () {
    return {
      headerHeight: 50,
      footerHeight: 50,
      bodyHeight: 100,
      height: 0,
      year: '',
      month: '',
      day: '',
      timestamp: null,
      type: null,
      disabledYearsList: [],
      disabledMonthsList: [],
      disabledDaysList: []
    }
  },

  created () {
    this.timestamp = copyTimestamp(Timestamp)
  },

  beforeMount () {
    this.handleDisabledLists()
    this.splitDate()
  },

  mounted () {
    this.adjustBodyHeight()
  },

  computed: {
    slotData () {
      return this.timestamp
    },

    displayed () {
      return this.displayDate
    },

    daysList () {
      let length = daysInMonth(parseInt(this.year, 10), parseInt(this.month, 10))
      if (!this.year || !this.month) {
        length = DAYS_IN_MONTH_MAX
      }
      let data = []
      for (let index = 0; index < length; ++index) {
        data.push(index)
      }
      data = data.map(d => {
        ++d // days start with 1
        d = d < 10 ? '0' + d : '' + d
        return { value: d, disabled: this.disabledDaysList.includes(d) }
      })
      return data
    },

    monthsList () {
      let data = []
      for (let index = 0; index < 12; ++index) {
        data.push(index)
      }
      data = data.map(m => {
        ++m // Jan = 0
        const mon = this.showMonthLabel === true ? this.monthNameLabel(m) : void 0
        m = m < 10 ? '0' + m : '' + m
        return { display: mon, value: m, disabled: this.disabledMonthsList.includes(m) }
      })
      return data
    },

    yearsList () {
      let yearBegin = 0
      let yearStop = 0
      if (this.yearBegin && parseInt(this.yearBegin, 10) > 0) {
        yearBegin = parseInt(this.yearBegin, 10)
      }
      if (this.yearStop && parseInt(this.yearStop, 10) > 0) {
        yearStop = parseInt(this.yearStop, 10)
      }

      // if date range not given, calculate 5 before and 5 after years
      const d = new Date()
      const year = d.getFullYear()
      if (yearBegin === 0) {
        yearBegin = year - 5
      }
      if (yearStop === 0) {
        yearStop = year + 5
      }
      const dates = []
      let date = yearBegin
      while (date <= yearStop) {
        dates.push(padNumber(date++, 4))
      }
      return dates.map(y => {
        return { value: y, disabled: this.disabledYearsList.includes(y) }
      })
    },

    displayDate () {
      if (!this.locale) return ''
      if (!this.year || !this.month || !this.day) return ''
      if (this.timestamp.hasDay === false) return ''
      // year only
      if (this.noDays === true && this.noMonths === true) return this.yearFormatter(this.timestamp, this.shortYearLabel)
      // month only
      if (this.noDays === true && this.noYears === true) return this.monthFormatter(this.timestamp, this.shortMonthLabel)
      // day only
      if (this.noMonths === true && this.noYears === true) return this.dayFormatter(this.timestamp, this.shortDayLabel)
      // month and year
      if (this.noDays) return this.yearMonthFormatter(this.timestamp)
      // year and day
      if (this.noMonths) return this.yearDayFormatter(this.timestamp)
      // month and day
      if (this.noYears) return this.monthDayFormatter(this.timestamp)
      // everything else
      return this.dateFormatter(this.timestamp)
    },

    dateFormatter () {
      const year = this.shortYearLabel ? '2-digit' : 'numeric'
      const month = this.shortMonthLabel ? 'numeric' : '2-digit'
      const day = this.shortDayLabel ? 'numeric' : '2-digit'
      const options = { timeZone: 'UTC', year: year, month: month, day: day }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, _short) => options
      )
    },

    dayFormatter () {
      const options = { timeZone: 'UTC', day: 'numeric' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, _short) => options
      )
    },

    // showWeekdays = true
    weekdayFormatter () {
      const longOptions = { timeZone: 'UTC', weekday: 'long' }
      const shortOptions = { timeZone: 'UTC', weekday: 'short' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    monthFormatter () {
      const longOptions = { timeZone: 'UTC', month: 'long' }
      const shortOptions = { timeZone: 'UTC', month: 'short' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    yearFormatter () {
      const longOptions = { timeZone: 'UTC', year: 'numeric' }
      const shortOptions = { timeZone: 'UTC', year: '2-digit' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    yearMonthFormatter () {
      const longOptions = { timeZone: 'UTC', month: 'long', year: 'numeric' }
      const shortOptions = { timeZone: 'UTC', month: 'short', year: '2-digit' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    yearDayFormatter () {
      const longOptions = { timeZone: 'UTC', day: 'numeric', year: 'numeric' }
      const shortOptions = { timeZone: 'UTC', day: '2-digit', year: '2-digit' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    },

    yearMonthDayFormatter () {
      const options = { timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, _short) => options
      )
    },

    monthDayFormatter () {
      const longOptions = { timeZone: 'UTC', day: 'numeric', month: 'long' }
      const shortOptions = { timeZone: 'UTC', day: '2-digit', month: 'short' }

      return createNativeLocaleFormatter(
        this.locale,
        (_tms, short) => short ? shortOptions : longOptions
      )
    }
  },

  watch: {
    value () {
      this.splitDate()
    },

    year () {
      this.toTimestamp()
    },

    month (newMonth, oldMonth) {
      if (this.day > 28) {
        const nm = parseInt(newMonth, 10)
        const om = parseInt(oldMonth, 10)
        const year = parseInt(this.year, 10)
        // if the month changed and current day does not exist
        // then set to last day of the month. For instance,
        // Jan 31, then switched to Feb 28
        const oldDays = daysInMonth(year, om)
        const newDays = daysInMonth(year, nm)
        // the decision
        if (oldDays > newDays) {
          this.day = padNumber(newDays, 2)
        }
      }
      this.toTimestamp()
    },

    day () {
      this.toTimestamp()
    },

    disabledDays () {
      this.handleDisabledLists()
    },

    disabledMonths () {
      this.handleDisabledLists()
    },

    disabledYears () {
      this.handleDisabledLists()
    },

    timestamp: {
      handler (val, oldVal) {
        if (oldVal === null || val.date !== oldVal.date) {
          this.emitValue()
        }
      },
      deep: true
    }
  },

  methods: {
    getTimestamp () {
      return this.timestamp
    },

    emitValue () {
      switch (this.type) {
        case 'date':
          this.$emit('input', getDateObject(this.timestamp))
          return
        case 'array':
          this.$emit('input', [padNumber(this.timestamp.year, 2), padNumber(this.timestamp.month, 2), padNumber(this.timestamp.day, 2)])
          return
        case 'object':
          this.$emit('input', { year: padNumber(this.timestamp.year, 2), month: padNumber(this.timestamp.month, 2), day: padNumber(this.timestamp.day, 2) })
          return
        case 'string':
          this.$emit('input', [padNumber(this.timestamp.year, 2), padNumber(this.timestamp.month, 2), padNumber(this.timestamp.day, 2)].join('-'))
      }
    },

    handleDisabledLists () {
      this.disabledDaysList = []
      this.disabledMonthsList = []
      this.disabledYearsList = []

      this.disabledDays.forEach(d => this.disabledDaysList.push(padNumber(parseInt(d, 10), 2)))
      this.disabledMonths.forEach(m => this.disabledMonthsList.push(padNumber(parseInt(m, 10), 2)))
      this.disabledYears.forEach(h => this.disabledYearsList.push(padNumber(parseInt(h, 10), 4)))
    },

    splitDate () {
      const type = Object.prototype.toString.call(this.value)
      let now, date
      switch (type) {
        case '[object Date]':
          this.type = 'date'
          now = parseDate(this.value)
          date = getDate(now) + ' ' + getTime(now)
          this.timestamp = parseTimestamp(date)
          this.fromTimestamp()
          return
        case '[object Array]':
          this.type = 'array'
          // 1st item is year, 2nd item is month, 3rd item is day
          now = parseDate(new Date())
          now.year = parseInt(this.value[0], 10)
          now.month = parseInt(this.value[1], 10)
          now.day = parseInt(this.value[2], 10)
          date = getDate(now) + ' ' + getTime(now)
          this.timestamp = parseTimestamp(date)
          this.fromTimestamp()
          return
        case '[object Object]':
          this.type = 'object'
          // object must contain keys 'year', 'month', 'day'
          now = parseDate(new Date())
          now.year = parseInt(this.value.year, 10)
          now.month = parseInt(this.value.month, 10)
          now.day = parseInt(this.value.day, 10)
          date = getDate(now) + ' ' + getTime(now)
          this.timestamp = parseTimestamp(date)
          this.fromTimestamp()
          return
        case '[object String]':
          // use today's date and time
          this.type = 'string'
          now = parseDate(new Date())
          if (this.value) {
            const tm = parseTimestamp(this.value)
            now.year = tm.year
            now.month = tm.month
            now.day = tm.day
          }
          date = getDate(now) + ' ' + getTime(now)
          this.timestamp = parseTimestamp(date)
          this.fromTimestamp()
          return
      }
      if (this.value !== '') {
        /* eslint-disable-next-line */
        console.error(`QDateScroller: invalid date format - '${this.value}'`)
      }
    },

    fromTimestamp () {
      this.day = padNumber(this.timestamp.day, 2)
      this.month = padNumber(this.timestamp.month, 2)
      this.year = padNumber(this.timestamp.year, 4)
    },

    toTimestamp () {
      const timestamp = copyTimestamp(this.timestamp)
      this.timestamp.day = parseInt(this.day, 10)
      this.timestamp.month = parseInt(this.month, 10)
      this.timestamp.year = parseInt(this.year, 10)
      if (!compareTimestamps(timestamp, this.timestamp)) {
        this.emitValue()
      }
    },

    // passed month needs to be 1-based
    monthNameLabel (month) {
      const now = parseDate(new Date())
      const date = getDate(now) + ' 00:00'
      const timestamp = parseTimestamp(date)
      timestamp.day = 1
      timestamp.month = parseInt(month, 10)
      return this.monthFormatter(timestamp, this.shortMonthLabel)
    },

    // -------------------------------
    // render functions
    // -------------------------------
    __renderYearsScroller (h) {
      let maxWidth = '60%'
      if (this.noDays === true && this.noMonths === true) maxWidth = '100%'

      return h(ScrollerBase, {
        staticClass: 'col',
        class: {
          'q-scroller__vertical-bar': this.verticalBar === true
        },
        style: {
          maxWidth: maxWidth
        },
        props: {
          value: this.year,
          items: this.yearsList,
          dense: this.dense,
          disable: this.disable,
          height: this.bodyHeight,
          textColor: this.innerTextColor,
          color: this.innerColor,
          disabledTextColor: this.disabledTextColor
        },
        on: {
          input: (val) => { this.year = val }
        }
      })
    },

    __renderMonthsScroller (h) {
      let maxWidth = '30%'
      if (this.noYears === true && this.noDays === true) maxWidth = '100%'
      else if (this.noDays === true && this.noYears !== true) maxWidth = '40%'
      else if (this.noYears === true) maxWidth = '50%'

      return h(ScrollerBase, {
        staticClass: 'col',
        class: {
          'q-scroller__vertical-bar': this.verticalBar === true
        },
        style: {
          maxWidth: maxWidth
        },
        props: {
          value: this.month,
          items: this.monthsList,
          dense: this.dense,
          disable: this.disable,
          height: this.bodyHeight,
          textColor: this.innerTextColor,
          color: this.innerColor,
          disabledTextColor: this.disabledTextColor
        },
        on: {
          input: (val) => { this.month = val }
        }
      })
    },

    __renderDaysScroller (h) {
      let maxWidth = '30%'
      if (this.noYears === true && this.noMonths === true) maxWidth = '100%'
      else if (this.noMonths === true && this.noYears !== true) maxWidth = '40%'
      else if (this.noYears === true) maxWidth = '50%'

      return h(ScrollerBase, {
        staticClass: 'col',
        style: {
          maxWidth: maxWidth
        },
        props: {
          value: this.day,
          items: this.daysList,
          dense: this.dense,
          disable: this.disable,
          height: this.bodyHeight,
          textColor: this.innerTextColor,
          color: this.innerColor,
          disabledTextColor: this.disabledTextColor
        },
        on: {
          input: (val) => { this.day = val }
        }
      })
    },
    __renderScrollers (h) {
      return [
        this.noYears !== true && this.__renderYearsScroller(h),
        this.noMonths !== true && this.__renderMonthsScroller(h),
        this.noDays !== true && this.__renderDaysScroller(h)
      ]
    }
  }
}

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22a1b7"],{dffe:function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      minute-interval="5"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      hour-interval="2"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-minutes\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      no-hours\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeIntervals\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'}}]);
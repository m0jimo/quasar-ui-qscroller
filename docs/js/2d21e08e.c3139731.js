(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d21e08e"],{d49a:function(e,n,l){"use strict";l.r(n),n["default"]='<template>\n  <div class="q-pa-md row justify-evenly q-gutter-sm">\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      disable\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      dense\n      disable\n      style="max-width: 80px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      :disabled-hours="[1,2,3,4,5,6]"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n    <q-scroller\n      v-model="value"\n      view="time"\n      no-footer\n      :disabled-minutes="[10,12,14,16,18,20]"\n      style="max-width: 100px; height: 200px;"\n    ></q-scroller>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'TimeDisabled\',\n\n  data () {\n    return {\n      value: \'\'\n    }\n  }\n}\n<\/script>\n'}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{e56f:function(n,e,l){"use strict";l.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-evenly q-gutter-sm\">\n    <div>\n      <q-select filled v-model=\"locale\" :options=\"options\" label=\"Filled\" style=\"max-width: 200px;\"/>\n      <q-scroller\n        v-model=\"value\"\n        view=\"date\"\n        no-footer\n        :local=\"locale\"\n        style=\"max-width: 200px; height: 200px;\"\n      ></q-scroller>\n    </div>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DateLocale',\n\n  data () {\n    return {\n      value: '',\n      locale: 'en-us',\n      options: [\n        'en-us', 'fr', 'ro', 'se', 'ru', 'ar', 'ca'\n      ]\n    }\n  }\n}\n<\/script>\n"}}]);
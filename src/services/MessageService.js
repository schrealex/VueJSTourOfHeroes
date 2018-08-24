import Vue from "vue";

import { HEROES } from "../mockdata/mock-heroes";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

export default {
  messages: [],
  add(message) {
    this.messages.push(message);
  },
  clear() {
    this.messages = [];
  }
};

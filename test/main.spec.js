//@flow
"use strict";

import {test} from "tape";
import {hello} from "../src/main";

test("Test the module", function(t) {

  t.ok(typeof hello === "function",
      "Function hello is imported.");

  t.equal(hello("world"), "Hello, world!", "Hello, World!");

  t.end();

});

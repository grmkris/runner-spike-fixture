import { test } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply } from "../src/math.mjs";

test("add", () => {
  assert.equal(add(2, 3), 5);
});

test("subtract", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(1, 2), -1);
  assert.equal(subtract(0, 0), 0);
  assert.equal(subtract(-1, -1), 0);
});

test("multiply", () => {
  assert.equal(multiply(3, 4), 12);
  assert.equal(multiply(-2, 5), -10);
});

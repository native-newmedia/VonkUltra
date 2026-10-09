/**
 * Live source for the shipped homepage's node counts (imported by src/pages/index.js) —
 * despite the name, this is not just a prototype leftover; update it whenever nodes are
 * added or removed under docs/reference/**, or the homepage totals go stale.
 *
 * Measured from docs/reference/** (see 01-content-inventory/README.md).
 * Still hardcoded rather than generated at build time — the global CategoryCards derives
 * its counts from the sidebar, which isn't available outside a docs category page. See
 * remaining-work.md §B for the open TODO to make this build-time instead.
 */

export const MOG_COUNTS = {
  Array: 192,
  JSON: 192,
  ScriptVal: 192,
  Number: 7,
  Matrix: 3,
  HTML: 3,
};

export const CORE_COUNTS = {
  Text: 88,
  Number: 83,
  ScriptVal: 61,
  Array: 29,
  Matrix: 25,
  Point: 25,
  Gradient: 21,
  Image: 18,
  FileSystem: 17,
  JSON: 14,
  Vector: 14,
  Base64: 7,
  Meta: 7,
  '3D': 5,
  Guide: 5,
  CBOR: 4,
  Color: 3,
  MTLX: 3,
  Shape: 2,
  USD: 2,
  XML: 3,
  YAML: 1,
};

export const sum = (counts) => Object.values(counts).reduce((a, b) => a + b, 0);

export const TOTAL = sum(MOG_COUNTS) + sum(CORE_COUNTS);
export const DATA_TYPE_COUNT = Object.keys(MOG_COUNTS).length + Object.keys(CORE_COUNTS).length;

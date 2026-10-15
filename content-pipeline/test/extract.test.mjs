import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFuse, stripLuaComments } from '../lib/extract.mjs';

const fx = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures_commented.fuse');

test('parameters after a commented-out AddInput are kept', () => {
  const ids = parseFuse(fx, 'T', 'T').params.map((p) => p.id);
  assert.deepEqual(ids, ['Before', 'After', 'Str']);
});

test('old behaviour (no strip) loses them, so the test guards the bug', () => {
  const ids = parseFuse(fx, 'T', 'T', { strip: false }).params.map((p) => p.id);
  assert.notDeepEqual(ids, ['Before', 'After', 'Str']);
});

test('strings containing -- are untouched and offsets are stable', () => {
  const src = 'x = "a--b" -- gone\ny = 1';
  const out = stripLuaComments(src);
  assert.equal(out.length, src.length);
  assert.ok(out.includes('"a--b"'));
  assert.ok(!out.includes('gone'));
});

# Content pipeline

One record per operation holds the written text. The fuse supplies everything else on every build.

```
content/mograph/<Operation>.yml   one record shared by vArray<Op>, vScriptVal<Op>, vJSON<Op> (Matrix/Number/HTML: by tool name)
content/core/<Tool>.yml           one record per Core tool
lib/extract.mjs                   fuse parser (Lua comments stripped first)
lib/ops.mjs                       operation model, rename resolution, fuse hash, sockets
lib/render.mjs                    record + fuse -> MDX page
render-pages.mjs                  renders all pages (default: _render/, --apply: docs/reference/)
check-content.mjs                 quality and staleness report -> _report/check.md
mark-reviewed.mjs                 mark records reviewed and store the fuse hash
migrate/                          one-time importers (01 rich JSON, 02 summaries + Docsify, 03 Core pages)
(removed) legacy/ was moved out of the repo; migrate/01 and 02 are one-time imports and need those sources to re-run
test/                             node --test test/extract.test.mjs
```

## Record

```
operation: Buffer                 # Core records use `tool:` instead
tools: {Array: vArrayBuffer, ScriptVal: vScriptValBuffer, JSON: vJSONBuffer}
legacy_names: []
curated:
  tagline, overview, description[], features[{title,desc}], connections[{label,lines[]}],
  difficulty, related[{name,desc}],
  params: {<control ID>: text}    # keyed by control ID, never by label
legacy_text: original unsplit text, kept until reviewed
status: {source, state: imported | imported-unverified | ai | reviewed, reviewed_hash}
```

Example connections are written with Array names; the renderer swaps the family prefix for ScriptVal and JSON pages.

## Commands

```
node --test test/extract.test.mjs
node render-pages.mjs [--only vArrayBuffer]    # to _render/ for diffing
node render-pages.mjs --apply                  # into docs/reference/
node check-content.mjs [--strict]
node mark-reviewed.mjs mograph/Buffer core/v3DToFile
node tools_audit_comments.mjs "<Vonk Ultra root>"
```

Set `VU_ROOT` to use another fuse tree.

## Workflow for a tool

1. Edit the fuse. The page parameters follow it automatically.
2. `check-content.mjs`: records whose fuse changed after review show up as stale; new controls show up as "no text".
3. Write or update the record (AI pass or by hand), keyed by control ID.
4. `mark-reviewed.mjs` stores the fuse hash. Later fuse changes then flag the record again.
5. `render-pages.mjs --apply`, check the site build.

## Known limits

- Controls whose ID is built in a loop (`"Text" .. i`) are flagged `dynamic` and not rendered as rows yet.
- Core records were imported from the existing pages: the original lead block is in `legacy_text`, split mechanically into tagline and description. All are `imported-unverified`.
- Relative page links come from where each page lives today; a new tool needs its page file to exist first (use the old generators once, or add the file by hand).

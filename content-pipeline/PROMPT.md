# AI pass prompt

Version: 1

Use this for one function group at a time (for example Mograph Create). Output is a draft per operation in `_drafts/<Op>.yml`, merged with `node apply-curated.mjs`.

## Inputs to read for each operation
1. The Array fuse (and the ScriptVal and JSON fuses if the behavior may differ): `Create()` for controls, `Process()` for behavior.
2. The existing record `content/mograph/<Op>.yml`: tagline, overview, parameter text, `legacy_text`.
3. The checker output for the record (`_report/check.md`).

## Rules
- Describe what the code does today. If the registered description (`REGS_OpDescription`) or old text disagrees with `Process()`, follow the code and record the mismatch in `note`.
- Never invent behavior. Do not state units, ranges, or defaults that are not in the fuse. Hidden controls (`IC_Visible = false`) are labelled as hidden.
- Plain, factual prose. No em dashes. No promotional wording (seamless, powerful, leverage, robust, unlock, essential, foundation, and similar). No claims about what a node is "perfect for".
- Write text that holds for all three families. Use Array tool names in examples; the renderer swaps the prefix. Mention the ScriptVal or JSON output type only if it matters.
- Mesh nodes (Mesh Points input) read the mesh through vmeshutils.buildSurfaceSamples. It uses only the vertex list: one sample per vertex, the closest point is the closest vertex, the normal is fitted to the 8 nearest vertices and points away from the mesh centroid, and the patch samples (second argument true) are averages of a vertex and its 7 nearest neighbors. Do not describe triangles, faces or face normals.
- Do not mention Show Input unless the fuse still has a control with ID `ShowInput`.

## Fields (curated block)
- `tagline`: one sentence, 160 characters at most.
- `overview`: two sentences. What goes in, what comes out, the one control that matters most.
- `description`: 500 to 900 characters in total (all paragraphs together), 2 to 4 paragraphs. Cut formulas and edge cases that the parameter table already states. Order: what the node computes (with the formula when short), what the defaults produce, the controls that interact, limits and edge cases, typical use.
- `features`: exactly 4 `{title, desc}` tiles, each a verifiable property of the node.
- `connections`: 2 or 3 examples `{label, lines[]}`. Line form `Tool.Socket -> Tool.Socket`. Sockets are the labels shown in Fusion (`Input`, `Output`, `Point`). Only tools and sockets that exist today (the checker verifies). Non-vTool nodes (Background, Merge) are allowed.
- `difficulty`: Beginner (few controls, no other node needed), Intermediate (needs another node or a concept such as projection or meshes), Advanced (multi-input, state, or several interacting modes).
- `related`: 3 tools `{name, desc}`, each with one sentence on how it relates.
- `params`: a text for every control ID, keyed by ID. One or two sentences: what it does, unit or range if the fuse sets one.
- `note` (draft level, optional): mismatches found between code and old text, for the reviewer.

## After the pass
`node apply-curated.mjs _drafts/*.yml`, then `node check-content.mjs`, render a few pages with `node render-pages.mjs --only <Tool>`, review, then `node mark-reviewed.mjs mograph/<Op>`.

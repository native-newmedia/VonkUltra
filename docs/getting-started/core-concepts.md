---
sidebar_position: 4
title: Core Concepts
description: "The mental model behind Vonk Ultra: typed data flowing through nodes, Mograph vs Core, and a naming convention that doubles as the index."
---

# Core Concepts

Vonk Ultra is a data-flow toolset. Every node takes a value in, transforms it, and passes it on — and a pipeline is those transformations chained end to end. Get that model in place and the [Reference](/docs/reference) stops reading as 1026 unrelated tools.

## Everything is one of a handful of data types

There are **1026 nodes** in this reference, but only **28 data types**. Every node is named for the type it works with, so `vArrayPointsOnCircle` produces an Array and `vTextCaseAlternate` produces Text. The type is the "shape" of the value on the wire, and it decides what can connect to what.

| Data type | Nodes | What travels on the wire | A node that shows it |
|---|---|---|---|
| **Array** | 221 | Numeric tables — most often XYZ point clouds | `vArrayPointsOnCircle`, `vArrayFromOBJ` |
| **JSON** | 206 | The same data, held as structured JSON | `vJSONFromArray`, `vJSONCreateFont` |
| **ScriptVal** | 253 | Fusion's opaque script-data type, passed between script-driven nodes | `vScriptValFromArray` |
| **Number** | 90 | A single scalar value | `vNumberFromArray` |
| **Text** | 88 | Strings | `vTextCaseAlternate` |
| **Matrix** | 28 | 4×4 transform matrices | `vMatrixCreateTRS` |
| **Point** | 25 | A Fusion Point object | `vPointCreate` |
| **Gradient** | 21 | Gradient definitions | `vGradientFromArray` |
| **Image** | 18 | Pixel data | `vImageCreateTiles` |
| **FileSystem** | 17 | File and folder paths, and operations on them | `vFileSystemChmod` |
| **Vector** | 14 | A 2D/3D vector value | `vVectorFromArray` |
| **Color** | 3 | RGBA colour values, including palette arrays | `vColorJuggler` |

The remaining 42 nodes sit in smaller types — **Base64**, **CBOR**, **Guide**, **HTML**, **Meta**, **MTLX**, **Shape**, **USD**, **XML**, **YAML** and `3D`. Most of these exist to cross a boundary: decoding a file, reading a scene object, writing a value back out. That's why you meet them at the edges of a pipeline rather than in the middle of one.

## Mograph and Core: two families, one idea

The reference is split into two tool families, and the split is about intent, not data types:

- **Core** — 437 general-purpose nodes. The original Vonk toolset, covering data handling across the board: text, numbers, colour, files, images, metadata.
- **Mograph** — 589 nodes purpose-built for motion graphics pipelines. Same data types, tuned for geometry and animation work.

They overlap heavily, and that is deliberate. Mograph ships **the same toolset three times over** — once each for Array, JSON and ScriptVal — so the operation you want exists in whichever representation your data already happens to be:

```
vArrayMaterialEasing     vJSONMaterialEasing     vScriptValMaterialEasing
vArrayCameraProjection   vJSONCameraProjection   vScriptValCameraProjection
vArrayPointsOnCircle     vJSONPointsOnCircle     vScriptValPointsOnCircle
```

189 node names exist in all three families. If you know `vArrayBoundingBox`, you already know `vJSONBoundingBox`. Reach for the family that matches the data in hand rather than converting between them.

## The naming convention is also the index

Every node carries a type prefix — `vArray*`, `vJSON*`, `vText*`, `vMatrix*`. That one rule does three jobs:

1. **It sorts the Reference.** The navigation axis is data type → function group → node, which is why this site is organised the way it is.
2. **It groups the nodes in Fusion's own picker.** Because they share a prefix, typing `vJSON` into the Select Tool dialog (Shift + Spacebar) lists every JSON node in one pass.
3. **It tells you what connects where.** Two nodes interoperate when their types match.

## Nodes compose — the pipeline is the program

A single node is rarely interesting; the value is in the chain. Vonk nodes behave as modifiers, so a pipeline recalculates on every frame and stays live as you animate — there is no bake step and no scripting required.

The most repeated chain in this entire reference is the Mograph render pipeline, and it is worth knowing by heart before reading anything else:

```
vArrayPointsOnCircle.Output     -> vArrayCameraProjection.ArrayA
vArrayCameraProjection.Output   -> vArrayShapeRender.ArrayPoint
Background.Output               -> vArrayShapeRender.Input
```

A generator makes points, the projection node converts 3D world space into 2D screen space, and the render node draws at each position over a background. Every point generator plugs into that same middle-and-end pair, so learning the pattern once covers most of the family. [Your First Comp](./your-first-comp) builds exactly this.

## Vonk doesn't have to own the comp

Nodes can also drive an ordinary Fusion node from the outside. Right-click any Number or Text attribute in the Inspector and use **Connect To** to link it to a Vonk node in the flow — a `vNumberCreate` as a handheld offset, a `vTextCreate` as a subtitle source. Vonk does not need to be the renderer to be useful. See [Vonk Usage](../tutorials/vonk-usage) for where the nodes live in Fusion's menus.

## Where to go next

- [Your First Comp](./your-first-comp) — build the pipeline above, step by step.
- [Reference](/docs/reference) — the full node set, organised by data type.
- [Install](./install) — Reactor package manager setup, if you haven't installed Vonk yet.

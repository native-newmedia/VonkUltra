---
sidebar_position: 5
title: vArrayMatch
description: "Gets the value of a key in an array The \"Pattern\" text field uses [Lua Patterns](http://lua-users.org/wiki/PatternsTutorial) to isolate values from a JSON based Array object."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vArrayMatch

Gets the value of a key in an array The "Pattern" text field uses [Lua Patterns](http://lua-users.org/wiki/PatternsTutorial) to isolate values from a JSON based Array object. Additional information about patterns can be read in the [Lua manual](https://www.lua.org/manual/5.3/manual.html#6.4.1). "`cryptomatte/[a-z0-9]+/manifest`" is a vArrayMatch Pattern that can be used to access Cryptomatte manifest image metadata. This information can be read from an EXR image via a Loader -\> vArrayFromMetadata -\> vArrayMatch node graph connection process.

<div className="node-badge-row">
  <span className="node-badge">Core / Array</span>
  <span className="node-badge">Array</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/array/vArrayMatch.png" alt="vArrayMatch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | JSON array text to search. |
| Pattern | Text | `—` | A Lua pattern used to isolate matching values, e.g. `cryptomatte/[a-z0-9]+/manifest` to pull Cryptomatte manifest entries out of image metadata parsed via vArrayFromMetadata. |
| Show Input | Integer | `0.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vArrayConcatenate">vArrayConcatenate</a>
  <a className="node-chip" href="./vArrayCountElement">vArrayCountElement</a>
  <a className="node-chip" href="./vArrayCountSubElements">vArrayCountSubElements</a>
  <a className="node-chip" href="./vArrayJoin">vArrayJoin</a>
</div>

{/*
Generated page — node: vArrayMatch (Core/Array/Utility).
Source: fuse vArrayMatch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

---
sidebar_position: 2
title: v3DSlashCommand
description: "Run a Console Fuse SlashCommand as a node"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# v3DSlashCommand

Run a Console Fuse SlashCommand as a node

<div className="node-badge-row">
  <span className="node-badge">Core / 3D</span>
  <span className="node-badge">3D</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/3d/v3DSlashCommand.png" alt="v3DSlashCommand node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input 3D | DataType3D | `—` | 3D data passed through unchanged. |
| Text | Text | `—` | The Console Fuse SlashCommand to run, e.g. `/footage list`. See the examples row below. |
| Display Lines | Integer | `25` | Number of visible lines in the Text editor before scrolling. |
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Text editor instead of scrolling horizontally. |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| [=[SlashCommand Examples: /footage list  /for (selected\|visible\|all) [tooltype[ | Float | `—` | Example SlashCommand syntax shown for reference — not an editable control. (This row's label is a source-fuse quirk: the example text itself was passed as the parameter's display name, not a separate real parameter.) |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./v3DProcessOpen">v3DProcessOpen</a>
</div>

{/*
Generated page — node: v3DSlashCommand (Core/3D/Script).
Source: fuse v3DSlashCommand.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

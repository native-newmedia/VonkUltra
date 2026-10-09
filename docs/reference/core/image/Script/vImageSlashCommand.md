---
sidebar_position: 2
title: vImageSlashCommand
description: "Run a Console Fuse SlashCommand as a node"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageSlashCommand

Run a Console Fuse SlashCommand as a node

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageSlashCommand.png" alt="vImageSlashCommand node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image passed through unchanged. |
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
  <a className="node-chip" href="./vImageProcessOpen">vImageProcessOpen</a>
</div>

{/*
Generated page — node: vImageSlashCommand (Core/Image/Script).
Source: fuse vImageSlashCommand.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

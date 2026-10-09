---
sidebar_position: 1
title: vImageHook
description: "The vImageHook node in the Vonk Ultra Core Image toolkit."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vImageHook

The vImageHook node in the Vonk Ultra Core Image toolkit.

<div className="node-badge-row">
  <span className="node-badge">Core / Image</span>
  <span className="node-badge">Image</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/image/vImageHook.png" alt="vImageHook node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Image passed through unchanged — connect this into the comp so the hook is evaluated. |
| Pattern | Text | `—` | Regular expression matched against Loader filenames — any matching Loader triggers this hook. |
| Priority | Integer | `0` | Evaluation order when multiple ImageHooks match the same Loader — lower runs first. |
| Loader | Image | `—` | Optional template Loader node whose settings new matches should inherit. |
| Show Loader | Integer | `0.0` | Reveals the wire for the Loader connection in the Flow view. |

<details>
<summary>+7 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Node Graph | Text | `—` | Name of a saved node subgraph (macro/group) to insert after any Loader matching Pattern. |
| Always Apply | Integer | `0.0` | Applies Node Graph even to Loaders that already exist in the comp, not just newly created ones. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |
| Get Color | Float | `—` | Copies the connected node's tile and text colour onto this node. |
| Get Name | Float | `—` | Renames this node to match its connected source node, for easy identification. |
| Get Source | Float | `—` | Selects and activates the connected source node in the flow — a quick way to jump to it. |
| Process | Integer | `1.0` | Enables this hook. Turn off to temporarily disable it without disconnecting it. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vImageRouter">vImageRouter</a>
  <a className="node-chip" href="./vImageSwitch">vImageSwitch</a>
  <a className="node-chip" href="./vImageWireless">vImageWireless</a>
</div>

{/*
Generated page — node: vImageHook (Core/Image/Flow).
Source: fuse vImageHook.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

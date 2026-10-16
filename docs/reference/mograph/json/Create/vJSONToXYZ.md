---
sidebar_position: 55
title: vJSONToXYZ
description: "Convert an array of points into ASCII XYZ text with one point per line."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vJSONToXYZ

Convert an array of points into ASCII XYZ text with one point per line.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / JSON</span>
  <span className="node-badge">JSON</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/json/vJSONToXYZ.png" alt="vJSONToXYZ node" />
</div>

vJSONToXYZ takes an array on its Input socket and outputs text. Each entry of the array becomes one line with its values written to four decimal places.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | DATATYPE | `—` | Array to convert. |
| Show Input | Integer | `1.0` | Shows or hides the Input socket. Default on. |

<details>
<summary>Read the full description</summary>

For every entry with three values the node writes a line X Y Z, for two values a line X Y and for one value a line with that value. Values are separated by a single space and written with four decimal places, for example 0.2500 0.0000 1.0000.

Entries with any other number of values are left out. If the input is empty or not connected, the output is an empty text.

The output is plain text and not an array, so it cannot be connected to the Modify nodes. It can be read back with vJSONFromXYZ when its Input Source is set to Text.

Show Input is on by default and shows the Input socket on the node. Turning it off hides the socket.

</details>

## Example Connections

<Tabs>
<TabItem value="write-a-generated-grid-as-xyz-text" label="Write a generated grid as XYZ text" default>

```
vJSONPointsOnGrid.Output -> vJSONToXYZ.ArrayA
```

</TabItem>
<TabItem value="read-the-text-back-with-input-source-set-to-text" label="Read the text back, with Input Source set to Text">

```
vJSONPointsOnGrid.Output -> vJSONToXYZ.ArrayA
vJSONToXYZ.Output -> vJSONFromXYZ.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vJSONFromXYZ">vJSONFromXYZ</a>
  <a className="node-chip" href="./vJSONToOBJ">vJSONToOBJ</a>
  <a className="node-chip" href="./vJSONToUSD">vJSONToUSD</a>
</div>

{/*
Rendered from content-pipeline record (ai).
*/}

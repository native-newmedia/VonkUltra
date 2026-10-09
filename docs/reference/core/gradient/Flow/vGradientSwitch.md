---
sidebar_position: 1
title: vGradientSwitch
description: "Switch between Fusion Gradient objects The \"Which\" control uses an integer number that starts at 1 and counts upwards to define the input connection port that…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vGradientSwitch

Switch between Fusion Gradient objects The "Which" control uses an integer number that starts at 1 and counts upwards to define the input connection port that is passed through to the output connection. If you are using a logical comparator that works on a false/true based 0-1 number range and want to connect it to a vGradientSwitch node's Which input connection, that works on a 1+ number range, simply insert a vNumberAdd node set to increment the number upwards by 1. The "Show Which Input" checkbox is used to hide the Number datatype based input connection for the Which parameter in the Nodes view. The "Show Active Input" checkbox is used as a visualization and diagnostics mode. When enabled, this control automatically toggles the visibility off for the inactive connection wirelines fed into the switch node. This approach makes it possible to visually see in a quick glance the source comp branch that is selected as the input and used by the Which control. All other inputs will be turned into hidden wireless inputs when not in use.

<div className="node-badge-row">
  <span className="node-badge">Core / Gradient</span>
  <span className="node-badge">Gradient</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/gradient/vGradientSwitch.png" alt="vGradientSwitch node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Which | Integer | `—` | Selects which input (1-based) is passed through to Output. Insert a vNumberAdd (or similar) to shift a 0/1 logic value into this 1+ range if driving it from a comparator. |
| Input1 | DATATYPE | `—` | The first of the switchable inputs — connect the option that should be output when Which = 1. |
| Show Which Input | Integer | `1.0` | Shows or hides the wire for the Which control in the Flow view. |
| Show Active Input | Integer | `0.0` | When enabled, hides every input wire except the one currently selected by Which — a quick visual way to see which branch is live. |
| "Input" .. i | DATATYPE | `—` | Additional switchable input, added automatically as each prior input gets wired — appears in the UI as Input2, Input3, and so on. (The literal `"Input" .. i` label is a known display quirk in how this dynamically-generated input's name is parsed for these docs, not something visible in Fusion itself.) |

<details>
<summary>+1 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| "Input" .. (inpNr + 1) | DATATYPE | `—` | The next available switchable input slot, added automatically once the one before it is connected. Same display quirk as above — shows in Fusion as Input3, Input4, etc. |

</details>


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vGradientWireless">vGradientWireless</a>
</div>

{/*
Generated page — node: vGradientSwitch (Core/Gradient/Flow).
Source: fuse vGradientSwitch.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

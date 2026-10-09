---
sidebar_position: 4
title: vPointFromMousePos
description: "Return a Fusion Point object that holds the current mouse X & Y cursor position **Coord Mode** The \"Coord Mode\" multi-button control allows you to define the…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vPointFromMousePos

Return a Fusion Point object that holds the current mouse X & Y cursor position **Coord Mode** The "Coord Mode" multi-button control allows you to define the units used when reporting the mouse position. The "Native" option will return the original unmodified "raw" cursor position coordinates. The "Normalized" option will return a 0-1 range value for the X/Y cursor position. **Screen Dimensions** The normalization process can be carried out using either the "Manual Entry" option which is based upon manually entered screen width and height parameters along with a screen ui size scaling parameter, or through using the "Fu Prefs" option which is based upon the existence of a Fusion preferences "Layout" page based saved window size value. If no Fusion preferences based window sizing parameters are found you will see an error reported to the Console window when the "Fu Prefs" option is enabled. The message reported is: [Error] The Fusion window size preference is undefined. Please save an initial window position in the Layout Preference section. Note: Make sure to load the vPointFromMousePos node's output into the left or right viewer window before displaying a downstream node like a b-spline shape and a Transform node that is driven by the mouse position value via a "Connect To" approach. Failure to view the vPointFromMousePos node before displaying the downstream node will likely lead to lockups in Fusion v18+.

<div className="node-badge-row">
  <span className="node-badge">Core / Point</span>
  <span className="node-badge">Point</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/point/vPointFromMousePos.png" alt="vPointFromMousePos node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Coord Mode | Dropdown | `Native` | Units for the reported mouse position: Native (raw, unmodified cursor coordinates) or Normalized (0–1 range). |
| Screen Dimensions | Dropdown | `Manual Entry` | Source for the screen size used to normalize the position: Manual Entry (use the fields below) or Fu Prefs (read Fusion's saved Layout window-size preference — errors in the Console if no size has ever been saved). Normalized mode only. |
| Screen Width | Float | `1920` | Screen width used for normalization. Manual Entry mode only. |
| Screen Height | Float | `1080` | Screen height used for normalization. Manual Entry mode only. |
| Screen UI Scale | Integer | `100` | UI scaling percentage applied when normalizing, to match the OS display scale setting. Manual Entry mode only. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vPointCreate">vPointCreate</a>
  <a className="node-chip" href="./vPointCreateImage">vPointCreateImage</a>
  <a className="node-chip" href="./vPointCreateRandom">vPointCreateRandom</a>
</div>

{/*
Generated page — node: vPointFromMousePos (Core/Point/Create).
Source: fuse vPointFromMousePos.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

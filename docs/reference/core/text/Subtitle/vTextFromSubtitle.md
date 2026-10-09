---
sidebar_position: 1
title: vTextFromSubtitle
description: "Creates a Fusion Text object by extracting text from SRT Subtitles"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextFromSubtitle

Creates a Fusion Text object by extracting text from SRT Subtitles

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextFromSubtitle.png" alt="vTextFromSubtitle node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Text | `—` | The SRT subtitle file content to extract text from. |
| Display Lines | Integer | `20` | Number of lines shown in the Input text box in the Inspector. |
| Wrap Lines | Integer | `0.0` | Wraps long lines in the Input text box instead of scrolling horizontally. |
| Remove HTML Tags | Integer | `1.0` | Strips HTML markup (e.g. `<i>`) from the extracted subtitle text. |
| Remove +1 Hour Starting Timecode | Integer | `1.0` | Subtracts the 1-hour offset some SRT exports add to their starting timecode. |

<details>
<summary>+5 more parameters</summary>

| Parameter | Type | Default | Description |
|---|---|---|---|
| Timing Mode | Dropdown | `Timecode` | Selects which subtitle line to return — by Timecode (matches the comp's current time) or by Index (a fixed line number). |
| FPS | Dropdown | `30` | Frame rate used to convert SRT timecodes to frame numbers in Timecode mode. |
| Sequence Offset | Integer | `0` | Shifts the frame numbering used for timecode matching forwards or backwards. |
| Index | Integer | `1` | Subtitle line number to return, used in Index timing mode. |
| Show Timing Inputs | Integer | `1.0` | Reveals the wires for the Sequence Offset/Index connections in the Flow view. |

</details>



{/*
Generated page — node: vTextFromSubtitle (Core/Text/Subtitle).
Source: fuse vTextFromSubtitle.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

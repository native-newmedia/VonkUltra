---
sidebar_position: 1
title: vScriptValFontMetrics
description: "Return font measurements as a Fusion ScriptVal object Sample output from the \"vScriptValFontMetrics\" node when formatted as text based Lua table output looks…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValFontMetrics

Return font measurements as a Fusion ScriptVal object Sample output from the "vScriptValFontMetrics" node when formatted as text based Lua table output looks like: \{ FontMetrics = \{ TypeName = "TextStyleFontMetrics", CharWidthAverage = 0, UnderlineThickness = 123, TextExternalLeading = 0, TextInternalLeading = 0.0232686980609418, TypeNamePtr = "TextStyleFontMetrics*", TextDescent = 0.0175623268698061, Scale = 3610, TextAscent = 0.0624376731301939, FontSize = 0.1, CharWidthSpace = 0.0189196675900277 \}, Font = "Arial Black", Text = "Hello", Style = "Regular", Size = 0.1 \}

<div className="node-badge-row">
  <span className="node-badge">Core / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/scriptval/vScriptValFontMetrics.png" alt="vScriptValFontMetrics node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Font | Text | `—` | Font family name to measure, e.g. `Arial Black`. |
| Style | Text | `—` | Font style/weight, e.g. `Regular` or `Bold`. |
| Styled Text | Text | `—` | Sample text the metrics are measured against. |
| Size | Float | `0.1` | Font size used for the measurement. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vScriptValFromListFonts">vScriptValFromListFonts</a>
</div>

{/*
Generated page — node: vScriptValFontMetrics (Core/ScriptVal/Font).
Source: fuse vScriptValFontMetrics.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

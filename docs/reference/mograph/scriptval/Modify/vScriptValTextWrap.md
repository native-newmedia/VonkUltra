---
sidebar_position: 63
title: vScriptValTextWrap
description: "Joins the text of an array and wraps it to a line length, as one string or as a list of lines."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vScriptValTextWrap

Joins the text of an array and wraps it to a line length, as one string or as a list of lines.

<div className="node-badge-row">
  <span className="node-badge node-badge--beginner">Beginner</span>
  <span className="node-badge">Mograph / ScriptVal</span>
  <span className="node-badge">ScriptVal</span>
  <span className="node-badge">Array</span>
  <span className="node-badge">JSON</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/mograph/scriptval/vScriptValTextWrap.png" alt="vScriptValTextWrap node" />
</div>

vScriptValTextWrap takes an array of text pieces, joins them with spaces and wraps the result to Line length characters. Output As chooses a single string or a list of lines.

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Output As: | Dropdown | `String` | String (default) gives one string with line breaks. Table gives a list of lines. |
| Line length | Integer | `25` | Largest number of characters in a line. Minimum 1, slider 1 to 100, default 25. |
| Number of Paragraphs | Integer | `1` | Number of paragraphs the words are divided into. Range 1 to 100, slider 1 to 10, default 1. |
| Input | DATATYPE | `—` | Data to process. |

<details>
<summary>Read the full description</summary>

The pieces of the input are joined with single spaces, split into words, and the words are placed on lines of at most Line length characters (default 25). A word longer than the line length is cut into pieces of that length. Number of Paragraphs (default 1) divides the words into that many groups of about equal size and puts an empty line between them.

The Text output always holds the wrapped lines joined by line breaks. With Output As Table the TextTable output holds the list of lines. With String, the default, TextTable holds the same string. Number of Paragraphs can be connected to another node.

</details>

## Example Connections

<Tabs>
<TabItem value="wrap-generated-text" label="Wrap generated text" default>

```
vScriptValGenerateText.OutputValData -> vScriptValTextWrap.Array
vScriptValTextWrap.Text -> vScriptValShapeText.Text
```

</TabItem>
<TabItem value="use-the-lines-as-a-list" label="Use the lines as a list">

```
vScriptValGenerateText.OutputValData -> vScriptValTextWrap.Array
vScriptValTextWrap.TextTable -> vScriptValReverse.Input
```

</TabItem>
</Tabs>

## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="../Create/vScriptValGenerateText">vScriptValGenerateText</a>
  <a className="node-chip" href="../Shapes/vScriptValShapeText">vScriptValShapeText</a>
  <a className="node-chip" href="../ShapeRender/vScriptValRenderWordPacker">vScriptValRenderWordPacker</a>
</div>

{/*
Rendered from content-pipeline record (reviewed).
*/}

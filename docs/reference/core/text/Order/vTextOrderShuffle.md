---
sidebar_position: 2
title: vTextOrderShuffle
description: "Shuffles the order of a Fusion Text object The \"Text\" field contents will be output with a randomized order."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vTextOrderShuffle

Shuffles the order of a Fusion Text object The "Text" field contents will be output with a randomized order. This is done using an approach known as a [Fisher--Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle. If you typed in "Hello Shuffle World!" the output would be "Wdool uhSffod rlHoe!".

<div className="node-badge-row">
  <span className="node-badge">Core / Text</span>
  <span className="node-badge">Text</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/text/vTextOrderShuffle.png" alt="vTextOrderShuffle node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Text | Text | `—` | The text whose characters get randomly shuffled (Fisher–Yates). |
| Show Input | Integer | `0.0` | Reveals the wire for the Text connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vTextOrderReverse">vTextOrderReverse</a>
</div>

{/*
Generated page — node: vTextOrderShuffle (Core/Text/Order).
Source: fuse vTextOrderShuffle.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

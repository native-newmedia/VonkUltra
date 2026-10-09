---
sidebar_position: 2
title: vMetadataFromText
description: "Creates a Fusion image with metadata added from text This node is similar to the SetMetadata.fuse with the addition of input connections on the node that…"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vMetadataFromText

Creates a Fusion image with metadata added from text This node is similar to the SetMetadata.fuse with the addition of input connections on the node that accepts a Text data type for the "Field Name", and "Field Value". A metadata example for Fusion Viewer based Stereo3D "Over/Under" image content is: Field Name: Stereo Field Value: \{Method = "vstack"\} A metadata example for Fusion Viewer based Stereo3D "Side by Side" image content is: Field Name: Stereo Field Value: \{Method = "hstack"\} A metadata example for Fusion Viewer window based 360VR "Latitude/Longitude" image projection content is: Field Name: Pano Field Value: \{Format = "LatLong"\}

<div className="node-badge-row">
  <span className="node-badge">Core / Meta</span>
  <span className="node-badge">Meta</span>
</div>

<div className="node-screenshot">
  <img src="/VonkUltra/img/reference/core/meta/vMetadataFromText.png" alt="vMetadataFromText node" />
</div>

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| Input | Image | `—` | Image the new metadata field is attached to. |
| Field Name | Text | `—` | Metadata key to set, e.g. `Stereo` or `Pano`. |
| Field Value | Text | `—` | Value to store under Field Name, as a Lua table literal for structured metadata — e.g. `{Method = "vstack"}` for over/under stereo, `{Method = "hstack"}` for side-by-side stereo, or `{Format = "LatLong"}` for 360VR latitude/longitude. |
| Show Input | Integer | `1.0` | Reveals the wire for the Input connection in the Flow view. |


## Related Nodes

<div className="node-chip-row">
  <a className="node-chip" href="./vMetadataFilename">vMetadataFilename</a>
  <a className="node-chip" href="./vMetadataToText">vMetadataToText</a>
</div>

{/*
Generated page — node: vMetadataFromText (Core/Meta/Text).
Source: fuse vMetadataFromText.fuse + Docsify mega-page. Param descriptions written 18 Sep 2026 (manual content pass).
*/}

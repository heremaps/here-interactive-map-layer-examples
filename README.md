# HERE Interactive Map Layer Examples

This repository contains examples for interactive map layers - one of the [supported data layer types](https://developer.here.com/documentation/data-user-guide/user_guide/portal/layers/layers.html) on [HERE platform](https://www.here.com/platform). Interactive map layers offer a set of unique capabilities, enabling you to store, retrieve, search for, analyze and modify data at a feature (e.g., a place) and feature property (e.g., the name of the place) level.

The API behind interactive map layers is the [Interactive API](https://developer.here.com/documentation/data-api/api-reference-interactive.html).


![Clustering with interactive map layers](examples/sampling/opengraph.png)

## Examples

###  Geometry Simplification

__[Source Code](examples/simplification) - [Live Map](https://heremaps.github.io/here-interactive-map-layer-examples/examples/simplification/index.html)__

Map features stored in interactive map layers can be retrieved as tiles. Interactive map layers offer the ability to simplify the geometry of the features in the tiles. This can be useful for reducing the amount of data that needs to be transferred to the client and helps the client to render the data faster.

In this example two very long routes were created using [HERE Routing API](https://developer.here.com/documentation/routing-api/dev_guide/index.html). The tiles returned by Interactive API, contain a simplified version of the route geometry optimized for the zoom level of the map. 

### Data Sampling

__[Source Code](examples/sampling) - [Live Map](https://heremaps.github.io/here-interactive-map-layer-examples/examples/sampling/index.html)__

One of the features offered by interactive map layers is data sampling. Data sampling enables clients to efficiently render an excerpt of a very large data set for visual reference and analysis, without the need to retrieve all the data.

This example includes a cadastral map to explore the trees in maintenance of the city of Amsterdam, stored as individual map features. On map zoom levels, where there are too many features, the tiles returned by Interactive API include only a sample with a geographically accurate representation of the data.
 
### Clustering

__[Source Code](examples/clustering) - [Live Map](https://heremaps.github.io/here-interactive-map-layer-examples/examples/clustering/index.html)__

Interactive map layers offer the capability to retrieve statistical information for the data stored in the layer. Both hexagonal and square grid clustering are supported.

The example shows how interactive map layers are used to demonstrate the density of supermarket coverage in the UK. The supermarket retail points are stored in an interactive map layer. The layer is then queried to retrieve the individual points, the density of all supermarkets, and the density of each supermarket chain.

### Spatial and Property Search 

Features stored in interactive map layers can be retrieved by spatial and/or property search queries. The spatial search query can be used to retrieve features that intersect a given point, line or area. This is provided to the API as a GeoJSON geometry. Additionally, a radius parameter defined in meters could be specified.

The property search query can be used to retrieve features that have a property value that matches a given value. It is possible to search for numeric ranges, to query multiple property values, and to combine the queries using logical operators. Property search can be combined with requests for tile, bounding box and spatial search.

#### Example 1

__[Source Code](examples/sport-facilities) - [Live Map](https://heremaps.github.io/here-interactive-map-layer-examples/examples/spatial-and-property-search-1/index.html)__

This example includes a map to explore sport facilities in the city of Amsterdam. Property search is used to filter the features by the type of sport. The locations of the facilities are then used as an input for the spatial search query to find the administrative areas that contain the facilities of that type. 

#### Example 2

__[Source Code](examples/sport-facilities-public-transport) - [Live Map](https://heremaps.github.io/here-interactive-map-layer-examples/examples/spatial-and-property-search-2/index.html)__

This example includes a map to explore sport facilities, public transport lines and stations in the city of Amsterdam. Property search is used to filter the features by the sport type. It is combined with spatial search to find the facilities of that type located near a selected public transport station or all of the stations for a selected transport line.

## Prerequisites

* [Node.js](https://nodejs.org) (8.16.0+)
* [Yarn](https://yarnpkg.com/en/docs/install) (1.11.0+)


## Getting Started

### Clone this repository
    
    git clone https://github.com/heremaps/here-interactive-map-layer-examples.git

    cd here-interactive-map-layer-examples
    
### Setup HERE public repository
In order to be able to use the [HERE Maps API for Javascript](https://developer.here.com/develop/javascript-api) with NPM the HERE public repository must be added to the NPM configuration:
    
    yarn config set @here:registry https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/
    
### Install dependencies
    
    yarn install

### Set your API key

Set your [HERE platform API Key](https://developer.here.com/documentation/identity-access-management/dev_guide/topics/plat-using-apikeys.html).

    yarn set-api-key <YOUR_API_KEY>

### Build and launch the examples

To only build the examples, run:
        
    yarn build

Or alternatively, to build the examples, serve them locally and open them in the browser use the following command:

    yarn start

# Acknowledgements

Some of the map clients and libraries in the examples include:

* [XYZ Maps](https://github.com/heremaps/xyz-maps)
* [Open Layers](https://openlayers.org/)
* [Tangram](https://github.com/tangrams/tangram)
* [HERE Maps API for Javascript](https://developer.here.com/develop/javascript-api)

# License

Copyright (C) 2021-2022 HERE Europe B.V.

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details
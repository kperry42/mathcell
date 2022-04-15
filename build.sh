#!/bin/sh

cat src/*.js  src/march/*.js  src/plot/*.js  src/render/{svg,threejs-template,threejs,x3d}.js > build/mathcell.js

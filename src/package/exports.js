if (module) {
  module.exports = {
    // core
    MathCell, interact, graphic, generateId, checkLimits, getVariable, setLimit, evaluate,
    // functions
    minMax, dataReplacer, dataReviver, linspace, lerp, roundTo, ceilTo, floorTo,
    normalize, translate, rotate, rotateFromZAxis, getCompleteCode,
    color, colorFromHue, colorFromArg, colorToHexString, colormap,
    // march/marching-cubes, march/marching-squares
    isosurface, isoline, isoband,
    // plot/functions
    plot, listPlot, polarPlot, parametric, wireframe, surfaceFromLines, diskFromLines, slopeField,
    // plot/graphics
    arrow, text, point, line, box, sphere, ellipsoid, cylinder, cone,
  };
}

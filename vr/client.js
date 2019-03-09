import { VRInstance } from 'react-vr-web'

function init (bundle, parent, options) {
  const vr = new VRInstance(bundle, 'WorldTour', parent, {
    // Add custom options here
    enableHotReload: true,
    ...options
  })
  vr.render = function () {}
  vr.start()
  return vr
}

window.ReactVR = { init }

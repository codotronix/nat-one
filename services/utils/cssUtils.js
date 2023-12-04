export const padding = (top, right, bottom, left) => ({
    paddingTop: top,
    paddingRight: right || top,
    paddingBottom: bottom || top,
    paddingLeft: left || right || top
})
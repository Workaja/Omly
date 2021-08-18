const Omit = (obj, excludes) => {
  if (Array.isArray(excludes)) {
    const resp = {}
    Object.entries(obj).map(o => {
      if (!excludes.includes(o[0])) {
        resp[o[0]] = o[1] 
      }
    })
    return resp
  } else
  if (typeof excludes === 'string') {
    const resp = {}
    Object.entries(obj).map(o => {
      if (![excludes].includes(o[0])) {
        resp[o[0]] = o[1] 
      }
    })
    return resp
  } else {
    return obj
  }
}

const Only = (obj, withThis) => {
  if (Array.isArray(withThis)) {
    const resp = {}
    Object.entries(obj).map(o => {
      if (withThis.includes(o[0])) {
        resp[o[0]] = o[1] 
      }
    })
    return resp
  } else
  if (typeof withThis === 'string') {
    const resp = {}
    Object.entries(obj).map(o => {
      if ([withThis].includes(o[0])) {
        resp[o[0]] = o[1] 
      }
    })
    return resp
  } else {
    return obj
  }
}

module.exports = {
  Omit, Only
}
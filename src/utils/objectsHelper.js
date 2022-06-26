export const updateObjectsInArray = (items, itemId, objPropName, newObjProps) => {
  items.map(u => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps }
    }
    return u;
  })
}
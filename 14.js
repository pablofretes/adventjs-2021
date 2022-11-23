function missingReindeer(ids) {
  if (ids.length === 1 && ids[0] > 0) return ids[0] - 1;
  const orderedIds = ids.sort((a,b) => a-b);
  for (let i = orderedIds[0]; i < orderedIds.length; i++) {
		if (i !== orderedIds[i]) return i
  }
  return orderedIds[orderedIds.length-1] + 1;
}
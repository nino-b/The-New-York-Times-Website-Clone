
export default function groupObjectsByMatchingValues(data) {
  const groups = [];
  const valueToGroupMap = new Map();

  data.results.forEach(entry => {
    const groupIdentifiers = [entry.des_facet, entry.per_facet, entry.org_facet].flat();

    const group = groupIdentifiers.reduce((acc, curr) => {
      if (valueToGroupMap.has(curr)) {
        const existingGroup = valueToGroupMap.get(curr);
        if (!acc) return existingGroup;
        return [...new Set([...acc, ...existingGroup])];
      }
      return acc;
    }, null);

    if (group) {
      group.push(entry);
      groupIdentifiers.forEach(value => valueToGroupMap.set(value, group));
    } else {
      const newGroup = [entry];
      groups.push(newGroup);
      groupIdentifiers.forEach(value => valueToGroupMap.set(value, newGroup));
    }
  });
  return groups;
}
export function flattenJson(data, parentKey = '', result = {}) {
  if (Array.isArray(data)) {
    result[parentKey] = JSON.stringify(data);
  } else if (typeof data === 'object' && data !== null) {
    for (const key in data) {
      flattenJson(data[key], parentKey ? `${parentKey}.${key}` : key, result);
    }
  } else {
    result[parentKey] = data;
  }
  return result;
}

/**
 * Encodes each variable in a template string with `encodeURIComponent`.
 * eg. encodeUrl`https://ethiopia.overpass.openplaceguide.org/api/interpreter?data=${query}`
 *  -> becomes: `https://ethiopia.overpass.openplaceguide.org/api/interpreter?data=${encodeURIComponent(query)}`
 */
export const encodeUrl = (
  strings: TemplateStringsArray,
  ...values: (string | number)[]
) =>
  strings.reduce((result, string, i) => {
    const value = values[i];
    return result + string + (value ? encodeURIComponent(value) : '');
  }, '');

export const isUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

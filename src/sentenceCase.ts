import camelCase from 'lodash/camelCase';
import isNaN from 'lodash/isNaN';
import isString from 'lodash/isString';
import parseInt from 'lodash/parseInt';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import upperFirst from 'lodash/upperFirst';

export function sentenceCase(value: string): string {
  if(isString(value) && !isNaN(parseInt(value))) {
    return value;
  }
  
  if (!value || !isString(value)) {
    return '';
  }

  const normalized = toLower(
    startCase(
      camelCase(value)
    )
  );

  return upperFirst(normalized);
}

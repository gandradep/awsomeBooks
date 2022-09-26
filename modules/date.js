/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

export const upDate = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  return now;
};

/* eslint-disable no-console */
import getTimeStamp from "@bulky/utils/lib/getTimeStamp";

// Swallow all logs, except errors.
// default if logger is not set or debug: false
const justErrorsLogger = {
  debug: () => {},
  warn: () => {},
  error: (...args) => console.error(`[bulky] [${getTimeStamp()}]`, ...args),
};

// Print logs to console with namespace + timestamp,
// set by logger: bulky.debugLogger or debug: true
const debugLogger = {
  debug: (...args) => console.debug(`[bulky] [${getTimeStamp()}]`, ...args),
  warn: (...args) => console.warn(`[bulky] [${getTimeStamp()}]`, ...args),
  error: (...args) => console.error(`[bulky] [${getTimeStamp()}]`, ...args),
};

export { justErrorsLogger, debugLogger };

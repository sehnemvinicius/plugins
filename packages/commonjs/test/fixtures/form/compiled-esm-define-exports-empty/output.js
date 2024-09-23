import * as commonjsHelpers from "_commonjsHelpers.js";
import { __exports as input } from "\u0000fixtures/form/compiled-esm-define-exports-empty/input.js?commonjs-exports";

var hasRequiredInput;

function requireInput () {
	if (hasRequiredInput) return input;
	hasRequiredInput = 1;
	Object.defineProperty(input, "__esModule", { value: true });
	return input;
}

export { requireInput as __require };

import * as commonjsHelpers from "_commonjsHelpers.js";
import { __exports as input } from "\u0000fixtures/form/ignore-ids/input.js?commonjs-exports";
import require$$0 from "\u0000CWD/fixtures/form/ignore-ids/bar.js?commonjs-proxy";

var hasRequiredInput;

function requireInput () {
	if (hasRequiredInput) return input;
	hasRequiredInput = 1;
	var foo = require( 'foo' );
	var bar = require$$0;
	return input;
}

export { requireInput as __require };

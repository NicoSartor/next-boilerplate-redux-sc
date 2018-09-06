// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const buildType = ( process.env.NODE_ENV == "production"  )? 'Production' : 'Development';

// With express
const express = require("express");
app.prepare().then(() => {
	express()
		.use(handler)
		.listen(3000, (err) => {
			if (err) {
				console.log("[SERVER START ERROR]", err);
			}
			console.log("[LISTENING ON PORT 3000]👍 ", buildType);
		});
});

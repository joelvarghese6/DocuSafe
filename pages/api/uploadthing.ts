import { createRouteHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "../../lib/upload-thing/uploadthing";

export default createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

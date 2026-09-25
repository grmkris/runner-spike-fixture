# runner-spike-fixture

Disposable fixture repository for the Cloudflare OS **Dispatch** spike. Tasks handed out
through Dispatch target this repo; a worker branches from the pinned base commit, implements
the change, runs `npm test`, pushes a `dispatch/<taskId>` branch and submits the commit.

Nothing here is production code. Branches may be deleted at any time.

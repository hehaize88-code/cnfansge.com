#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

node_modules/.bin/next build

# The existing Cloudflare Pages project is configured for the Vinext client
# directory. Mirror the static export there so the current Pages setting and
# the standard Next.js `out` directory both contain a complete deployable site.
pages_output="${project_root}/dist/client"
if [[ "${pages_output}" != "${project_root}/dist/client" ]]; then
  echo "Refusing to clean an unexpected output directory." >&2
  exit 70
fi

rm -rf -- "${pages_output}"
mkdir -p -- "${pages_output}"
cp -a -- "${project_root}/out/." "${pages_output}/"

test -f "${pages_output}/index.html"
test -f "${pages_output}/sitemap.xml"
test -f "${pages_output}/robots.txt"

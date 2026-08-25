#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

node_modules/.bin/next build

# Cloudflare Pages will publish this directory.
pages_output="${project_root}/dist/client"
rm -rf -- "${pages_output}"
mkdir -p -- "${pages_output}"
cp -a -- "${project_root}/out/." "${pages_output}/"

test -f "${pages_output}/index.html"
test -f "${pages_output}/robots.txt"
test -f "${pages_output}/sitemap.xml"

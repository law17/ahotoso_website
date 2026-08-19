#!/usr/bin/env bash
set -euo pipefail
bundle exec jekyll serve --livereload --config _config.yml,_config.local.yml

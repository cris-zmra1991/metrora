#!/bin/bash

# Arrancar frontend y backend al mismo tiempo
concurrently \
  "cd /app/metrora/frontend && npm run dev" \
  "cd /app/metrora/backend && node index.js"

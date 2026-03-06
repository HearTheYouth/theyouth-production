#!/bin/bash
# Eerste push naar GitHub (na het toevoegen van bestanden)
# Remote is al geconfigureerd: git@github.com:HearTheYouth/theyouth-production.git

cd "$(dirname "$0")"

echo "Remote:"
git remote -v
echo ""
echo "Voor eerste push:"
echo "  git add ."
echo "  git commit -m 'Initial commit'"
echo "  git push -u origin main"

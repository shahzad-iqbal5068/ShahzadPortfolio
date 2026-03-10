# Reset Git History - Remove all previous commits and start fresh
# This removes Sagar Shah's commit history and creates a clean slate

Write-Host "=== Resetting Git History ===" -ForegroundColor Yellow
Write-Host "This will remove ALL commit history and create a single new commit." -ForegroundColor Yellow
Write-Host ""

# Create orphan branch (no parent commits)
git checkout --orphan fresh-main

# Add all files
git add -A

# Create initial commit
git commit -m "Initial commit: Shahzad Iqbal Portfolio

Full portfolio with Next.js 14, detail pages, animations, and modern UI.
- Projects & Experience detail pages
- FAQs, testimonials marquee
- Skills carousel, footer, animations
- All content personalized for Shahzad Iqbal"

# Delete old main branch
git branch -D main

# Rename current branch to main
git branch -m main

Write-Host ""
Write-Host "=== Done! ===" -ForegroundColor Green
Write-Host "Your repository now has a single clean commit." -ForegroundColor Green
Write-Host ""
Write-Host "To push to remote (WARNING: This overwrites remote history):" -ForegroundColor Yellow
Write-Host "  git push -f origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "Make sure you have a backup or that no one else is using this repo before force pushing." -ForegroundColor Yellow

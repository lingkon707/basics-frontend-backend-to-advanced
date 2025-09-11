# files: git_github.sh

git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

mkdir my-project
cd my-project
git init

echo "Hello Git" > file.txt
git add file.txt
git commit -m "first commit"
git log

git branch new-feature
git checkout new-feature
echo "Feature work" >> file.txt
git add file.txt
git commit -m "added feature"
git checkout main
git merge new-feature

git reset --soft HEAD~1
git reset --hard HEAD~1
git revert HEAD
git checkout file.txt

git remote add origin https://github.com/username/my-project.git
git push -u origin main
git pull origin main
git clone https://github.com/username/other-project.git

gh repo fork https://github.com/owner/project.git --clone=true
git checkout -b fix-bug
echo "Bug fixed" >> file.txt
git add file.txt
git commit -m "fix bug"
git push origin fix-bug
gh pr create --fill

git checkout main
git pull origin main
git checkout feature
git rebase main
git rebase -i HEAD~3
git push origin feature --force

echo "node_modules/" > .gitignore
ssh-keygen -t ed25519 -C "you@example.com"
git tag v1.0.0
git push origin v1.0.0
gh release create v1.0.0 --notes "First release"
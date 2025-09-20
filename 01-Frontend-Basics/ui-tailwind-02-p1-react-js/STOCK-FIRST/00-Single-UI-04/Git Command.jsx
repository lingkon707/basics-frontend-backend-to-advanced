import React, { useState } from "react";

const gitCommands = {
  General: [
    { cmd: "git init", desc: "Initialize a new Git repository" },
    { cmd: "git clone <url>", desc: "Clone a remote repository" },
    { cmd: "git status", desc: "Show the status of changes" },
    { cmd: "git log", desc: "Show commit logs" },
  ],
  Branching: [
    { cmd: "git branch", desc: "List branches" },
    { cmd: "git branch <name>", desc: "Create a new branch" },
    { cmd: "git checkout <branch>", desc: "Switch branches" },
    { cmd: "git merge <branch>", desc: "Merge a branch into current" },
  ],
  Committing: [
    { cmd: "git add <file>", desc: "Add file changes to staging" },
    { cmd: "git commit -m \"msg\"", desc: "Commit staged changes" },
    { cmd: "git commit --amend", desc: "Amend last commit" },
  ],
  Remote: [
    { cmd: "git remote -v", desc: "Show remote repositories" },
    { cmd: "git fetch", desc: "Fetch updates from remote" },
    { cmd: "git pull", desc: "Fetch and merge remote changes" },
    { cmd: "git push", desc: "Push local commits to remote" },
  ],
  Undo: [
    { cmd: "git reset --soft HEAD~1", desc: "Undo last commit but keep changes staged" },
    { cmd: "git reset --hard HEAD~1", desc: "Undo last commit and discard changes" },
    { cmd: "git checkout -- <file>", desc: "Discard changes in working directory" },
  ],
};

export default function GitCommandHelper() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Git Command Helper
        </h1>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-3 mb-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-lg"
        >
          <option value="" disabled>
            Select a Category
          </option>
          {Object.keys(gitCommands).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {selectedCategory && (
          <div className="space-y-5">
            {gitCommands[selectedCategory].map(({ cmd, desc }) => (
              <div
                key={cmd}
                className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="font-mono font-semibold text-indigo-700 mb-1">{cmd}</p>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

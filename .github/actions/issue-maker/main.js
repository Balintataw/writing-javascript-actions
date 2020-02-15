const core = require("@actions/core");
const github = require("@actions/github");
// const { Octokit } = require("@octokit/rest")

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");

    console.log("TOKEN", token);
    // const octokit = new github.GitHub(token);
    // console.log("OCTOKIT", octokit);

    // const newIssue = await octokit.issues.create({
    //   repo: github.context.repo.repo,
    //   owner: github.context.repo.owner,
    //   title: issueTitle,
    //   body: jokeBody
    // });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

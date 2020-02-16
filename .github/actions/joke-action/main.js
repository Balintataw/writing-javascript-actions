const getJoke = require("./joke");
const core = require("@actions/core");

// async function run() {
//   const joke = await getJoke();
//   console.log("LOG", joke);
//   core.setOutput("joke-output", joke);
// }

// run();

async function run() {
  try {
    // const issueTitle = core.getInput("issue-title");
    // const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");
    const octokit = new github.GitHub(token);
    const reviewers = await octokit.pulls.list({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner
    });

    console.log(reviewers);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();

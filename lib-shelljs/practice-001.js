const shell = require('shelljs');

const argv = process.argv;
shell.echo(`process.argv> ${argv}`);

/**
 * pwd
 */
const pwd = shell.pwd();
shell.echo(`pwd> ${pwd}`);

/**
 * Git
 * Success -> hasGit.code = 0
 * git don't exist -> hasGit = null
 */
const hasGit = shell.which('git');
if (!hasGit) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
} else {
  // D:\SOFTWARE\GIT\CMD\GIT.EXE
  shell.echo(`which Git> ${hasGit}`);
}

/**
 * ls
 */
const DirList = shell.ls();
shell.echo(`ls> ${DirList}`);

/**
 * exec
 */
const branchs = shell.exec('git branch', { silent: true });
if (branchs.code === 0) {
  shell.echo(branchs);
} else {
  shell.echo('Error: Git branch failed');
  shell.exit(1);
}

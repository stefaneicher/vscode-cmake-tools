import * as path from 'path';

import { runTests } from 'vscode-test';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../../');

    // The path to the extension test runner script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './index');

    const testWorkspace = path.resolve(extensionDevelopmentPath, 'test/unit-tests/test-project-without-cmakelists');

    const launchArgs = [ "--disable-extensions", testWorkspace ];
    // Download VS Code, unzip it and run the integration test
    await runTests({ launchArgs, extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
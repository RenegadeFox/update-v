// {Module} Require "fs-extra" for reading/writing JSON files
const fs = require("fs-extra");
// {Module} Require "path" for resolving/joining paths to package.json files
const path = require("path");
// {Module} Require {command-line-args} to process command-line arguments and options/flags
const commandLineArgs = require("command-line-args");
// {Array} Define the available command-line arguments
const commandLineOptions = commandLineArgs([
  {
    name: "major",
    alias: "m",
    type: Boolean
  },
  {
    name: "feature",
    alias: "f",
    type: Boolean
  },
  {
    name: "patch",
    alias: "p",
    type: Boolean
  },
  {
    name: "minor",
    type: Boolean
  }
]);

module.exports = (devpath, flags) => {
  // {String} Get the current working directory or the {testingDirectory} (specifically for testing the module)
  const cwd = typeof devpath !== "undefined" ? devpath : process.cwd();
  // {String} path to the {package.json} file in the {cwd}
  const packageJson = path.join(cwd, "package.json");
  // {String} path to the {package-lock.json} file in the {cwd}
  const packageLock = path.join(cwd, "package-lock.json");
  // {Object} All command-line or dev options/arguments/flags
  const options = flags || commandLineOptions;
  // {Object} Determine which number to increment in the {package.json} version property
  const numberToIncrement =
    typeof options.major !== "undefined"
      ? 0
      : typeof options.feature !== "undefined" ||
        typeof options.minor !== "undefined"
      ? 1
      : typeof options.patch !== "undefined"
      ? 2
      : 2;

  // Read {package.json} file in {cwd}
  return fs
    .readJson(packageJson)
    .then(jsonData => {
      // {Array} Package version split into an Array of 3 (e.g. ["1","0","4"])
      let versions = jsonData.version.split(".");

      // Parse the int of the version we are going to increment
      versions[numberToIncrement] = parseInt(versions[numberToIncrement]) + 1;

      // Combine the Array into a string
      const newVersion = `${versions[0]}.${versions[1]}.${versions[2]}`;

      // Add the new version number to the {jsonData}
      jsonData.version = newVersion;

      // Write the new version to the {package.json} file
      return fs
        .writeJson(packageJson, jsonData, { spaces: "\t" })
        .then(err => {
          // Throw an error, if any exist
          if (err) throw err;

          return {
            name: jsonData.name,
            version: newVersion
          };
        })
        .catch(err => console.error(err));
      // End - Write the new version to the {package.json} file
    })
    .catch(err => console.error(err));
  // End - Read {package.json} file in {cwd}
};

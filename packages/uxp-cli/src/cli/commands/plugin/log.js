/*
 *  Copyright 2020 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

const process = require('process');

function handlePluginLogPathCommand(args) {
    if (process.platform === 'win32') {
        console.error('log path command is not supported on Windows.')
        return;
    }
    const apps = args.apps ? args.apps.split(" ") : [];
    const params = {
        apps,
    };
    const prom = this.uxp.pluginMgr.getPluginLogPath(params);
    return prom.then((response) => {
        return response;
    });
}

const pathOptions = {
    apps: {
        describe: "If your plugin is loaded in multiple apps. You can use this option to limit the app for which you want see the logs.",
        type: 'string',
    },
};

const pathCommand = {
    command: 'path',
    description: 'Returns the log path of plugin',
    handler: handlePluginLogPathCommand,
    builder: pathOptions,
};


function registerLogSubCommands(yargs) {
    return yargs.command(pathCommand);
}

const logCommand = {
    command: 'log <command>',
    description: 'Plugin logs related commands',
    builder: registerLogSubCommands,
};

module.exports = logCommand;
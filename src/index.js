const program = require('commander');
const { createUser,
        getWrongthinkCommunities,
        createWrongthinkCommunity } = require('./command');


program
  .version('0.0.1')
  .description('Wrongthink command line client')

program
  .command("createuser <username> <password> <admin>")
  .alias('cu')
  .description('Create a user account')
  .action((username, password, admin) => createUser(username, password, admin));

program
  .command("getcommunities")
  .alias('gco')
  .description('List all communities')
  .action(getWrongthinkCommunities);

program
  .command("createcommunity <name> <adminid> <public>")
  .alias('cco')
  .description('Create a community')
  .action((name, adminid, public) => createWrongthinkCommunity(name, adminid, public));

program.parse(process.argv)

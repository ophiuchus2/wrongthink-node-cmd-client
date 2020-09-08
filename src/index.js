const program = require('commander');
const { createUser,
        getWrongthinkCommunities,
        createWrongthinkCommunity,
        createWrongthinkChannel,
        getWrongthinkChannels } = require('./command');

program
  .version('0.0.1')
  .description('Wrongthink command line client')

program
  .command("createuser <username> <password> <admin>")
  .alias('cu')
  .description('Create a user account')
  .action((username, password, admin) => createUser(username, password, admin))

program
  .command("getcommunities")
  .alias('gco')
  .description('List all communities')
  .action(getWrongthinkCommunities)

program
  .command("createcommunity <name> <adminid> <public>")
  .alias('cco')
  .description('Create a community')
  .action((name, adminid, public) => createWrongthinkCommunity(name, adminid, public))

program
  .command("createchannel <name> <communityid> <adminid> <anon>")
  .alias('cch')
  .description('Create a channel')
  .action((name, communityid, adminid, anon) => createWrongthinkChannel(name,
                                                  communityid, adminid, anon))

program
  .command("getchannels <communityid>")
  .alias('gch')
  .description('List all channels that belong to <communityid>')
  .action((communityid) => getWrongthinkChannels(communityid))

program.parse(process.argv)

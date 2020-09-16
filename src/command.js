var grpc = require('grpc');
var messages = require('./proto/proto/wrongthink_pb');
var services = require('./proto/proto/wrongthink_grpc_pb');

var client = new services.wrongthinkClient('127.0.0.1:50051',
                                           grpc.credentials.createInsecure());

function createUser(un, pw, ad) {
  var req = new messages.CreateUserRequest([un, pw, (ad == "true")]);
  console.log("making request:");
  console.log(req.toObject());
  client.createUser(req, function(error, user) {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('created user:');
      console.log(user.toObject());
    }
  });
}

function generateUser() {
  var req = new messages.GenericRequest();
  console.log("making request:");
  console.log(req.toObject());
  client.generateUser(req, function(error, user) {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('generated user:');
      console.log(user.toObject());
    }
  });
}

function getWrongthinkCommunities() {
  var req = new messages.GetWrongthinkCommunitiesRequest();
  var call = client.getWrongthinkCommunities(req);
  call.on('data', function(community) {
    console.log(community.toObject());
  });
  call.on('error', function(e) {
    // An error has occurred and the stream has been closed.
    console.log(e);
  });
}

function createWrongthinkCommunity(name, adminid, public) {
  var req = new messages.CreateWrongthinkCommunityRequest([name, +adminid, (public == "true")]);
  console.log("making createWrongthinkCommunity request:");
  console.log(req.toObject());
  client.createWrongthinkCommunity(req, function(error, community) {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("created community:");
      console.log(community.toObject());
    }
  });
}

function createWrongthinkChannel(name, communityid, adminid, anon) {
  var req = new messages.CreateWrongThinkChannelRequest([name, +communityid, +adminid, (anon == "true")]);
  console.log("making createWrongthinkChannel request:");
  console.log(req.toObject());
  client.createWrongthinkChannel(req, function(error, channel) {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("created channel:");
      console.log(channel.toObject());
    }
  });
}

function getWrongthinkChannels(communityid) {
  var req = new messages.GetWrongthinkChannelsRequest([+communityid]);
  console.log("making getWrongthinkChannels request:");
  console.log(req.toObject());
  var call = client.getWrongthinkChannels(req);
  call.on('data', function(channel) {
    console.log(channel.toObject());
  });
  call.on('error', function(e) {
    // An error has occurred and the stream has been closed.
    console.log(e);
  });
}

module.exports = {
  createUser,
  getWrongthinkCommunities,
  createWrongthinkCommunity,
  createWrongthinkChannel,
  getWrongthinkChannels,
  generateUser
};

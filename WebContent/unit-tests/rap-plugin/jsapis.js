module('rap-plugin-jsapis');

test('RAP.set/getWhiteList', function() {
	var old = RAP.getWhiteList();
	var newList = ['a', 'b'];
	RAP.setWhiteList(newList);
	equal(RAP.getWhiteList(), newList, 'get/set ok');
	RAP.setWhiteList(old);
	equal(RAP.getWhiteList(), old, 'recover ok');
});

test('RAP.set/getHost', function() {
	var old = RAP.getHost();
	equal(old, window.location.host, 'old is ok');
	var newHost = 'rap2.alibaba-inc.com';
	RAP.setHost(newHost);
	equal(RAP.getHost(), newHost, 'get/set ok');
	RAP.setHost(old);
	equal(RAP.getHost(), old, 'recover ok');
});

test('RAP.set/getBlackList', function() {
	var old = RAP.getBlackList();
	var newList = ['a', 'b'];
	RAP.setBlackList(newList);
	equal(RAP.getBlackList(), newList, 'get/set ok');
	RAP.setBlackList(old);
	equal(RAP.getBlackList(), old, 'recover ok');
});

test('RAP.set/getMode', function() {
	var old = RAP.getMode();
	var newMode = 3;
	RAP.setMode(newMode);
	equal(RAP.getMode(), newMode, 'get/set ok');
	RAP.setMode(old);
	equal(RAP.getMode(), old, 'recover ok');
})

test('RAP.set/getPrefix', function() {
	var old = RAP.getPrefix();
	equal(old, '/mockjs/', 'old is /mockjs/');
	var newPrefix = '/mockjsdata/';
	RAP.setPrefix(newPrefix);
	equal(RAP.getPrefix(), newPrefix, 'get/set ok');
	RAP.setPrefix(old);
	equal(RAP.getPrefix(), old, 'recover ok');
})

// TODO
// setWhiteList([url]) test
// setWhiteList([url]) and check test

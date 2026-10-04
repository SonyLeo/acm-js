const test = require('node:test');
const assert = require('node:assert/strict');
const { parseIPv4Header } = require('../solutions/ipv4-header');

test('公开样例：解析常见 IPv4 头字段', () => {
  const bytes = '45 00 00 3c 1c 46 40 00 40 06 00 00 c0 a8 00 01 c0 a8 00 02'.split(' ');

  assert.deepEqual(parseIPv4Header(bytes), {
    version: 4,
    headerLength: 20,
    tos: 0,
    totalLength: 60,
    identification: 7238,
    flags: 2,
    fragmentOffset: 0,
    ttl: 64,
    protocol: 6,
    checksum: 0,
    sourceIP: '192.168.0.1',
    destinationIP: '192.168.0.2',
  });
});

test('边界：低 4 位首部长度换算为字节数', () => {
  const bytes = '4F 10 01 00 00 01 20 01 01 11 AB CD 0A 00 00 01 0A 00 00 02'.split(' ');
  const header = parseIPv4Header(bytes);

  assert.equal(header.version, 4);
  assert.equal(header.headerLength, 60);
  assert.equal(header.tos, 16);
  assert.equal(header.flags, 1);
  assert.equal(header.fragmentOffset, 1);
  assert.equal(header.sourceIP, '10.0.0.1');
});

test('边界：全 0 字节', () => {
  const header = parseIPv4Header(new Array(20).fill('00'));

  assert.equal(header.version, 0);
  assert.equal(header.totalLength, 0);
  assert.equal(header.sourceIP, '0.0.0.0');
  assert.equal(header.destinationIP, '0.0.0.0');
});

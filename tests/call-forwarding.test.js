const test = require('node:test');
const assert = require('node:assert/strict');
const { resolveCallForwarding } = require('../solutions/call-forwarding');

test('公开样例：忙碌状态优先使用遇忙转移', () => {
  const routes = [
    { type: 1, phone: '18911111111' },
    { type: 4, phone: '13322222222' },
  ];

  assert.equal(resolveCallForwarding('busy', routes), '18911111111');
});

test('边界：空闲状态没有无条件转移时返回 success', () => {
  const routes = [{ type: 1, phone: '18911111111' }, { type: 4, phone: '13322222222' }];

  assert.equal(resolveCallForwarding('idle', routes), 'success');
});

test('边界：同一类型后登记覆盖前登记，无匹配时使用默认转移', () => {
  const routes = [
    { type: 4, phone: '13311111111' },
    { type: 4, phone: '13333333333' },
  ];

  assert.equal(resolveCallForwarding('unreachable', routes), '13333333333');
});

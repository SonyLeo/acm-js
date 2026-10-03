// 呼叫转移规则模拟。
// status 为 'idle'、'busy'、'no-response' 或 'unreachable'。
// route 为 { type, phone }：0 无条件，1 遇忙，2 无应答，3 不可达，4 默认。
// 同一 type 后出现的登记覆盖先前登记。
// 返回最终电话号码、'success' 或 'failure'。

/**
 * @param {'idle'|'busy'|'no-response'|'unreachable'} status
 * @param {{type: number, phone: string}[]} routes
 * @returns {string}
 */
function resolveCallForwarding(status, routes) {
    const routeMap = new Map();

    for (const { type, phone } of routes) {
        routeMap.set(type, phone);
    }

    let result = '';

    if (routeMap.has(0)) {
        result = routeMap.get(0);
    } else if (status === 'idle') {
        result = 'success';
    } else {
        const statusToType = {
            busy: 1,
            'no-response': 2,
            unreachable: 3,
        };

        const type = statusToType[status]
        if (routeMap.has(type)) {
            result = routeMap.get(type);
        } else if (routeMap.has(4)) {
            result = routeMap.get(4);
        } else {
            result = 'failure';
        }
    }

    return result;
}

module.exports = { resolveCallForwarding };

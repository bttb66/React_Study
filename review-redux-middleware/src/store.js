import { createStore, applyMiddleware } from 'redux';
import modules from 'modules';
//import loggerMiddleware from 'lib/loggerMiddleware';

import { createLogger } from 'redux-logger';

/* 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
   https://github.com/evgenyrodionov/redux-logger#options
*/
const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger));

/* 미들웨어는 store를 생성할 때에 설정된당 
 * 미들웨어가 여러개인 경우, 파라미터를 여러개로 설정하면 된다.
 * ex) applyMiddleware(a, b, c)
 * + 미들웨어의 순서는 위에서 전달한 파라미터의 순서로 결정된다.
 */
// const store = createStore(modules, applyMiddleware(loggerMiddleware))


export default store;
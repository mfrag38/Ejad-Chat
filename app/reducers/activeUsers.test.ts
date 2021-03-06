import { setActiveUsers } from '../actions/activeUsers';
import { IActiveUsers, initialState } from './activeUsers';
import { mockedStore } from './mockedStore';

describe('test reducer', () => {
	it('should return initial state', () => {
		const state = mockedStore.getState().activeUsers;
		expect(state).toEqual(initialState);
	});
	it('should return modified store after action', () => {
		const activeUsers: IActiveUsers = { any: { status: 'online', statusText: 'any' } };
		mockedStore.dispatch(setActiveUsers(activeUsers));
		const state = mockedStore.getState().activeUsers;
		expect(state).toEqual({ ...activeUsers });
	});
});

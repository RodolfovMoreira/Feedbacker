import useStore from '../hooks/useStore'
import {
  resetUserStore,
  setApiKey,
  cleanCurrentUser,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('Should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
  })

  it('Should set api_key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('Should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})

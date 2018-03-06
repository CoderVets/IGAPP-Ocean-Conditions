import C from './constants'

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message,
})

export const clearError = index => ({
  type: C.CLEAR_ERROR,
  payload: index
})

export const isFetching = index => ({
  type: C.FETCHING,
})

export const notFetching = index => ({
  type: C.CANCEL_FETCHING,
})
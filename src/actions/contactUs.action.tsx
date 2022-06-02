import { CONTACT_US, CONTACT_US_SUCCESS, CONTACT_US_ERROR } from './type'

export const contactUs = (data: any) => ({
  type: CONTACT_US,
  data
})

export const contactUsSuccess = (data: any) => ({
  type: CONTACT_US_SUCCESS,
  data
})

export const contactUsFailure = (error: any) => ({
  type: CONTACT_US_ERROR,
  error
})




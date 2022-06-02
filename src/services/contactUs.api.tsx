import nivenUrl from '../values/Strings/NivenUrl';

export const contactUs = ({name, email_address, telephone, enquiry}: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': 1234567890 },
    body: JSON.stringify({name, email_address, telephone, enquiry})
  }
  let url = nivenUrl.CONTACT_US_URL;
  return fetch(url, requestOptions)
    .then(res => res.json())
    .then(res => res)
}
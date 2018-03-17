
import queryString from 'query-string'

export const addQuery = queryObj => {
  const query = queryString.stringify(queryObj)

  /*
  * If available, history.pushState will allow query string
  * to be dynamically apend to the URL without a page reload
  */
  if (history.pushState) {
    const { protocol, host, pathname} = window.location
    const newurl = `${protocol}//${host}${pathname}?${query}`
    window.history.pushState({ path: newurl }, '', newurl)
  } else {
    /*
    * Otherwise use the traditional method, which reloads the page.
    */
    window.location.search = query
  }
}

export default {
  addQuery
}

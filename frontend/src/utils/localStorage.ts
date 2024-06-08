/**
 * get objects item from localStorage
 * ___________________________
 *
 * @param {string} key item key
 * __________________________
 *
 * @returns {T} results
 */
export const getStorageItem = <T>(key: string): T | undefined => {
  if (typeof window === 'undefined') {
    // Handle server-side rendering or static site generation
    return undefined
  }

  try {
    const storageItem = localStorage.getItem(key)
    if (storageItem) {
      return JSON.parse(storageItem)
    } else {
      console.warn(`no item with ${key} currently`)
      throw new Error('failed to parse object is either null or undefined')
    }
  } catch (error) {
    console.error(error)
  }
}
/**
 * setting the localstorage with data
 * ________________________________
 *
 * @param {string} name key
 * @param {T} item item to be stored
 *  */
export const setStorageItem = <T>(name: string, item: T) => {
  localStorage.setItem(name, JSON.stringify(item))
}

// remove item from localstorage
export function removeItemFromStorage(name: string) {
  localStorage.removeItem(name)
  return null
}

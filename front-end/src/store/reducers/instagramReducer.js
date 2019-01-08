const initState = {}

const instagramReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_LOADING_INSTAGRAM':
      console.log('start loading instagram')
      return {
        ...state,
        loadingInstagram: true,
      }
    case 'LOAD_INSTAGRAM_PHOTOS':
      console.log('instagram photos loaded', action.photos)
      return {
        ...state,
        photos: action.photos,
        loadingInstagram: false,
      }
    case 'LOAD_INSTAGRAM_PHOTOS_ERROR':
      console.log('instagram photos error', action.infos)
      return {
        ...state,
        loadingInstagram: false,
      }
    default:
      return {
        ...state,
        loadingInstagram: false,
      }
  }
}

export default instagramReducer

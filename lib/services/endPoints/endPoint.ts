export const ENDPOINTS = {
  BUSINESS_CONTACT: {
    CREATE: "/BusinessContactUs/CreateBusinessContactUs",
  },
  BUSINESS_INFO: {
    CREATE_OR_UPDATE: "/BusinessInfo/CreateOrUpdateBusinessInfo",
  },
  LIST_OF_VALUES: {
    GET_ALL: "/Listofvalues/GetAllListOfValues",
  },
  OFFERS: {
    GET_ALL: "/Offers/GetAllOffers",
  },
  TEMPLATE_MASTER: {
    GET_ALL: "/TemplateMaster/GetAllActiveTemplate",
    LIKE: "/TemplateMaster/AddTemplateLikes",
    COMMENT: "/TemplateMaster/AddComment",
    FAVORITE: "/TemplateMaster/AddorRemoveFavoriteTemplates",
    ADD_VIEW: "/TemplateMaster/AddTemplateViews",
    GET_USER_INTERACTIONS: "/TemplateMaster/GetFavoritesandLikedTemplateByUser",
  },
  ROOM_MASTER: {
    GET_ALL_ROOM_STYLES: "/RoomMaster/GetAllRoomStyle",
  },
};

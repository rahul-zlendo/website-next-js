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
    GET_COMMUNITY: "/TemplateMaster/GetCommunityTemplate",
    LIKE: "/TemplateMaster/AddTemplateLikes",
    ADD_COMMENT: "/TemplateMaster/AddTemplateComment",
    GET_COMMENTS: "/TemplateMaster/GetTemplateComments",
    ADD_COMMENT_LIKE: "/TemplateMaster/AddTemplateCommentLike",
    DELETE_COMMENT: "/TemplateMaster/UserDeleteComment",
    FAVORITE: "/TemplateMaster/AddorRemoveFavoriteTemplates",
    ADD_VIEW: "/TemplateMaster/AddTemplateViews",
    GET_USER_INTERACTIONS: "/TemplateMaster/GetFavoritesandLikedTemplateByUser",
  },
  FOLLOW: {
    FOLLOW_OR_UNFOLLOW: "/Follow/FolloworUnFollowUser",
    GET_FOLLOW_BY_USER_ID: "/Follow/GetFollowByUserId",
  },
  ROOM_MASTER: {
    GET_ALL_ROOM_STYLES: "/RoomMaster/GetAllRoomStyle",
  },
  LOGIN: {
    GET_USER_DETAILS_BY_TOKEN: "/Login/GetUserDetailsByToken",
  },
};

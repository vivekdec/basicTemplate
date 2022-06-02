const BASE_URL = "https://devdx.eventdecordirect.com/api/";

const APIv2_Cloud_Search_URL = "eucs9v2.ksearchnet.com";

const yotpo_api_key = "wDmmx3pF0pKRt4rMejMxVGGLL52e5QbqikJJsEBA";

export default class nivenUrl {
  static LOGIN_URL = BASE_URL + "login";
  static PROD_DET_URL = BASE_URL + "getProduct";
  static ON_SALE_PRO_URL = BASE_URL + "getOnSaleProducts";
  static PRO_LIST_URL = BASE_URL;
  static POPULAR_PRO_URL = BASE_URL + "getPopularProduct";
  static TOP_CAT_URL = BASE_URL + "getTopCategories";
  static TOP_CAT_LIST_URL = BASE_URL + "getProductsByCategory";
  static SUB_CAT_URL = BASE_URL + "getSubCategory";
  static BEST_SELLER_URL = BASE_URL + "getBestSellerProduct";
  // https://{APIv2_Cloud_Search_URL}/cs/v2/search
  static SEARCH_URL = "https://" + APIv2_Cloud_Search_URL + "/cs/v2/search";
  static POPULAR_CAT_URL = BASE_URL + "getPopularCategories";
  static NEW_PROD_URL = BASE_URL + "getNewProducts";
  static REGISTER_URL = BASE_URL + "register";
  static DAILY_DEAL_URL = BASE_URL + "getDailyDeal";
  static ALL_CAT_URL = BASE_URL + "getCategories";
  static CONTACT_US_URL = BASE_URL + "contactUs";
  static COUNTRIES_URL = BASE_URL + "getCountries";
  static STATES_URL = BASE_URL + "getStates";
  static NEW_ADD_URL = BASE_URL + "address/new";
  static ADD_LIST_URL = BASE_URL + "address/list";
  static DELETE_ADD_URL = BASE_URL + "address/delete/";
  static UPDATE_ADD_URL = BASE_URL + "address/update/";
  static UPDATE_PASS_URL = BASE_URL + "passwordUpdate";
  static ACCT_INFO_URL = BASE_URL + "account/profile";
  static ACCT_INFO_UPDT_URL = BASE_URL + "account/profile/update";
  static ADD_TO_CART_URL = BASE_URL + "add_to_cart";
  // reviews
  static REVIEWS_URL_1 =
    "https://api-cdn.yotpo.com/v1/widget/" + yotpo_api_key + "/products/";
  static REVIEWS_URL_2 = "/reviews.json?per_page=100";
  static GET_CART_URL = BASE_URL + "get_cart";
  static REMOVE_CART_URL = BASE_URL + "remove_cart";
  static UPDATE_CART_URL = BASE_URL + "update_cart";
  static MY_ORDERS_URL = BASE_URL + "orders/";
  static FORGOT_PASS_URL = BASE_URL + "resetPassword";
  static GET_WISHLIST_URL = BASE_URL + "get_wishlist";
  static ADD_WISHLIST_URL = BASE_URL + "add_wishlist";
  static REMOVE_WISHLIST_URL = BASE_URL + "remove_wishlist";
  static REFER_FRIEND_URL = BASE_URL + "refer_friend";
  static ABOUT_US_URL = BASE_URL + "aboutUs";
  static FIND_A_STORE_URL = BASE_URL + "find_a_store";
  static SHIPPING_URL = BASE_URL + "shipping";
  static PRIVACY_AND_CONDITION_URL = BASE_URL + "privacy_and_conditions_of_use";
  // loyalty points
  static LOYALTY_POINTS_URL =
    "https://loyalty.yotpo.com/api/v2/customers?&with_history=true";
  // loyalty offer
  static LOYALTY_REDEMPTION_URL =
    "https://loyalty.yotpo.com/api/v2/redemption_options";
  // loyalty campaign
  static LOYALTY_CAMPAIGN_URL = "https://loyalty.yotpo.com/api/v2/campaigns";
  // loyalty page referral share
  static REFERRAL_SHARE_URL = "https://loyalty.yotpo.com/api/v2/referral/share";
  // loyalty page referral referrer
  static REFERRAL_REFERRER_URL =
    "https://loyalty.yotpo.com/api/v2/referral/referrer";
  static FINANCE_URL = BASE_URL + "apply_for_special_financing";
  static SHIPPING_METHOD_URL = BASE_URL + "getShipping";
  // get order tracking information
  static ORDER_TRACK_URL = "https://onlinetools.ups.com/json/Track";
  static CATALOG_URL = BASE_URL + "request_catalog";
  // get reviews testimonials url
  static TESTIMONIAL_REVIEWS_URL =
    `https://api-cdn.yotpo.com/v1/widget/${yotpo_api_key}/products/yotpo_site_reviews/reviews.json?per_page=1500&page=1`;
  // set shipping url
  static SET_SHIPPING_URL = BASE_URL + "setShipping";
  // customer testimonial write a review
  static WRITE_REVIEW_URL = "https://api.yotpo.com/reviews/dynamic_create";
  static COUPON_URL = BASE_URL + 'applyCoupon';
  // review payment page
  static SET_PAYMENT_URL = BASE_URL + 'setPayment';
  static CREDIT_CARD_URL = BASE_URL + 'setPayment';
  static APPLY_POINTS_URL = BASE_URL + 'applyPoints';
  static VOTE_UP_DOWN_URL = "https://api.yotpo.com/reviews/";
  static CREATE_ORDER_URL = BASE_URL + "createOrder";
}

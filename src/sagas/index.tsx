import { all } from "redux-saga/effects";
// import { watchLogin } from "./login.sagas";
// import { watchGetProdDet } from "./prodDet.sagas";
// import { watchGetOnSalePro } from "./onSalePro.sagas";
// import { watchGetPopularPro } from "./popularPro.sagas";
// import { watchGetTopCat } from "./topCat.sagas";
// import { watchGetTopCatList } from "./topCatList.sagas";
// import { watchGetSubCat } from "./subCat.sagas";
// import { watchGetBestSeller } from "./bestSeller.sagas";
// import { watchGetProList } from "./proList.sagas";
// import { watchGetSearch } from "./search.sagas";
// import { watchGetPopularCat } from "./popularCat.sagas";
// import { watchGetNewProd } from "./newProd.sagas";
// import { watchRegister } from "./register.sagas";
// import { watchGetDailyDeal } from "./dailyDeal.sagas";
// import { watchGetAllCat } from "./allCat.sagas";
import { watchContactUs } from "./contactUs.sagas";
// import { watchGetCountries } from "./countries.sagas";
// import { watchGetStates } from "./states.sagas";
// import { watchGetNewAdd } from "./newAdd.sagas";
// import { watchGetAddList } from "./addList.sagas";
// import { watchGetDeleteAdd } from "./deleteAdd.sagas";
// import { watchGetUpdateAdd } from "./updateAdd.sagas";
// import { watchGetUpdatePass } from "./updatePass.sagas";
// import { watchGetAcctInfo } from "./acctInfo.sagas";
// import { watchGetAcctInfoUPDT } from "./acctInfoUPDT.sagas";
// import { watchGetAddToCart } from "./addToCart.sagas";
// import { watchGetReview } from "./review.sagas";
// import { watchGetCart } from "./getCart.sagas";
// import { watchGetRemoveCart } from "./removeCart.sagas";
// import { watchGetUpdateCart } from "./updateCart.sagas";
// import { watchGetMyOrders } from "./myOrders.sagas";
// import { watchGetOrderDet } from "./orderDet.sagas";
// import { watchForgotPass } from "./forgotPass.sagas";
// import { watchGetWishlist } from "./getWishlist.sagas";
// import { watchAddWishlist } from "./addWishlist.sagas";
// import { watchRemoveWishlist } from "./removeWishlist.sagas";
// import { watchReferFriend } from "./referFriend.sagas";
// import { watchGetAboutUs } from "./aboutUs.sagas";
// import { watchGetFindStore } from "./findStore.sagas";
// import { watchGetShipping } from "./shipping.sagas";
// import { watchGetPrivacyAndCondition } from "./privacyAndcondition.sagas";
// import { watchGetLoyalty } from "./loyalty.sagas";
// import { watchGetLoyaltyRedemption } from "./loyaltyRedemption.sagas";
// import { watchGetLoyaltyCampaign } from "./loyaltyCampaign.sagas";
// import { watchGetLoyaltyReferralShare } from "./loyaltyReferralShare.sagas";
// import { watchGetLoyaltyReferralReferrer } from "./loyaltyReferralReferrer.sagas";
// import { watchGetFinance } from "./finance.sagas";
// import { watchGetShippingMethod } from "./shippingMethod.sagas";
// import { watchGetOrderTrack } from "./orderTrack.sagas";
// import { watchGetOrderDetWithTrackNum } from "./orderDetWithTrackNum.sagas";
// import { watchGetCatalog } from "./catalog.sagas";
// import { watchGetTestimonialReview } from "./testimonialReview.sagas";
// import { watchGetSetShipping } from "./setShipping.sagas";
// import { watchGetWriteReview } from "./writeReview.sagas";
// import { watchCoupon } from "./coupon.sagas";
// import { watchSetPayment } from "./setPayment.sagas";
// import { watchApplyPoints } from "./applyPoints.sagas";
// import { watchGetVoteUpDown } from "./voteUpdown.sagas";
// import { watchCreateOrder } from "./createOrder.sagas";

export default function* root() {
  yield all([
    // watchLogin(),
    // watchGetProdDet(),
    // watchGetOnSalePro(),
    // watchGetPopularPro(),
    // watchGetTopCat(),
    // watchGetTopCatList(),
    // watchGetSubCat(),
    // watchGetBestSeller(),
    // watchGetProList(),
    // watchGetSearch(),
    // watchGetPopularCat(),
    // watchGetNewProd(),
    // watchRegister(),
    // watchGetDailyDeal(),
    // watchGetAllCat(),
    watchContactUs(),
    // watchGetCountries(),
    // watchGetStates(),
    // watchGetNewAdd(),
    // watchGetAddList(),
    // watchGetDeleteAdd(),
    // watchGetUpdateAdd(),
    // watchGetUpdatePass(),
    // watchGetAcctInfo(),
    // watchGetAcctInfoUPDT(),
    // watchGetAddToCart(),
    // watchGetReview(),
    // watchGetCart(),
    // watchGetRemoveCart(),
    // watchGetUpdateCart(),
    // watchGetMyOrders(),
    // watchGetOrderDet(),
    // watchForgotPass(),
    // watchGetWishlist(),
    // watchAddWishlist(),
    // watchRemoveWishlist(),
    // watchReferFriend(),
    // watchGetAboutUs(),
    // watchGetFindStore(),
    // watchGetShipping(),
    // watchGetPrivacyAndCondition(),
    // watchGetLoyalty(),
    // watchGetLoyaltyRedemption(),
    // watchGetLoyaltyCampaign(),
    // watchGetLoyaltyReferralShare(),
    // watchGetLoyaltyReferralReferrer(),
    // watchGetFinance(),
    // watchGetShippingMethod(),
    // watchGetOrderTrack(),
    // watchGetOrderDetWithTrackNum(),
    // watchGetCatalog(),
    // watchGetTestimonialReview(),
    // watchGetSetShipping(),
    // watchGetWriteReview(),
    // watchCoupon(),
    // watchSetPayment(),
    // watchApplyPoints(),
    // watchGetVoteUpDown(),
    // watchCreateOrder()
  ])
}
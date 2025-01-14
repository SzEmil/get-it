export interface EventParams {
    checkout_option?: string | undefined;
    checkout_step?: number | undefined;
    content_id?: string | undefined;
    content_type?: string | undefined;
    coupon?: string | undefined;
    currency?: string | undefined;
    description?: string | undefined;
    fatal?: boolean | undefined;
    items?: Item[] | undefined;
    method?: string | undefined;
    number?: string | undefined;
    promotions?: Promotion[] | undefined;
    screen_name?: string | undefined;
    search_term?: string | undefined;
    shipping?: Currency | undefined;
    tax?: Currency | undefined;
    transaction_id?: string | undefined;
    value?: number | undefined;
    event_label?: string | undefined;
    event_category?: string | undefined;
  }
  
  type Currency = string | number;
  interface Item {
    item_id?: string | undefined;
    item_name?: string | undefined;
    affiliation?: string | undefined;
    coupon?: string | undefined;
    currency?: string | undefined;
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    discount?: Currency | undefined;
    index?: number | undefined;
    item_brand?: string | undefined;
    item_category?: string | undefined;
    item_category2?: string | undefined;
    item_category3?: string | undefined;
    item_category4?: string | undefined;
    item_category5?: string | undefined;
    item_list_id?: string | undefined;
    item_list_name?: string | undefined;
    item_variant?: string | undefined;
    location_id?: string | undefined;
    price?: Currency | undefined;
    promotion_id?: string | undefined;
    promotion_name?: string | undefined;
    quantity?: number | undefined;
  }
  
  interface Promotion {
    creative_name?: string | undefined;
    creative_slot?: string | undefined;
    promotion_id?: string | undefined;
    promotion_name?: string | undefined;
  }
  
  export enum AnalyticsEvent {
    AddPaymentInfo = "add_payment_info",
    AddShippingInfo = "add_shipping_info",
    AddToCart = "add_to_cart",
    AddToWishlist = "add_to_wishlist",
    BeginCheckout = "begin_checkout",
    CheckoutProgress = "checkout_progress",
    EarnVirtualCurrency = "earn_virtual_currency",
    Exception = "exception",
    GenerateLead = "generate_lead",
    JoinGroup = "join_group",
    Login = "login",
    PageView = "page_view",
    PostScore = "post_score",
    Purchase = "purchase",
    Refund = "refund",
    RemoveFromCart = "remove_from_cart",
    ScreenView = "screen_view",
    Search = "search",
    SelectContent = "select_content",
    SelectItem = "select_item",
    SelectPromotion = "select_promotion",
    SetCheckoutOption = "set_checkout_option",
    Share = "share",
    SignUp = "sign_up",
    SpendVirtualCurrency = "spend_virtual_currency",
    ViewCart = "view_cart",
    ViewItem = "view_item",
    ViewItemList = "view_item_list",
    ViewPromotion = "view_promotion",
    ViewSearchResults = "view_search_results",
  }
  
  export enum CURRENCY {
    PLN = "PLN",
  }
  
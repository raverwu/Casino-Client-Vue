export const  LOGIN = 1001;

        /// <summary>
        /// 請求所有牌桌資訊
        /// </summary>
export const REQUEST_ALL_TABLES = 1002;

        /// <summary>
        /// 請求個別牌桌的路圖資訊，請求後會固定收到該桌的路圖，若不再需要，請傳送1004
        /// </summary>
export const SUBSCRIB_SINGLE_TABLE = 1003;

        /// <summary>
        /// 取消傳送個別桌的路圖資訊
        /// </summary>
export const UNSUBSCRIBE_SINGLE_TABLE = 1004;


        /// <summary>
        /// 取得單桌某一日期之所有靴號跟Id(MatchId and MatchNumber)
        /// </summary>
export const REQUEST_DAILY_MATCHES = 1010;

        /// <summary>
        /// 請求某一靴之路圖資訊
        /// </summary>
export const REQUEST_SINGLE_MATCH = 1011;

        

        /// <summary>
        /// 請求某一靴某一局之牌局結果
        /// </summary>
export const REQUEST_GAME_RESULT = 1013;

        /// <summary>
        /// 請求大廳訊息(跑馬燈)
        /// </summary>
export const REQUEST_MESSAGES = 1014;

        /// <summary>
        /// 登入結果
        /// </summary>
export const RESPONSE_LOGIN = 2001;

        /// <summary>
        /// 回傳所有牌桌之基本資訊
        /// </summary>
export const RESPONSE_ALL_TABLES = 2002;

        /// <summary>
        /// 回傳個別桌之路圖資訊
        /// </summary>
export const RESPONSE_SINGLE_TABLE = 2003;



        /// <summary>
        /// 傳送個別桌倒數秒數
        /// </summary>
export const SEND_TABLE_COUNTDOWN = 2006;

        

        /// <summary>
        /// 回傳單桌某一日期之所有靴號跟Id(MatchId and MatchNumber)
        /// </summary>
export const RESPONSE_DAILY_MATCHES = 2009;

        /// <summary>
        /// 回傳某一靴之路圖資訊
        /// </summary>
export const RESPONSE_SINGLE_MATCH = 2010;

        /// <summary>
        /// 回傳某一靴某一局之牌局結果
        /// </summary>
export const RESPONSE_GAME_RESULT = 2011;

        /// <summary>
        /// 回傳大廳訊息(跑馬燈)
        /// </summary>
export const RESPONSE_MESSAGES = 2012;
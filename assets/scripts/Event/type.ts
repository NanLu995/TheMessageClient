//toc协议，ws接收数据
export enum NetworkEventToC {
  ERROR_CODE_TOC = "error_code_toc",
  PAUSE_RECORD_TOC = "pause_record_toc",
  GET_RECORD_LIST_TOC = "get_record_list_toc",
  ADD_ORDER_TOC = "add_order_toc",
  GET_ORDERS_TOC = "get_orders_toc",
  HEART_TOC = "heart_toc",
  ADD_ONE_POSITION_TOC = "add_one_position_toc",
  REMOVE_ONE_POSITION_TOC = "remove_one_position_toc",
  DISPLAY_RECORD_END_TOC = "display_record_end_toc",
  SAVE_RECORD_SUCCESS_TOC = "save_record_success_toc",
  GET_ROOM_INFO_TOC = "get_room_info_toc",
  JOIN_ROOM_TOC = "join_room_toc",
  LEAVE_ROOM_TOC = "leave_room_toc",
  WAIT_FOR_SELECT_ROLE_TOC = "wait_for_select_role_toc",
  AUTO_PLAY_TOC = "auto_play_toc",
  SELECT_ROLE_TOC = "select_role_toc",
  INIT_TOC = "init_toc",
  NOTIFY_ROLE_UPDATE_TOC = "notify_role_update_toc",
  ADD_CARD_TOC = "add_card_toc",
  USE_SHI_TAN_TOC = "use_shi_tan_toc",
  SHOW_SHI_TAN_TOC = "show_shi_tan_toc",
  EXECUTE_SHI_TAN_TOC = "execute_shi_tan_toc",
  SYNC_DECK_NUM_TOC = "sync_deck_num_toc",
  DISCARD_CARD_TOC = "discard_card_toc",
  NOTIFY_PHASE_TOC = "notify_phase_toc",
  USE_LI_YOU_TOC = "use_li_you_toc",
  USE_PING_HENG_TOC = "use_ping_heng_toc",
  WEI_BI_WAIT_FOR_GIVE_CARD_TOC = "wei_bi_wait_for_give_card_toc",
  WEI_BI_GIVE_CARD_TOC = "wei_bi_give_card_toc",
  WEI_BI_SHOW_HAND_CARD_TOC = "wei_bi_show_hand_card_toc",
  USE_CHENG_QING_TOC = "use_cheng_qing_toc",
  SEND_MESSAGE_CARD_TOC = "send_message_card_toc",
  CHOOSE_RECEIVE_TOC = "choose_receive_toc",
  NOTIFY_DYING_TOC = "notify_dying_toc",
  NOTIFY_DIE_TOC = "notify_die_toc",
  NOTIFY_WINNER_TOC = "notify_winner_toc",
  WAIT_FOR_CHENG_QING_TOC = "wait_for_cheng_qing_toc",
  WAIT_FOR_DIE_GIVE_CARD_TOC = "wait_for_die_give_card_toc",
  NOTIFY_DIE_GIVE_CARD_TOC = "notify_die_give_card_toc",
  USE_PO_YI_TOC = "use_po_yi_toc",
  PO_YI_SHOW_TOC = "po_yi_show_toc",
  USE_JIE_HUO_TOC = "use_jie_huo_toc",
  USE_DIAO_BAO_TOC = "use_diao_bao_toc",
  USE_WU_DAO_TOC = "use_wu_dao_toc",
  USE_FENG_YUN_BIAN_HUAN_TOC = "use_feng_yun_bian_huan_toc",
  WAIT_FOR_FENG_YUN_BIAN_HUAN_CHOOSE_CARD_TOC = "wait_for_feng_yun_bian_huan_choose_card_toc",
  FENG_YUN_BIAN_HUAN_CHOOSE_CARD_TOC = "feng_yun_bian_huan_choose_card_toc",
  SKILL_QI_HUO_KE_JU_TOC = "skill_qi_huo_ke_ju_toc",
  SKILL_GUI_ZHA_TOC = "skill_gui_zha_toc",
  SKILL_YI_YA_HUAN_YA_TOC = "skill_yi_ya_huan_ya_toc",
  SKILL_YI_HUA_JIE_MU_TOC = "skill_yi_hua_jie_mu_toc",
  SKILL_TOU_TIAN_TOC = "skill_tou_tian_toc",
  SKILL_HUAN_RI_TOC = "skill_huan_ri_toc",
  SKILL_JI_SONG_TOC = "skill_ji_song_toc",
  SKILL_MIAN_LI_CANG_ZHEN_TOC = "skill_mian_li_cang_zhen_toc",
  SKILL_JIN_SHEN_TOC = "skill_jin_shen_toc",
  SKILL_LIAN_MIN_TOC = "skill_lian_min_toc",
  SKILL_FU_HEI_TOC = "skill_fu_hei_toc",
  SKILL_XIN_SI_CHAO_TOC = "skill_xin_si_chao_toc",
  SKILL_SHI_SI_TOC = "skill_shi_si_toc",
  SKILL_WAIT_FOR_RU_GUI_TOC = "skill_wait_for_ru_gui_toc",
  SKILL_RU_GUI_TOC = "skill_ru_gui_toc",
  SKILL_WAIT_FOR_ZHUAN_JIAO_TOC = "skill_wait_for_zhuan_jiao_toc",
  SKILL_ZHUAN_JIAO_TOC = "skill_zhuan_jiao_toc",
  SKILL_MING_ER_TOC = "skill_ming_er_toc",
  SKILL_JI_ZHI_TOC = "skill_ji_zhi_toc",
  SKILL_WAIT_FOR_CHENG_ZHI_TOC = "skill_wait_for_cheng_zhi_toc",
  SKILL_CHENG_ZHI_TOC = "skill_cheng_zhi_toc",
  SKILL_JIU_JI_A_TOC = "skill_jiu_ji_a_toc",
  SKILL_JIU_JI_B_TOC = "skill_jiu_ji_b_toc",
  SKILL_CHENG_FU_TOC = "skill_cheng_fu_toc",
  SKILL_WAIT_FOR_YI_XIN_TOC = "skill_wait_for_yi_xin_toc",
  SKILL_YI_XIN_TOC = "skill_yi_xin_toc",
  SKILL_ZHI_YIN_TOC = "skill_zhi_yin_toc",
  SKILL_JING_MENG_A_TOC = "skill_jing_meng_a_toc",
  SKILL_JING_MENG_B_TOC = "skill_jing_meng_b_toc",
  SKILL_JIE_DAO_SHA_REN_A_TOC = "skill_jie_dao_sha_ren_a_toc",
  SKILL_JIE_DAO_SHA_REN_B_TOC = "skill_jie_dao_sha_ren_b_toc",
  SKILL_JIAO_JI_A_TOC = "skill_jiao_ji_a_toc",
  SKILL_JIAO_JI_B_TOC = "skill_jiao_ji_b_toc",
  SKILL_MIAO_BI_QIAO_BIAN_A_TOC = "skill_miao_bi_qiao_bian_a_toc",
  SKILL_MIAO_BI_QIAO_BIAN_B_TOC = "skill_miao_bi_qiao_bian_b_toc",
  SKILL_JIN_BI_A_TOC = "skill_jin_bi_a_toc",
  SKILL_JIN_BI_B_TOC = "skill_jin_bi_b_toc",
  SKILL_MIAO_SHOU_A_TOC = "skill_miao_shou_a_toc",
  SKILL_MIAO_SHOU_B_TOC = "skill_miao_shou_b_toc",
  SKILL_JIN_KOU_YI_KAI_A_TOC = "skill_jin_kou_yi_kai_a_toc",
  SKILL_JIN_KOU_YI_KAI_B_TOC = "skill_jin_kou_yi_kai_b_toc",
  SKILL_WAIT_FOR_JIANG_HU_LING_A_TOC = "skill_wait_for_jiang_hu_ling_a_toc",
  SKILL_JIANG_HU_LING_A_TOC = "skill_jiang_hu_ling_a_toc",
  SKILL_WAIT_FOR_JIANG_HU_LING_B_TOC = "skill_wait_for_jiang_hu_ling_b_toc",
  SKILL_JIANG_HU_LING_B_TOC = "skill_jiang_hu_ling_b_toc",
  SKILL_JI_BAN_A_TOC = "skill_ji_ban_a_toc",
  SKILL_JI_BAN_B_TOC = "skill_ji_ban_b_toc",
  SKILL_YOU_DAO_TOC = "skill_you_dao_toc",
  SKILL_BO_AI_A_TOC = "skill_bo_ai_a_toc",
  SKILL_BO_AI_B_TOC = "skill_bo_ai_b_toc",
  SKILL_GUANG_FA_BAO_A_TOC = "skill_guang_fa_bao_a_toc",
  SKILL_WAIT_FOR_GUANG_FA_BAO_B_TOC = "skill_wait_for_guang_fa_bao_b_toc",
  SKILL_GUANG_FA_BAO_B_TOC = "skill_guang_fa_bao_b_toc",
  SKILL_WAIT_FOR_QIANG_LING_TOC = "skill_wait_for_qiang_ling_toc",
  SKILL_QIANG_LING_TOC = "skill_qiang_ling_toc",
  SKILL_JIAN_REN_A_TOC = "skill_jian_ren_a_toc",
  SKILL_JIAN_REN_B_TOC = "skill_jian_ren_b_toc",
  SKILL_SOU_JI_A_TOC = "skill_sou_ji_a_toc",
  SKILL_SOU_JI_B_TOC = "skill_sou_ji_b_toc",
  SKILL_DUI_ZHENG_XIA_YAO_A_TOC = "skill_dui_zheng_xia_yao_a_toc",
  SKILL_DUI_ZHENG_XIA_YAO_B_TOC = "skill_dui_zheng_xia_yao_b_toc",
  SKILL_DUI_ZHENG_XIA_YAO_C_TOC = "skill_dui_zheng_xia_yao_c_toc",
  SKILL_DU_JI_A_TOC = "skill_du_ji_a_toc",
  SKILL_WAIT_FOR_DU_JI_B_TOC = "skill_wait_for_du_ji_b_toc",
  SKILL_DU_JI_B_TOC = "skill_du_ji_b_toc",
  SKILL_DU_JI_C_TOC = "skill_du_ji_c_toc",
}

//tos协议，ws发送数据
export enum NetworkEventToS {
  PAUSE_RECORD_TOS = "pause_record_tos",
  GET_RECORD_LIST_TOS = "get_record_list_tos",
  ADD_ORDER_TOS = "add_order_tos",
  GET_ORDERS_TOS = "get_orders_tos",
  HEART_TOS = "heart_tos",
  ADD_ONE_POSITION_TOS = "add_one_position_tos",
  REMOVE_ONE_POSITION_TOS = "remove_one_position_tos",
  DISPLAY_RECORD_TOS = "display_record_tos",
  JOIN_ROOM_TOS = "join_room_tos",
  ADD_ROBOT_TOS = "add_robot_tos",
  REMOVE_ROBOT_TOS = "remove_robot_tos",
  AUTO_PLAY_TOS = "auto_play_tos",
  SELECT_ROLE_TOS = "select_role_tos",
  USE_SHI_TAN_TOS = "use_shi_tan_tos",
  EXECUTE_SHI_TAN_TOS = "execute_shi_tan_tos",
  END_MAIN_PHASE_TOS = "end_main_phase_tos",
  USE_LI_YOU_TOS = "use_li_you_tos",
  USE_PING_HENG_TOS = "use_ping_heng_tos",
  USE_WEI_BI_TOS = "use_wei_bi_tos",
  WEI_BI_GIVE_CARD_TOS = "wei_bi_give_card_tos",
  USE_CHENG_QING_TOS = "use_cheng_qing_tos",
  SEND_MESSAGE_CARD_TOS = "send_message_card_tos",
  CHOOSE_WHETHER_RECEIVE_TOS = "choose_whether_receive_tos",
  END_FIGHT_PHASE_TOS = "end_fight_phase_tos",
  CHENG_QING_SAVE_DIE_TOS = "cheng_qing_save_die_tos",
  DIE_GIVE_CARD_TOS = "die_give_card_tos",
  USE_PO_YI_TOS = "use_po_yi_tos",
  PO_YI_SHOW_TOS = "po_yi_show_tos",
  USE_JIE_HUO_TOS = "use_jie_huo_tos",
  USE_DIAO_BAO_TOS = "use_diao_bao_tos",
  USE_WU_DAO_TOS = "use_wu_dao_tos",
  END_RECEIVE_PHASE_TOS = "end_receive_phase_tos",
  USE_FENG_YUN_BIAN_HUAN_TOS = "use_feng_yun_bian_huan_tos",
  FENG_YUN_BIAN_HUAN_CHOOSE_CARD_TOS = "feng_yun_bian_huan_choose_card_tos",
  SKILL_QI_HUO_KE_JU_TOS = "skill_qi_huo_ke_ju_tos",
  SKILL_GUI_ZHA_TOS = "skill_gui_zha_tos",
  SKILL_YI_YA_HUAN_YA_TOS = "skill_yi_ya_huan_ya_tos",
  SKILL_YI_HUA_JIE_MU_TOS = "skill_yi_hua_jie_mu_tos",
  SKILL_TOU_TIAN_TOS = "skill_tou_tian_tos",
  SKILL_JI_SONG_TOS = "skill_ji_song_tos",
  SKILL_MIAN_LI_CANG_ZHEN_TOS = "skill_mian_li_cang_zhen_tos",
  SKILL_JIN_SHEN_TOS = "skill_jin_shen_tos",
  SKILL_LIAN_MIN_TOS = "skill_lian_min_tos",
  SKILL_XIN_SI_CHAO_TOS = "skill_xin_si_chao_tos",
  SKILL_RU_GUI_TOS = "skill_ru_gui_tos",
  SKILL_ZHUAN_JIAO_TOS = "skill_zhuan_jiao_tos",
  SKILL_JI_ZHI_TOS = "skill_ji_zhi_tos",
  SKILL_CHENG_ZHI_TOS = "skill_cheng_zhi_tos",
  SKILL_YI_XIN_TOS = "skill_yi_xin_tos",
  SKILL_JING_MENG_A_TOS = "skill_jing_meng_a_tos",
  SKILL_JING_MENG_B_TOS = "skill_jing_meng_b_tos",
  SKILL_JIE_DAO_SHA_REN_A_TOS = "skill_jie_dao_sha_ren_a_tos",
  SKILL_JIE_DAO_SHA_REN_B_TOS = "skill_jie_dao_sha_ren_b_tos",
  SKILL_JIAO_JI_A_TOS = "skill_jiao_ji_a_tos",
  SKILL_JIAO_JI_B_TOS = "skill_jiao_ji_b_tos",
  SKILL_MIAO_BI_QIAO_BIAN_A_TOS = "skill_miao_bi_qiao_bian_a_tos",
  SKILL_MIAO_BI_QIAO_BIAN_B_TOS = "skill_miao_bi_qiao_bian_b_tos",
  SKILL_JIN_BI_A_TOS = "skill_jin_bi_a_tos",
  SKILL_JIN_BI_B_TOS = "skill_jin_bi_b_tos",
  SKILL_MIAO_SHOU_A_TOS = "skill_miao_shou_a_tos",
  SKILL_MIAO_SHOU_B_TOS = "skill_miao_shou_b_tos",
  SKILL_JIN_KOU_YI_KAI_A_TOS = "skill_jin_kou_yi_kai_a_tos",
  SKILL_JIN_KOU_YI_KAI_B_TOS = "skill_jin_kou_yi_kai_b_tos",
  SKILL_JIANG_HU_LING_A_TOS = "skill_jiang_hu_ling_a_tos",
  SKILL_JIANG_HU_LING_B_TOS = "skill_jiang_hu_ling_b_tos",
  SKILL_JI_BAN_A_TOS = "skill_ji_ban_a_tos",
  SKILL_JI_BAN_B_TOS = "skill_ji_ban_b_tos",
  SKILL_BO_AI_A_TOS = "skill_bo_ai_a_tos",
  SKILL_BO_AI_B_TOS = "skill_bo_ai_b_tos",
  SKILL_GUANG_FA_BAO_A_TOS = "skill_guang_fa_bao_a_tos",
  SKILL_GUANG_FA_BAO_B_TOS = "skill_guang_fa_bao_b_tos",
  SKILL_QIANG_LING_TOS = "skill_qiang_ling_tos",
  SKILL_JIAN_REN_A_TOS = "skill_jian_ren_a_tos",
  SKILL_JIAN_REN_B_TOS = "skill_jian_ren_b_tos",
  SKILL_SOU_JI_A_TOS = "skill_sou_ji_a_tos",
  SKILL_SOU_JI_B_TOS = "skill_sou_ji_b_tos",
  SKILL_DUI_ZHENG_XIA_YAO_A_TOS = "skill_dui_zheng_xia_yao_a_tos",
  SKILL_DUI_ZHENG_XIA_YAO_B_TOS = "skill_dui_zheng_xia_yao_b_tos",
  SKILL_DUI_ZHENG_XIA_YAO_C_TOS = "skill_dui_zheng_xia_yao_c_tos",
  SKILL_DU_JI_A_TOS = "skill_du_ji_a_tos",
  SKILL_DU_JI_B_TOS = "skill_du_ji_b_tos",
  SKILL_DU_JI_C_TOS = "skill_du_ji_c_tos",
}

//程序事件，用于程序控制
export enum ProcessEvent {
  NETWORK_ERROR = "network_error",
  UPDATE_ONLINE_COUNT = "update_online_count",
  JOIN_ROOM = "join_room",
  LEAVE_ROOM = "leave_room",
  ADD_ROOM_POSITION = "add_room_position",
  REMOVE_ROOM_POSITION = "remove_room_position",
  ADD_ROBOT = "add_robot",
  REMOVE_ROBOT = "remove_robot",
  GET_ORDERS = "get_orders",
  ADD_ORDER = "add_order",
  CREATE_ROOM = "create_room",
  INIT_GAME = "init_game",
  START_SELECT_CHARACTER = "start_select_character",
  CONFORM_SELECT_CHARACTER = "conform_select_character",
  GET_PHASE_DATA = "get_phase_data",
  SYNC_DECK_NUM = "sync_deck_num",
  ADD_CARDS = "add_cards",
  DISCARD_CARDS = "discard_cards",
  GET_AUTO_PLAY_STATUS = "get_auto_play_status",
  STOP_COUNT_DOWN = "stop_count_down",
  SELECT_HAND_CARD = "select_hand_card",
  UPDATE_CHARACTER = "update_character",
  USE_SHI_TAN = "use_shitan",
  SHOW_SHI_TAN = "show_shi_tan",
  EXECUTE_SHI_TAN = "execute_shi_tan",
  USE_LI_YOU = "use_li_you",
  USE_PING_HENG = "use_ping_heng",
  WEI_BI_WAIT_FOR_GIVE_CARD = "wei_bi_wait_for_give_card",
  WEI_BI_GIVE_CARD = "wei_bi_give_card",
  WEI_BI_SHOW_HAND_CARD = "wei_bi_show_hand_card",
  USE_CHENG_QING = "use_cheng_qing",
  SEND_MESSAGE = "send_message",
  CHOOSE_RECEIVE = "choose_receive",
  PLAYER_DYING = "player_dying",
  PLAYER_DIE = "player_die",
  PLAYER_WIN = "player_win",
  WAIT_FOR_CHENG_QING = "wait_for_cheng_qing",
  WAIT_FOR_DIE_GIVE_CARD = "wait_for_die_give_card",
  PLAYER_DIE_GIVE_CARD = "player_die_give_card",
  USE_PO_YI = "use_po_yi",
  PO_YI_SHOW_MESSAGE = "po_yi_show_message",
  USE_JIE_HUO = "use_jie_huo",
  USE_DIAO_BAO = "use_diao_bao",
  USE_WU_DAO = "use_wu_dao",
  USE_FENG_YUN_BIAN_HUAN = "use_feng_yun_bian_huan",
  WAIT_FOR_FENG_YUN_BIAN_HUAN_CHOOSE_CARD = "wait_for_feng_yun_bian_huan_choose_card",
  FENG_YUN_BIAN_HUAN_CHOOSE_CARD = "feng_yun_bian_huan_choose_card",
}

//游戏事件，触发扳机
export enum GameEvent {
  ACCEPT_MESSAGE = "accept_message",
  ACCEPT_RED_MESSAGE = "accept_red_message",
  ACCEPT_BLUE_MESSAGE = "accept_blue_message",
  ACCEPT_BLACK_MESSAGE = "accept_black_message",
  CARD_STATUS_CHANGE = "card_status_change",
  CARD_USEAGE_CHANGE = "card_usage_change",
  CHARACTER_STATUS_CHANGE = "character_status_change",
  CHARACTER_DYING = "character_dying",
  CHARACTER_DIE = "character_die",
  GAME_PHASE_CHANGE = "game_phase_change",
  GAME_TURN_CHANGE = "game_turn_change",
  PLAYER_SEND_MESSAGE = "player_send_message",
}

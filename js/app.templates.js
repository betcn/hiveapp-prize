angular.module('bc.main').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('tpl/404.html',
    "<div>\n" +
    "    <h3>Oops..</h3>\n" +
    "    <p>The page you are looking for cannot be found</p>\n" +
    "    <p>Try the <a href=\" \">home page</a></p>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/advanced.html',
    "<div id=\"advanced\" class=\"modal fade\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "                <h3 id=\"myModalLabel\">{{'_AdvancedHeader1_' | i18n}}</h3>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <h2>{{'_AdvancedHeader2_' | i18n}}</h2>\n" +
    "\n" +
    "                <h3>{{'_AdvancedHeader3_' | i18n}}</h3>\n" +
    "\n" +
    "                <p>{{'_AdvancedP1_' | i18n}}</p>\n" +
    "\n" +
    "                <h3>{{'_AdvancedHeader4_' | i18n}}</h3>\n" +
    "\n" +
    "                <p>{{'_AdvancedP2pt1_' | i18n}}\n" +
    "                <br/>\n" +
    "                {{'_AdvancedP2pt2_' | i18n}}\n" +
    "                <br/>\n" +
    "                {{'_AdvancedP2pt3_' | i18n}}\n" +
    "                <br/>\n" +
    "                {{'_AdvancedP2pt4_' | i18n}}\n" +
    "                </p>\n" +
    "\n" +
    "                <h3>{{'_AdvancedHeader5_' | i18n}}</h3>\n" +
    "\n" +
    "                <p>{{'_AdvancedP3_' | i18n}}\n" +
    "                </p>\n" +
    "\n" +
    "                <h3>{{'Transaction lookup'|i18n}}</h3>\n" +
    "                <p>{{'Enter a transaction ID for a bet or payout transaction'|i18n}}</p>\n" +
    "\n" +
    "                <form ng-submit=\"txSearch()\">\n" +
    "                <fieldset>\n" +
    "                    <input type=\"text\" id=\"txQuery\" style=\"width:450px;\" ng-model=\"txQuery\" />\n" +
    "                    <input type=\"submit\" class=\"btn btn-default\"  value=\"{{'Continue'|i18n}}\" />\n" +
    "                </fieldset></form>\n" +
    "                <h3 ng-show=\"txLookupFail\">{{txLookupFail}}</h3>\n" +
    "                <div ng-show=\"txLookup.tx_in\">\n" +
    "                  <p style=\"font-size:10px;\">{{ txLookup.tx_in }}:{{ txLookup.output_number }}</p>\n" +
    "                  <ul>\n" +
    "                      <li>{{'_TrLi1_' | i18n}}{{ txLookup.createdAt | date:\"MM/dd/yy HH:mm:ss\" }}</li>\n" +
    "                      <li>{{'_TrLi2_' | i18n}}{{ txLookup.createdAt | date:\"MM/dd/yy\" }}</li>\n" +
    "                      <li>{{'_TrLi3_' | i18n}}< {{ txLookup.game }}</li>\n" +
    "                      <li>{{'_TrLi4_' | i18n}}{{ txLookup.tx_in }}</li>\n" +
    "                      <li>{{'_TrLi5_' | i18n}}{{ txLookup.tx_out }}</li>\n" +
    "                      <li>{{'_TrLi6_' | i18n}}{{ txLookup.txOutStatus }}</li>\n" +
    "                      <li>{{'_TrLi7_' | i18n}}{{ txLookup.wager | btc }}</li>\n" +
    "                      <li>{{'_TrLi8_' | i18n}}{{ txLookup.winnings > txLookup.wager && \"WIN\" || \"LOSE\" }}</li>\n" +
    "                      <li>{{'_TrLi9_' | i18n}}{{ txLookup.winnings | btc }}</li>\n" +
    "                      <li>{{'_TrLi10_' | i18n}}{{ txLookup.player_id }}</li>\n" +
    "                      <li>{{'_TrLi11_' | i18n}}{{ txLookup.result }}</li>\n" +
    "                  </ul>\n" +
    "                  <h4>{{'_TrHeader2_' | i18n}}</h4>\n" +
    "                  <h5>{{'_TrHeader3_' | i18n}}</h5>\n" +
    "                  <p>{{'_TrP1_' | i18n}}<a target=\"_blank\" href=\"/dice/hashes.keys\">{{'_hashes.keys_' | i18n}}</a></p>\n" +
    "                  <p>{{'_TrP2_' | i18n}}<a target=\"_blank\" href=\"/dice/secret.keys\">{{'_secret.keys_' | i18n}}</a></p>\n" +
    "                  <h5>{{'_TrHeader4_' | i18n}}</h5>\n" +
    "                  <p>{{'_TrP3_' | i18n}}{{ txLookup.keyDate | date:\"MM/dd/yy\" }} in {{'_hashes.keys_' | i18n}}<br>\n" +
    "                  sha256(<u><span ng-click=\"showDiceDetails(txLookup)\">{{ secretKey }}</span></u>) -> {{ txLookup.secret_hash }}\n" +
    "                  </p>\n" +
    "                  <h5>{{'_TrHeader5_' | i18n}}</h5>\n" +
    "                  <p>{{'_TrP4_' | i18n}}\n" +
    "                  </p>\n" +
    "                  <pre class='data'>\n" +
    "\n" +
    "                  hmac_sha512(<u><span ng-click=\"showDiceDetails(txLookup)\">{{ secretKey }}</span></u>, {{ txLookup.tx_in }}:{{ txLookup.output_number }}) -> {{ txLookup.hmachash }}\n" +
    "                  </pre>\n" +
    "                  <h5>{{'_TrHeader6_' | i18n}}</h5>\n" +
    "                  <pre class='data'>{{'_TrP5_' | i18n}}{{ txLookup.hmachash }} -> {{ txLookup.hmachash.substring(0, 4) }} -> {{ txLookup.result }}\n" +
    "                  </pre>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/affiliate-cn.html',
    "\n" +
    "\n" +
    "<div class=\"tab-content\">\n" +
    "<h5>财神堂™ 代理商计划</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p>\n" +
    "各位未来的合作伙伴大家好！\n" +
    "</p><br /><p>\n" +
    "欢迎您加入财神堂™ 代理商计划！\n" +
    "</p><br /><p>\n" +
    "首先请允许我自我介绍一下，我叫彼得.诺兰，我是财神堂™博彩娱乐网的公关总监。欢迎大家向通过于财神堂™合作而打造坚实的经济基础迈出了第一步。\n" +
    "</p><br /><p>\n" +
    "我本人也是由做网络产品的代理商起家的，我最了解只要努力工作绝对看得到大家想要的结果。我会非常乐意地分享自己经过二十年工作所积累的丰富的网络产品市场营销经验。\n" +
    "</p><br /><p>\n" +
    "财神堂™博彩娱乐网致力于提供卓越服务，以使我们的代理商增长而同时增加其网站流量及收入。\n" +
    "</p><br /><p>\n" +
    "财神堂™博彩娱乐网拥有业内最好的代理商计划，此计划特意为满足以比特币为基础的博彩娱乐项目的需求而精心设计的。\n" +
    "</p><br /><p>\n" +
    "财神堂™博彩娱乐网与比特币。我们及时支付的高额用尽及分析工具无可比喻。\n" +
    "</p><br /><p>\n" +
    "财神堂™博彩娱乐网拥有业内最好的代理商计划主要提供以下三种合作方式：\n" +
    "1）收入分成，2）CPA， 3）以上两种的结合。如此我们的代理商可以获得公平的回报。\n" +
    "</p><br /><p>\n" +
    "实时数据分析及报告形成, 及时付款, 特制的网页及营销工具只是我们提供服务的一小部分。通过有效利用财神堂™博彩娱乐网武库中多种利器，您可以确保与我们合作为您带来丰富的经验与极高的经济效率。\n" +
    "</p><br /><p>\n" +
    "我们希望尽快与您开展合作\n" +
    "</p><br /><p>\n" +
    "祝工作顺利！\n" +
    "</p><br /><p>\n" +
    "彼得.诺兰<br />公关总监<br />\n" +
    "<a href=\"mailto:peter.nolan@betcoin.tm\">peter.nolan@betcoin.tm</a><br />\n" +
    "<a target=\"_blank\">www.betcoin.tm</a>\n" +
    "</p><br />\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/affiliate.html',
    "\n" +
    "\n" +
    "<div class=\"tab-content\">\n" +
    "<h5>BetCoin ™ Affiliate Program!</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p>\n" +
    "Dear potential partners,\n" +
    "</p><br /><p>\n" +
    "Welcome to the BetCoin ™ Affiliate Program!\n" +
    "</p><br /><p>\n" +
    "Allow me to introduce myself, my name is Peter Nolan and I'm the PR Director here at BetCoin ™. Welcome to the initial step of being more profitable economically, which is joining us.\n" +
    "</p><br /><p>\n" +
    "Since I began as an affiliate myself, I know that by working hard you see the fruition of your efforts, and I'm more than happy to share the extensive marketing experience I've acquired throughout the years.\n" +
    "</p><br /><p>\n" +
    "Here at BetCoin ™  we are devoted to provide outstanding service, helping affiliates grow and increase their traffic and revenue at the same time.\n" +
    "</p><br /><p>\n" +
    "BetCoin ™ has the best affiliate program designed specifically to meet the needs of bitcoin-based casino and gaming affiliates 365 days a year!\n" +
    "</p><br /><p>\n" +
    "Consultation with bitcoin-based casino and gaming affiliates has enabled us to create an affiliate program that offers fantastic gaming sites with excellent offers and player retention. Our easily obtainable high commissions and reporting tools are second to none.\n" +
    "</p><br /><p>\n" +
    "Our bitcoin-based casino and gaming affiliates program operates under different modalities: Revenue Share, CPA and a hybrid of the previous two, enabling our bitcoin-based casino and gaming affiliates to obtain fair revenue.\n" +
    "</p><br /><p>\n" +
    "Real time stats, timely payments, customized landing pages and marketing tools are just some of the services you can take advantage of to make your time with BetCoin ™ a positive and rich experience!\n" +
    "</p><br /><p>\n" +
    "I look forward to working with you.\n" +
    "</p><br /><p>\n" +
    "Best regards,\n" +
    "</p><br /><p>\n" +
    "PR Director<br />\n" +
    "<a href=\"mailto:peter.nolan@betcoin.tm\">peter.nolan@betcoin.tm</a><br />\n" +
    "<a target=\"_blank\">www.betcoin.tm</a>\n" +
    "</p><br />\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/awards-cn.html',
    "<div class=\"tab-content\">\n" +
    "<h5>{{'Awards' | i18n}}</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p><b>青铜级, 白银级, 黄金级, 铂金级以及钻石级:</b></p>\n" +
    "<br /><p>\n" +
    "共有四种奖项:\n" +
    "</p><ol>\n" +
    "<li>\n" +
    "根据在任何一个级别中下注的比特币总额。当玩家下注金额达到1比特币，其获得10个奖励点的奖项, 之后赌注总额再增加5比特币，其获得50个奖励点的奖项, 之后赌注总额再增加10比特币，其获得100个奖励点的奖项, 之后赌注总额再增加50比特币，其获得500个奖励点的奖项  ，之后赌注总额再增加100比特币，其获得1000个奖励点的奖项。 此后循环周期重启。\n" +
    "</li><li>根据旋转次数，每旋转一次可获得1个奖励点数。\n" +
    "</li><li>根据旋转次数连环输赢：每次连续赢了5次或连续输了5次，可获得5个奖励点数。\n" +
    "</li><li>根据罕见赢注：任何一轮的正数乘数等于奖励点数的数额。例如，青铜轮的3倍赢注等于3个奖励点数，钻石轮的25倍赢注则等于25个奖励点数。</li>\n" +
    "</ol>\n" +
    "<p>\n" +
    "***存入任何大小的比特币金额 边可以获得设置别名的奖励。\n" +
    "</p><p>在任何一个级别中下赢得的奖励点数只在这一个级别中有效，升级更高的级别之后奖励点数计数将想重新开始。</p><p>奖励点数用于确定玩家在其级别中的排名以及确定月奖赢家。\n" +
    "</p>\n" +
    "</div>\n" +
    "<br />\n" +
    "<h5>{{'Recent Awards'|i18n}}</h5>\n" +
    "<table class=\"table table-bordered dicesTable\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>{{'Player' | i18n}}</th>\n" +
    "            <th>{{'_rewardpoints_' | i18n}}</th>\n" +
    "            <th>{{'Date' | i18n}}</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr data-ng-repeat=\"circle in circles | orderBy:createdAt:reverse\">\n" +
    "            <td class=\"\">\n" +
    "                {{ circle.player_alias }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ calcPoints(circle) }}\n" +
    "            </td>\n" +
    "            <td class=\"\">\n" +
    "                {{ circle.createdAt | date:\"MM/dd/yy HH:mm:ss\" }}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/awards.html',
    "<div class=\"tab-content\">\n" +
    "<h5>{{'Awards' | i18n}}</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p><b>Bronze, Silver, Gold, Platinum, and Diamond leagues:</b></p>\n" +
    "<br /><p>\n" +
    "There are 4 main types of awards:\n" +
    "</p><ol>\n" +
    "<li>\n" +
    "based on total amount amount of BTC wagered in any given league. Once a player wagers a total of 1 BTC - he receives 10 points, then for the next total of 5 BTC - 50 more points, then for the next total of 10 BTC - 100 more points, for the next total of 50 BTC - 500 more points, and for the next total of 100 BTC - 1000 more points. Then the cycle repeats from the beginning.\n" +
    "</li><li>Based on the number of spins - each spin equals 1 point.\n" +
    "</li><li>Based on winning/losing streaks - each streak of 5 wins or 5 losses in a row equals 5 points.\n" +
    "</li><li>Based on rare wins - the positive multiplier on any bet equals the same number of points.<!-- For example, a 3x win on the bronze circle equals 3 reward points, a 25x win on the diamond circle equals 25 points--></li>\n" +
    "</ol>\n" +
    "<p>\n" +
    "***Depositing any amount of BTC automatically enables the alias reset option.\n" +
    "</p><p>Reward points received in any given league are only valid for that particular league, upon promotion to a higher league, the reward point count is reset.</p><p>Reward points are used to determine a user's placement in his league, and to determine the winners of our Monthly Prizes.\n" +
    "</p>\n" +
    "</div>\n" +
    "<br />\n" +
    "<h5>{{'Recent Awards'|i18n}}</h5>\n" +
    "<table class=\"table table-bordered dicesTable\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>{{'Player' | i18n}}</th>\n" +
    "            <th>{{'_rewardpoints_' | i18n}}</th>\n" +
    "            <th>{{'Date' | i18n}}</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr data-ng-repeat=\"dice in dices | orderBy:createdAt:reverse\">\n" +
    "            <td class=\"\">\n" +
    "                <div blockchain-info=\"{{ dice.player_id }}\" chars=\"8\"></div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ dice.pointsAwarded }}\n" +
    "            </td>\n" +
    "            <td class=\"\">\n" +
    "                {{ dice.createdAt | date:\"MM/dd/yy HH:mm:ss\" }}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/custombets-cn.html',
    "<div id=\"custombets-cn\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">{{'Custom Bets'|i18n}}</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        玩家单次下注金额可低至 0.01 比特币或高至 888 比特币而奖金乘数高达 64000。共有 27 种不同输赢概率的游戏，从 97.6563%开始一直到 0.001%，以适合任何玩家的胃口。如果某超级大玩家认为这些还不够的话，其可以联系技术支持，而本娱乐场专门为该玩家会将最高下注金额手工提高十倍以达全球最高的高的比特比奖金标准。\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/custombets.html',
    "<div id=\"custombets\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">{{'Custom Bets'|i18n}}</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        Players can bet as little as 0.01 BTC, or as much as 888 BTC on a single bet, with the prize multiplier exceeding 64,000. There are 27 different games with different win odds – starting from 97.6563%, all the way to 0.001%, to suite any type of risk appetite. If this is not enough for a particularly demanding player - special arrangements can be  made by contacting our support team, and we will manually increase the maximum bet size tenfold\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/error404.html',
    "<div class=\"container\">\n" +
    "    <h3>Oops, nothing found here</h3>\n" +
    "    <a class=\"btn btn-primary btn-lg\" href=\"\">Try the home page</a>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/faq-cn.html',
    "<div id=\"faq-cn\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\"><div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "      <h3 id=\"myModalLabel\">常见问题</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "<h4>财神轮™玩家级别是什么?</h4>\n" +
    "<br />\n" +
    "<p>为了提供公平的符合逻辑的讲理系统，财神轮™设置了以下独创的玩家级别，奖励点数及奖项制度：\n" +
    " </p><br /><p> 财神轮™共有五个不同的玩家级别, 每个级别渐次代表玩家的逐步升高的身份，而同时提供月来越高的奖励。\n" +
    " </p><br /><ol><li>青铜级: 此级别的玩家下注总额在1比特币以下。若青铜级玩家在90天以内没有用比特币下注其将会开除青铜\n" +
    "</li><li>白银级: 级别的玩家在进入青铜级之后下注总额在1比特币以上。若白银级玩家在90天以内下注总额低于 0.01比特币其将会降级至青铜级。\n" +
    "</li><li>黄金级: 级别的玩家在进入白银级之后下注总额在10比特币以上。若黄金级玩家在90天以内下注总额低于  1比特币其将会降级至青铜级。\n" +
    "</li><li>铂金级: 级别的玩家在进入黄金级之后下注总额在100比特币以上。若黄金级玩家在90天以内下注总额低于  10比特币其将会降级至青铜级。\n" +
    "</li><li>钻石级: 级别的玩家在进入铂金级之后下注总额在1000比特币以上。若黄金级玩家在90天以内下注总额低   于100比特币其将会降级至青铜级。</li>\n" +
    "\n" +
    "<h4>奖励点数是什么?</h4>\n" +
    "<br />\n" +
    "<p>奖励点数用于确定玩家在其级别中的排名以及确定月奖赢家。</p>\n" +
    "<h4>奖项 </h4>\n" +
    "<br />\n" +
    "<p><b>青铜级, 白银级, 黄金级, 铂金级以及钻石级:</b></p><br />\n" +
    "<p>\n" +
    "共有四种奖项:\n" +
    "</p><ol>\n" +
    "<li>\n" +
    "根据在任何一个级别中下注的比特币总额。当玩家下注金额达到1比特币，其获得10个奖励点的奖项,\n" +
    "之后赌注总额再增加5比特币，其获得50个奖励点的奖项, 之后赌注总额再增加10比特币，其获得\n" +
    "100个奖励点的奖项, 之后赌注总额再增加50比特币，其获得500个奖励点的奖项  ，之后赌注总额\n" +
    "再增加100比特币，其获得1000个奖励点的奖项。 此后循环周期重启。\n" +
    "</li><li>根据旋转次数，每旋转一次可获得1个奖励点数。\n" +
    "</li><li>根据旋转次数连环输赢：每次连续赢了5次或连续输了5次，可获得5个奖励点数。\n" +
    "</li><li>根据罕见赢注：任何一轮的正数乘数等于奖励点数的数额。<!--例如，黄铜轮的2倍赢注等于2个奖励点数，  钻石轮的25倍赢注则等于25个奖励点数。--></li>\n" +
    "</ol>\n" +
    "<p>\n" +
    "***存入任何大小的比特币金额 边可以获得设置别名的奖励。\n" +
    "</p><br /><p>在任何一个级别中下赢得的奖励点数只在这一个级别中有效，升级更高的级别之后奖励点数计数将想重\n" +
    " 新开始。</p><br /><p>奖励点数用于确定玩家在其级别中的排名以及确定月奖赢家。\n" +
    "</p>\n" +
    "\n" +
    "<h4>财神轮™月奖</h4>\n" +
    "<br />\n" +
    "<p>每一个级别奖励点数最高的玩家将收到相应的月奖。每月末</p><p>日月奖将自动转至各合格玩家注册的比特币钱包地之中。\n" +
    " </p>\n" +
    " <ol><li>\n" +
    "每月末 日月奖将自动转至各合格万家注册的比特币钱包地之中。\n" +
    "</li><li>青铜级: 一等奖  0.01BTC, 二等奖: 0.005 BTC, 三等奖: 0.003 BTC\n" +
    "</li><li>白银级: 一等奖: 0.1BTC, 二等奖: 0.05 BTC, 三等奖: 0.03 BTC\n" +
    "</li><li>黄金级: 一等奖: 1 BTC, 二等奖: 0.5 BTC, 三等奖: 0.3 BTC\n" +
    "</li><li>铂金级: 一等奖: 10BTC, 二等奖: 5BTC, 三等奖: 3 BTC\n" +
    "</li><li>钻石级: 一等奖: 100BTC, 二等奖: 50 BTC, 三等奖: 30 BTC\n" +
    "</li></ol>\n" +
    "\n" +
    "      <br/>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "      <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "    </div>\n" +
    "  </div></div>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/faq.html',
    "<div id=\"faq\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\"><div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "      <h3 id=\"myModalLabel\">{{'_FaqHeader1_' | i18n}}</h3>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "<h4>What are the Betcoin ™ Dice Player Leagues?</h4>\n" +
    "<br />\n" +
    "<p>In order to provide players with a fair and logically sound rewards system, BetCoin ™ Dice has established the following system of Player Leagues, Reward Points, and Awards:\n" +
    " </p><br /><p>There are five different leagues, which progressively indicate a higher player status, as well as provide access to higher awards and prizes:\n" +
    " </p><br /><ol><li>Bronze League: This league is for players, who have wagered any amount of bitcoin below 1 BTC. <!--If a Bronze League member hasn't wagered any amount of BTC within 90 days<change>, he is removed from the leaderboard--></change>.\n" +
    "</li><li>Silver League: This league is for players, who have wagered a total of 1 BTC after entering the Bronze League.If a Silver League player hasn't wagered a total of at least at least 0.01 BTC within 90 days, he's demoted to the Bronze League.\n" +
    "</li><li>Gold League: This league is for players, who have wagered a total of 10 BTC after entering the Silver League. If a Gold League player hasn't wagered a total of at least at least 0.1 BTC within 90 days, he's demoted to the Silver League.\n" +
    "</li><li>Platinum League: This league is for players, who have wagered a total of 100 BTC after entering the Gold League. If a  Platinum League player hasn't wagered a total of at least at least 1 BTC within 90 days, he's demoted to the Gold League.\n" +
    "</li><li>Diamond league: This league is for players, who have wagered a total of 1000 BTC after entering the Platinum League. This is the top league in BetCoin ™ Dice. If a Diamond League player hasn't wagered a total of at least at least 10 BTC within 90 days, he's demoted to the Platinum League. </li>\n" +
    "\n" +
    "<h4>What are the reward points?</h4>\n" +
    "<br />\n" +
    "<p>Reward points are used to determine a user's placement in his league, and to determine the winners of our Monthly Prizes.</p>\n" +
    "<br />\n" +
    "<p>Reward points received in any given league are only valid for that particular league, upon promotion to a higher league, the reward point count is reset. </p>\n" +
    "<br />\n" +
    "<p><b>Bronze, Silver, Gold, Platinum, and Diamond leagues:</b></p><br />\n" +
    "<p>\n" +
    "There are 4 main types of awards:\n" +
    "</p><ol>\n" +
    "<li>\n" +
    "based on total amount amount of BTC wagered in any given league. Once a player wagers a total of 1 BTC - he receives 10 points, then for the next total of 5 BTC - 50 more points, then for the next total of 10 BTC - 100 more points, for the next total of 50 BTC - 500 more points, and for the next total of 100 BTC - 1000 more points. Then the cycle repeats from the beginning.\n" +
    "</li><li>Based on the number of spins - each spin equals 1 point.\n" +
    "</li><li>Based on winning/losing streaks - each streak of 5 wins or 5 losses in a row equals 5 points.\n" +
    "</li><li>Based on rare wins - the positive multiplier on any bet equals the same number of points. <!--For example, a 3x win on the bronze circle equals 3 reward points, a 25x win on the diamond circle equals 25 points--></li>\n" +
    "</ol>\n" +
    "<p>\n" +
    "***Depositing any amount of BTC automatically enables the alias reset option.\n" +
    "</p><br /><p>Reward points received in any given league are only valid for that particular league, upon promotion to a higher league, the reward point count is reset.</p><br /><p>Reward points are used to determine a user's placement in his league, and to determine the winners of our Monthly Prizes.\n" +
    "</p>\n" +
    "\n" +
    "<h4>Monthly Prizes</h4>\n" +
    "<br />\n" +
    "<p>In each league, a monthly prize will be sent to the registered wallets of the players with the most reward points in their respective leagues on the last day of each month.\n" +
    " </p>\n" +
    " <ol><li>Bronze League: First prize: 0.01BTC, Second prize: 0.005 BTC, Third Prize: 0.003 BTC\n" +
    "</li><li>Silver League: First prize: 0.1BTC, Second prize: 0.05 BTC, Third Prize: 0.03 BTC\n" +
    "</li><li>Gold League: First prize: 1 BTC, Second prize: 0.5 BTC, Third Prize: 0.3 BTC\n" +
    "</li><li>Platinum League: First prize: 10BTC, Second prize: 5BTC, Third Prize: 3 BTC\n" +
    "</li><li>Diamond league: First prize: 100BTC, Second prize: 50 BTC, Third Prize: 30 BTC\n" +
    "</li></ol>\n" +
    "\n" +
    "      <br/>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "      <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "    </div>\n" +
    "  </div></div>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/game-detail.html',
    "<div>\n" +
    "    <gamedetail gamedata=\"gamedata\"></gamedetail>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/game.html',
    "<div>\n" +
    "    <h3>Next Drawing</h3>\n" +
    "    <div class=\"alert alert-info\" ng-hide=\"current\">Loading</div>\n" +
    "    <div class=\"panel panel-primary\" ng-show=\"current\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <h4 class=\"panel-title\">\n" +
    "                Drawing {{ current.game }} @ {{ current.start | date:'M/d/yy h:mm:ss a' }} ({{ current._id }})\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <p><b>Jackpot: </b>{{ current.totalPayout | btc }} BTC</p>\n" +
    "            <p><b>Tickets: </b>{{ current.ticketCount | number }}</p>\n" +
    "            <p><b>Bets: </b>{{ current.betCount | number }}</p>\n" +
    "            <p><a ng-href=\"game-detail/{{ current._id }}\" class=\"btn btn-primary\">Details</a></p>\n" +
    "            <gamechart id=\"game-{{game}}-stats\" gamedata=\"current\"></gamechart>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3>Drawing {{game}} Totals (all time)</h3>\n" +
    "    <gametotals game=\"game\"></gametotals>\n" +
    "    <h3>Drawing {{game}} Recent Drawings</h3>\n" +
    "    <gametable games=\"currentTable\"></gametable>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/history.html',
    "<div>\n" +
    "    <historytable games=\"games\"></historytable>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/home-prizetest.html',
    "<div data-ng-controller=\"PrizesController\">\n" +
    "      <div class=\"navbar navbar-inverse topnav\">\n" +
    "        <div class=\"pull-left\">\n" +
    "        <ul class=\"topnavleft\">\n" +
    "           <li><a target=\"_blank\" href=\"http://{{supportDomain}}\"><b>{{'_motherLink_' | i18n}}</b></a></li>\n" +
    "           <li><a target=\"_blank\" href=\"{{'http://betcoincircle.tm'|i18n}}\"><b>{{'_circleLink_' | i18n}}</b></a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "           <li><a href=\"#{{'_whatisBitcoinModalLink_'|i18n}}\" target=\"_blank\" data-toggle=\"modal\">{{'_whatisBitcoinLink_' | i18n}}</a></li>\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a href=\"#{{'_whereBitcoinModalLink_'|i18n}}\" data-toggle=\"modal\">{{'_whereBitcoinLink_' | i18n}}</a></li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        </ul>\n" +
    "        </div>\n" +
    "        <div class=\"pull-right\">\n" +
    "\n" +
    "        <ul class=\"topnavright\">\n" +
    "\n" +
    "\n" +
    "          <li><a href=\"{{'_offlineLink_' | i18n }}\" data-toggle=\"modal\">{{'_OfflineButton_' | i18n}}</a></li>\n" +
    "                  <li class=\"divider\"></li>\n" +
    "          <li><a ng-href=\"{{ 'mailto:news@' + supportDomain + '?subject=' }}{{ '_subscribeSubject_' | i18n }}{{ supportDomain }}\" data-toggle=\"modal\">{{'_SubscribeButton_' | i18n}}</a></li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "          <li class=\"divider\"></li>\n" +
    "          <li><a style=\"color:#A90000;font-weight:bold;\" href=\"#warning\" data-toggle=\"modal\">{{'_WarningButton_' | i18n}}</a></li>\n" +
    "\n" +
    "\n" +
    "        </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div data-ng-include data-src=\"'views/includes/pgp.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/whatisbitcoin-en.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/wheretogetbitcoin-en.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/custombets-cn.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/custombets.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/faq-cn.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/faq.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/whatisbitcoin-cn.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/wheretogetbitcoin-cn.html'\"></div>\n" +
    "\n" +
    "      <div data-ng-include data-src=\"'views/includes/how-to-play.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/advanced.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/verification.html'\"></div>\n" +
    "      <div data-ng-include data-src=\"'views/includes/warning.html'\"></div>\n" +
    "      <div class=\"container\" id=\"game-container\" style=\"width:960px;\">\n" +
    "        <div class=\"row top-wrap\">\n" +
    "            <div class=\"col-4 col-lg-4 column\">\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-4 col-lg-4 column\">           \n" +
    "                <div>\n" +
    "                <img alt=\"BetCoin ™ Prize Bitcoin Casino Game\" src=\"{{'_titleImage_' | i18n}}\" /></div>                \n" +
    "            </div>\n" +
    "            <div class=\"col-4 col-lg-4 column\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "       \n" +
    "        <ul class=\"links\">\n" +
    "\n" +
    "           <li><a href=\"#howto\" data-toggle=\"modal\">{{'Continue' | i18n}}</a></li>\n" +
    "\n" +
    "          <li><a href=\"#advanced\" data-toggle=\"modal\">{{'Continue' | i18n}}</a></li>\n" +
    "           <li><a href=\"#verification\" data-toggle=\"modal\">{{'Continue' | i18n}}</a></li>\n" +
    "           <li><a href=\"#{{'custombets'|i18n}}\" data-toggle=\"modal\" style=\"color:#ffd479 !important;text-decoration:underline;\">{{'Custom Bets'|i18n}}</a></li>\n" +
    "\n" +
    "           <li><a href=\"{{'faq'|i18n}}\" data-toggle=\"modal\">{{'_FaqHeader1_' | i18n}}</a></li>\n" +
    "          <li><a ng-click=\"showTable('leaderboard');\" data-toggle=\"modal\" style=\"color:#ffd479 !important;text-decoration:underline;\"><img style=\"border:0;display:inline-block;vertical-align:middle;width:50px;\" src=\"./images/new-button.png\"/>{{'_leaderboard_'|i18n}}</a></li>\n" +
    "\n" +
    "\n" +
    "        </ul>\n" +
    "                \n" +
    "        <div class=\"row top-wrap\">\n" +
    "            <div class=\"col-4 col-lg-4 column\">\n" +
    "                <div class=\"counter counter-left\">\n" +
    "                    <div class=\"counter-numbers\">{{totalPrize | noFractionCurrency}}</div>\n" +
    "                    <div class=\"counter-subtitle\">1 BTC = $ {{exchange | noFractionCurrency}} USD</div>\n" +
    "                    <div class=\"counter-title\">{{'_ColumnLeftdiv_' | i18n}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-4 col-lg-4 column\">\n" +
    "                <div class=\"counter counter-middle\">\n" +
    "                  <div class=\"recentbets\">\n" +
    "                  <div>{{recentBets0}} {{'_recentwon_'|i18n}} {{recentBets0B}}</div>\n" +
    "                  <div>{{recentBets1}} {{'_recentwon_'|i18n}} {{recentBets1B}}</div>\n" +
    "                  <div>{{recentBets2}} {{'_recentwon_'|i18n}} {{recentBets2B}}</div>\n" +
    "                  <!--<div>{{recentBets3}} {{'_recentwon_'|i18n}} {{recentBets3B}}</div>\n" +
    "                  <div>{{recentBets4}} {{'_recentwon_'|i18n}} {{recentBets4B}}</div>-->\n" +
    "                  </div>\n" +
    "                    <div class=\"counter-title\">{{'_ColumnRightHeader2_' | i18n}}</div>\n" +
    "                </div>           \n" +
    "            </div>\n" +
    "            <div class=\"col-4 col-lg-4 column\">\n" +
    "                <div class=\"counter counter-right\">\n" +
    "                    <div class=\"counter-numbers\">฿ {{totalBitcoin | noFractionCurrency}} BTC</div>\n" +
    "                    <div class=\"counter-subtitle\" style=\"margin-top:-1px;\">$ {{totalUSD | noFractionCurrency}} USD</div>\n" +
    "                    <div class=\"counter-title\">{{'_ColumnRightdiv_' | i18n}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "     \n" +
    "\n" +
    "        \n" +
    "        <div class=\"row game-wrap\">\n" +
    "          <div class=\"col-12 col-lg-12\">\n" +
    "\n" +
    "              <ul class=\"nav nav-tabs nav-justified\">\n" +
    "                  <li ng-class=\"getTabClass('prizes')\" style=\"cursor: pointer;\" ng-click=\"showTable('prizes')\"><a>{{'Prizes' | i18n}}</a></li>\n" +
    "                   <li ng-class=\"getTabClass('leaderboard')\" style=\"cursor: pointer;\" ng-click=\"showTable('leaderboard')\"><a>{{'_tabs-leaderboard_' | i18n}}</a></li>\n" +
    "                  <li ng-class=\"getTabClass('awards')\" style=\"cursor: pointer;\" ng-click=\"showTable('awards')\"><a>{{'Awards' | i18n}}</a></li>\n" +
    "                  <li ng-class=\"getTabClass('monthly-draw')\" style=\"cursor: pointer;\" ng-click=\"showTable('monthly-draw')\"><a>{{'Monthly Prizes' | i18n}}</a></li>\n" +
    "                  <li ng-class=\"getTabClass('affiliate')\" style=\"cursor: pointer;\" ng-click=\"showTable('affiliate')\"><a>{{'Affiliates' | i18n}}</a></li>\n" +
    "\n" +
    "              </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row game-wrap\" id=\"tables\" style=\"min-height:800px;\">\n" +
    "          <div class=\"col-12 col-lg-12\"><!-- data-autoscroll-->\n" +
    "\n" +
    "            <div style=\"width:100%;position:absolute;height:2000px;z-index:2;background-color:#000;\" id=\"termswarning\">\n" +
    "            <h3>Terms &amp; Conditions</h3>\n" +
    "            <p>By accessing BetCoinPrize.tm or its service, you:</p>\n" +
    "            <ol><li>\n" +
    "                Acknowledge that you have read and agree to the website's <a href=\"#warning\" data-toggle=\"modal\">Terms & Conditions available here;</a></li><li>\n" +
    "                Attest that you are 18 years old or older;</li><li>\n" +
    "                Affirm that you are in a jurisdiction where the BetCoinPrize.tm service is legal.</li></ol>\n" +
    "\n" +
    "\n" +
    "              <div>I consent to the above terms:  <button  style=\"margin:0px auto;\" ng-click=\"agreed()\" class=\"btn btn-default\">Agree</button></div>\n" +
    "              <br />\n" +
    "              <div>\n" +
    "                I do not consent to the above terms: <button onclick=\"window.location.href='http://wiki.betcoin.tm';\"  class=\"btn btn-default\">Disagree</button></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div data-ng-include data-src=\"currentTable\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row game-wrap\">\n" +
    "          <div style='margin:20px auto;text-align:center;'>\n" +
    "\n" +
    "          <a target=\"_blank\" href=\"http://wiki.betcoin.tm\"><img style=\"border:0;\" src=\"./images/betcoin-wiki-small.png\"/></a></div>\n" +
    "          <!--<div style=\"margin:20px auto;text-align:justify;width:700px;\">\n" +
    "            <p><small>\n" +
    "            {{ '_footerP1_' | i18n }}\n" +
    "            </small></p>\n" +
    "            <p><small>\n" +
    "            {{ '_footerP2_' | i18n }}\n" +
    "            </small></p>\n" +
    "\n" +
    "\n" +
    "          </div>-->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/home.html',
    "<gametable gamedata=\"currentGames[0]\"></gametable>\n" +
    "<gametable gamedata=\"currentGames[1]\"></gametable>\n" +
    "<gametable gamedata=\"currentGames[2]\"></gametable>\n" +
    "<gametable gamedata=\"currentGames[3]\"></gametable>\n" +
    "<gametable gamedata=\"currentGames[4]\"></gametable>\n" +
    "\n"
  );


  $templateCache.put('tpl/how-to-play.html',
    "<div id=\"howto\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "\t\t<div class=\"modal-header\">\n" +
    "\t\t  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "\t\t  <h3 id=\"myModalLabel\">{{'_HtpHeader1_' | i18n}}</h3>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-body\">\n" +
    "      <h5>{{'.01 Minimum Deposit'|i18n}}</h5>\n" +
    "      <h5>{{'_WarningP1_' | i18n}}</h5>\n" +
    "      <br />\n" +
    "\t\t  <h2>{{'_HtpHeader2_' | i18n}}</h2>\n" +
    "\n" +
    "\t\t  <p><i>{{'_HtpP1_' | i18n}}</i></p>\n" +
    "\t\t  <br/>\n" +
    "\t\t  <p><b>{{'_HtpP2pt1_' | i18n}}</b>{{'_HtpP2pt2_' | i18n}}\n" +
    "\t\t  <br/>\n" +
    "\t\t  {{'_HtpP2pt3_' | i18n}}\n" +
    "\t\t  <br/>\n" +
    "\t\t  {{'_HtpP2pt4_' | i18n}}</p>\n" +
    "\n" +
    "\t\t  <h3>{{'_HtpHeader3_' | i18n}}</h3>\n" +
    "\n" +
    "\t\t  <p>{{'_HtpP3_' | i18n}}</p>\n" +
    "\n" +
    "\t\t  <h3>{{'_HtpHeader4_' | i18n}}</h3>\n" +
    "\n" +
    "\t\t  <p>{{'_HtpP4pt1_' | i18n}}\n" +
    "        <a class=\"header-link\" ng-href=\"{{ 'mailto:support@' + supportDomain + '?subject=' }}{{ '_supportSubject_' | i18n }}{{ supportDomain }}\">\n" +
    "        {{'_HtpP4pt2_' | i18n}}</a></p>\n" +
    "\n" +
    "\t\t  <h3>{{'_HtpHeader5_' | i18n}}</h3>\n" +
    "\n" +
    "\t\t  <p>{{'_HtpP5_' | i18n}}</p>\n" +
    "\n" +
    "\t\t  <h3>{{'_HtpHeader6_' | i18n}}</h3>\n" +
    "\n" +
    "\t\t  <p>{{'_HtpP6_' | i18n}}</p>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-footer\">\n" +
    "\t\t  <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/leaderboard.html',
    "<ul class=\"nav nav-pills nav-justified\">\n" +
    "    <li ng-class=\"getLeaderboardTabClass('global')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('global')\"><a>{{'_topPlayers_' | i18n}}</a></li>\n" +
    "    <li ng-class=\"getLeaderboardTabClass('bronze')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('bronze')\"><a>{{'_bronze_' | i18n}}</a></li>\n" +
    "    <li ng-class=\"getLeaderboardTabClass('silver')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('silver')\"><a>{{'_silver_' | i18n}}</a></li>\n" +
    "    <li ng-class=\"getLeaderboardTabClass('gold')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('gold')\"><a>{{'_gold_' | i18n}}</a></li>\n" +
    "    <li ng-class=\"getLeaderboardTabClass('platinum')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('platinum')\"><a>{{'_platinum_' | i18n}}</a></li>\n" +
    "    <li ng-class=\"getLeaderboardTabClass('diamond')\" style=\"cursor: pointer;\" ng-click=\"showLeaderboardTable('diamond')\"><a>{{'_diamond_' | i18n}}</a></li>\n" +
    "</ul>\n" +
    "<fieldset id=\"recent\">\n" +
    "    <table class=\"table table-bordered dicesTable\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th>{{'_alias_' | i18n}}</th>\n" +
    "            <!-- <th>League</th> -->\n" +
    "            <th>{{'_rewardpoints_' | i18n}}</th>\n" +
    "            <th>{{'_btcwon_' | i18n}}</th>\n" +
    "            <th>{{'_prizeswon_' | i18n}}</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr data-ng-repeat=\"player in leaderboard\">\n" +
    "                <td>{{ player.alias }}</div></td>\n" +
    "                <td>{{player.games.dice.currentPoints}}</td>\n" +
    "                <td>{{player.games.dice.totalWon | btc}}</td>\n" +
    "                <td>{{player.games.dice.totalPrizes | btc}}</td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</fieldset>\n"
  );


  $templateCache.put('tpl/monthly-draw-cn.html',
    "<div class=\"tab-content\">\n" +
    "<h5>财神轮™月奖</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p>每一个级别奖励点数最高的玩家将收到相应的月奖。每月末</p><p>日月奖将自动转至各合格玩家注册的比特币钱包地之中。</p>\n" +
    " <ol><li>青铜级: 一等奖 0.01BTC, 二等奖: 0.005 BTC, 三等奖: 0.003 BTC\n" +
    "</li><li>白银级: 一等奖: 0.1BTC, 二等奖: 0.05 BTC, 三等奖: 0.03 BTC\n" +
    "</li><li>黄金级: 一等奖: 1 BTC, 二等奖: 0.5 BTC, 三等奖: 0.3 BTC\n" +
    "</li><li>铂金级: 一等奖: 10BTC, 二等奖: 5BTC, 三等奖: 3 BTC\n" +
    "</li><li>钻石级: 一等奖: 100BTC, 二等奖: 50 BTC, 三等奖: 30 BTC\n" +
    "</li></ol>\n" +
    "</div>\n" +
    "<br />\n" +
    "<p>{{'Next Drawing'|i18n}}:  November 1st, 2013</p>\n" +
    "<br />\n" +
    "<h5>{{'Recent Prizes'|i18n}}</h5>\n" +
    "<table class=\"table table-bordered dicesTable\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>{{'ID'|i18n}}</th>\n" +
    "            <th>{{'Alias'|i18n}}</th>\n" +
    "            <th>{{'League'|i18n}}</th>\n" +
    "            <th>{{'Prize'|i18n}}</th>\n" +
    "            <th>{{'Reward Points'|i18n}}</th>\n" +
    "            <th>{{'BTC Won'|i18n}}</th>\n" +
    "            <th>{{'Date'|i18n}}</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr data-ng-repeat=\"prize in prizes | orderBy:createdAt:reverse\">\n" +
    "            <td class=\"\">\n" +
    "                {{ prize.id }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.alias }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.league }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.prize }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.rewardPoints }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.btcWon }}\n" +
    "            </td>\n" +
    "            <td class=\"\">\n" +
    "                {{ prize.createdAt | date:\"MM/dd/yy HH:mm:ss\" }}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/monthly-draw.html',
    "<div class=\"tab-content\">\n" +
    "<h5>BetCoin ™ Circle Monthly Prizes</h5>\n" +
    "<div style=\"text-align:justify;width:500px;\">\n" +
    "<p>In each league, a monthly prize will be sent to the registered wallets of the players with the most reward points in their respective leagues on the last day of each month.\n" +
    " </p>\n" +
    " <ol><li>Bronze League: First prize: 0.01BTC, Second prize: 0.005 BTC, Third Prize: 0.003 BTC\n" +
    "</li><li>Silver League: First prize: 0.1BTC, Second prize: 0.05 BTC, Third Prize: 0.03 BTC\n" +
    "</li><li>Gold League: First prize: 1 BTC, Second prize: 0.5 BTC, Third Prize: 0.3 BTC\n" +
    "</li><li>Platinum League: First prize: 10BTC, Second prize: 5BTC, Third Prize: 3 BTC\n" +
    "</li><li>Diamond league: First prize: 100BTC, Second prize: 50 BTC, Third Prize: 30 BTC\n" +
    "</li></ol>\n" +
    "</div>\n" +
    "<br />\n" +
    "<p>{{'Next Drawing'|i18n}}: November 1st, 2013</p>\n" +
    "<br />\n" +
    "<h5>{{'Recent Prizes'|i18n}}</h5>\n" +
    "<table class=\"table table-bordered dicesTable\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>{{'ID'|i18n}}</th>\n" +
    "            <th>{{'Alias'|i18n}}</th>\n" +
    "            <th>{{'League'|i18n}}</th>\n" +
    "            <th>{{'Prize'|i18n}}</th>\n" +
    "            <th>{{'Reward Points'|i18n}}</th>\n" +
    "            <th>{{'BTC Won'|i18n}}</th>\n" +
    "            <th>{{'Date'|i18n}}</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr data-ng-repeat=\"prize in prizes | orderBy:createdAt:reverse\">\n" +
    "            <td class=\"\">\n" +
    "                {{ prize.id }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.alias }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.league }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.prize }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.rewardPoints }}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{ prize.btcWon }}\n" +
    "            </td>\n" +
    "            <td class=\"\">\n" +
    "                {{ prize.createdAt | date:\"MM/dd/yy HH:mm:ss\" }}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/pgp.html',
    "<div id=\"pgp\" class=\"modal fade\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "                <h3 id=\"myModalLabel\">PGP Key</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "<pre class=\"data\">\n" +
    "-----BEGIN PGP PUBLIC KEY BLOCK-----\n" +
    "Version: 10.2.0.2526\n" +
    "Comment: ***PGP ENCRYPTED***\n" +
    "\n" +
    "mQINBFI62goBEAC1jbi/Ie6oyE85Ha7RTAwSPxQt8+8tkV/nTsSeJdBLozgIMOUI\n" +
    "wTTa3q06ZBiV1rdTCoz5pOJGfLIF9daY/zAlNHhboufn5JJN19ennlpivyqmB6ov\n" +
    "1VaBjc3YHQ7sf3dca0TjckrCR7RrWYAKYpJkDt2jZd4Z15jBTmonSuDapADUcBaN\n" +
    "xoGPr8Z0NYyi+dplklsm2WZskPy8jq8ONBYeEEAKy4Vfz9R/kHmwODUK5giQwkFF\n" +
    "XI5rxxNdTkgDQZv4Lb4v5e6GYY0vYSFH/6vykDt3vBhNuvf7qb8C2SnzPg+/DCoi\n" +
    "gUIIf828mCYMOuWO3ENT/kCsMli9gwLy7067KhTyY8jLRq/cM3NC8KcjvEBOY+ts\n" +
    "JM/EgNX02BQ6Q8nWGlQCYLqF4dy6e08QdYq6Rddy4LzBrUlSaHJxbQRcZZS9bVrR\n" +
    "wz0i9daZsFhZBfiDhcLN6yxgFV9/fM4KUtNrml5qPxmbeMoYZi+q9adgkr5aW6hv\n" +
    "o6oXvyQu+f89yvXFTShIvNsDMPznMt4ABZf4e5RVKDjOd+tTyKkS2bswonaxzK7q\n" +
    "8vLX6QIw7XiTaZjBiP9fA5hoYENBMAXyw2veqz8DI9MU1gEyBPvF8k1JQQNo+7oN\n" +
    "CetHZ9GKh1cgW0IF17hmcg2MtZnSon2bsydim6wr8XAUgA4ADzRFXIyNlwARAQAB\n" +
    "tBhOUiA8bm9yZXBseUBub3JlcGx5Lm5ldD6JAm0EEAECAFcFAlI62goFCQDqqwAw\n" +
    "FIAAAAAAIAAHcHJlZmVycmVkLWVtYWlsLWVuY29kaW5nQHBncC5jb21wZ3BtaW1l\n" +
    "AwsJCgIZAQUbAwAAAAMWAgEFHgEAAAACFQoACgkQskZrIJhNWko9rg//fsKw5smv\n" +
    "lN01uh1ib7P/f4qSgEMdqtbD3ZMC8ibyslG5m4b+g1DsF+aRALUTxfm7FPQwDDMB\n" +
    "4Js247ZZwg+N155q7uwaI9rnWTF+A71+8TscuSSrOyRsio/s9JndIxAKhI+Gjo2E\n" +
    "/HiOLGJFaKKK3w6WdXspHJZlk2w2VX2eBp4HcUjoU9zsuTgo4VE/GvvMyEt9r0hA\n" +
    "8o7FDFo3AL/GKWb5iR52DORlIzYowF1Cg4lmsREQT33Oykka1lyomU5FWo5BKU88\n" +
    "e2sbB1fY3OEzbkYQ1fyUstBe5aq+ETv23bL/5vLx7/5n6HsSLN4wIBbM7orZs0Yy\n" +
    "OGMSDLZUMF2LDVuMF95V/swGK01exLo7mBqMZYPejtLZGPgZPIc1AkkS0itXiabf\n" +
    "5Lh5ri0gun5vToYfLgwVsBC/6aJP1Y9A1VQL6LX8k3Pc1Jc09NctJU/5a9kR7obP\n" +
    "07oarnK5/AXf5fXvuKcQDS63YLDcZxijOGhAkC9qPHeAoMY4r7WAObyaC3/9JjDp\n" +
    "MXHfSsDHZGte8sReZUEOOIi3av8KRxgcuN5xXNtCblPpHdUw8zgIMqqtVSX0vXkG\n" +
    "NXBoQKIUkPZeZ8gD1XhmCdRaO1gsdKvZxz668qd9Ujl/6tS7tsK3VyYbH8LAH+Y4\n" +
    "psHf7UtXUu2t8SChNUrMtOKyNl4r0VRiq1y5Ag0EUjraDQEQANrEqBZAH0i7gCbf\n" +
    "8OhXF1pNLWrykmv6UMGYYS2LA1eXia2ox092vcWcBdL60xi92abmHOBISIcT74n8\n" +
    "LcrU85p60oSAy3D219WWxBdXjtZW1jPpoWRRjiPJmqjMX04SZIMoNGfKZEp5pdks\n" +
    "dnJrpQrY1d6juO9ub6CMOPRv/a+0Xrd7KpAs2BKpDTkqKUTWSAHRXbVQrWnXpo5H\n" +
    "fOJEkePWU0ngWvAsqw7QnhdyUGPOXBdKuxh+Ur+OQoO6MRDOuDZF1Tt8xGo8XUM4\n" +
    "Wqrb8Jxm4Mi0QIDP170UwfTMAyfrqCzajP8HBH2LYJLaE5M0LWCjdK/1nfjLc0qu\n" +
    "OIdOhb9JTuRB9ZOLoJK1TWfYTKzJ6+PwvD+iIhHUdDWGBILOSYP+IeQmnKnIxvJF\n" +
    "hXgHO+9RwkGLPOd3R/tlRx9tlgfjKBdZDOmqMkDhNoW2xkrOrvuC22ACCSnRAQWn\n" +
    "2vJ3eSFQ5De2t3ithbo0d/pTS02OeRJD7Reg423htCYPAP/dbqiES5wtOhTbpFJh\n" +
    "TSTdWOZjUYtPNaWOgmu+Ol7zms9lKiZkZAIcr1CjOJrGDyXKAvkqQ2+7zR9pY/bR\n" +
    "kpK8uoBOblZOfp8hoR2zThbwPDRPRqWquGV2ThptTeqJ5bc7g3+seFzF1qU7VNzE\n" +
    "Ca3fJv4rBmA2iH7RSvOkL0C+HclvABEBAAGJBEcEGAECAjEFAlI62g4FCQDqqwAF\n" +
    "GwwAAADBXSAEGQEIAAYFAlI62g0ACgkQns35azUb7kG9mw/8DziB7a7iRlFaaNJ7\n" +
    "zw15Bmfnjg0uMv5ByjhzgfIFDdgZ9aZshWNdedGu0XIRpYRRXsxIsg0xtLGMZdUl\n" +
    "qNI2PqGtEFS0ppJRGAqDcWJWQTwDTZbwUZ/QXFTBYzoJBpeQg+2dqmFca+SOwyyd\n" +
    "RtGBceeRATlSKha9QRKNceODDA1EUatbN7FzSYeiwVaa5FZ67TJKzUiiK/3mtkON\n" +
    "grtYgofYJd6E2qVH+UIOyb/+3aLbI74JDFpLL6FK04L5iMYa6ynlAFJzkZBOUG2o\n" +
    "xa5vCUZAaCgfxxQfzZLlLUtm+QUoTZ8XR9YpKOWdeFOCR7qmrrwLmvSgXplJ6Nfk\n" +
    "Q2Ksx2sTpnMfKE6iqXuRBTGgtn0xlaLiIVG+kfVZ5v0nxNoNVR2KdmQ7+YXEByRj\n" +
    "NL2egG6bINmTqEpEL47tGxXbYZN9NUTO4zjVhRWLsToqS/aVMGipCZdKQ7RAwBzW\n" +
    "/NNRaZR2Vu/IMdYRFqYBakU0y8d3ZOTSp4b9UzjwhMYDSZg29dhMYBJ7PYZ3wP43\n" +
    "H8dCYn4QHO5vAbjpZmFEm3AA2XAm4ciCHfKmhmLX9Vb9B7NiurZHnjKJqNVdaMyM\n" +
    "tLGC1a0j3sA7Vz2w7PZRwZvtHZYXrnOw1Q7OChmzu2bTY4yA7i0Bkz53hYaSBJyC\n" +
    "vlBa3DiurB26su3daaYvw37tJy4ACgkQskZrIJhNWko93xAAmcInzk75wIzA37Iu\n" +
    "auTFjMG/FcJFSfEnhiCGM2JpmjJ/b1PLhcJGBYMvBgYROD7O3IADYwkUawoMvzhR\n" +
    "uTzjQw686weOq1eyfcDNQcwtXeOF5uEVKkssmfw5o6EOe7x8p4/zlgp+BvU161hJ\n" +
    "oFTiGuWrJOc9Qnfn8/zuI9dxQ89XtHQM1mq2/YIAxkP3ABj3wgtio86N2dpJGqFX\n" +
    "A9IbE9gGpoTRX3IX3/Kwj6ZfObBfzHzjQpY+OEcA29FQhwQegSByHxH9AAbEyYMZ\n" +
    "BkHyknwJNKKjOaly1BlYKhy3VTSgIYEdg6+OEtPx3DXXdJy6DuGoxHEXpvMQVw3z\n" +
    "FpKEX0woxA2PMFafvCL7UDOUEEvkuXBO8H4aQPAw53DSY6zbAKWm9MuL7crpf69M\n" +
    "dU60OlFgRrlCedvdZuF9U64iD8b+5EPF9A/0fOki1eo1ghpHxEp5QjWjp+EZqFKy\n" +
    "pwcRwITqbLKhfg9U8PJiQTWHh8kK9RdDwJEbl/v6oB6yLqHqiIcvcwu8cdBPvjog\n" +
    "fIlePQX3F78UQuft19pDvA1TpdupTHETEGJnfv4go13fF2qPlYQVLhvJqZ/2VZIc\n" +
    "7YoyKQ3Z1GdokUIwUvU991q3BsdFtehhKVaM7cqOlIA4cOOQjBNB4/4UtPeuher9\n" +
    "vQH8TvRWgR/msfl+twojAMQ0YAg=\n" +
    "=QJR/\n" +
    "-----END PGP PUBLIC KEY BLOCK-----\n" +
    "</pre>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button class=\"btn btn-default\" data-dismiss=\"modal\">{{'_CloseButton_' | i18n}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/preloader.html',
    "<div id=\"loading-mask\" style=\"\"> \n" +
    "\t<img src=\"img/betcoin.png\" class=\"img-responsive img-centered\">\n" +
    "\t<div class=\"progress progress-striped active\">\n" +
    "\t\t<div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/press.html',
    "<div id=\"press\" class=\"modal fade\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "\t<div class=\"modal-dialog\">\n" +
    "\t\t<div class=\"modal-content\">\n" +
    "\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "\t\t\t\t<h3 id=\"myModalLabel\">Press</h3>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t<ul>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/bitcoin-gaming-giant-announces-free-200600342.html\">http://finance.yahoo.com/news/bitcoin-gaming-giant-announces-free-200600342.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/worlds-largest-bitcoin-lottery-betcoin-100100034.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/worlds-largest-bitcoin-lottery-betcoin-100100034.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/bitcoin-gaming-wildfire-betcoin-customers-165100840.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/bitcoin-gaming-wildfire-betcoin-customers-165100840.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/bitcoin-transforming-casino-roulette-betcoin-081500152.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/bitcoin-transforming-casino-roulette-betcoin-081500152.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/shift-ethical-bitcoin-gaming-betcoin-175000048.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/shift-ethical-bitcoin-gaming-betcoin-175000048.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/demise-silk-road-turns-people-145700329.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/demise-silk-road-turns-people-145700329.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://news.yahoo.com/bitcoin-blockchain-duopoly-171900700.html\">\n" +
    "\t\t\t\thttp://news.yahoo.com/bitcoin-blockchain-duopoly-171900700.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://finance.yahoo.com/news/multinational-funds-bitcoin-mining-asics-023600032.html\">\n" +
    "\t\t\t\thttp://finance.yahoo.com/news/multinational-funds-bitcoin-mining-asics-023600032.html</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://www.innovategaming.com/betcoin-dice\">\n" +
    "\t\t\t\thttp://www.innovategaming.com/betcoin-dice</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://bitcoinexaminer.org/betcoin-casino-team-launches-new-gaming-website-betcoin-circle-and-prepares-more-news/\">\n" +
    "\t\t\t\thttp://bitcoinexaminer.org/betcoin-casino-team-launches-new-gaming-website-betcoin-circle-and-prepares-more-news/</a></li>\n" +
    "\t\t\t\t\t<li><a href=\"http://www.coindesk.com/what-will-gambling-do-to-the-bitcoin-block-chain/\">\n" +
    "\t\t\t\thttp://www.coindesk.com/what-will-gambling-do-to-the-bitcoin-block-chain/</a></li>\n" +
    "\t\t\t\t</ul>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t<button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-hidden=\"true\">{{'_CloseButton_' | i18n}}</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/prizes.html',
    "<div class=\"tab-content\">\n" +
    "<div class=\"game-header\">\n" +
    "    <h1>{{'Select a Prize and Place Your Bet' | i18n}}</h1>\n" +
    "    <h5>{{'.01 Minimum Deposit'|i18n}}</h5>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/proof.html',
    "<div id=\"proof\">\n" +
    "\n" +
    "    <h3>Warning! Do Not Use a Shared Wallet to Buy Tickets!</h3>\n" +
    "    <p>Only use wallets that allow you to receive Bitcoin from the same address you sent from. If you're not sure, purchase a confirmation-enabled ticket. If you get no response, your wallet is not compatible. Note that tickets require confirmations before processing.</p>\n" +
    "\n" +
    "    <h4>Don't have a Bitcoin wallet yet? We recommend:</h4>\n" +
    "    <ul><li><a rel=\"nofollow\" target=\"_blank\" href=\"http://blockchain.info\">Blockchain.info</a></li>\n" +
    "    <li><a rel=\"nofollow\" target=\"_blank\" href=\"https://multibit.org\">Multibit</a></li></ul>\n" +
    "    \n" +
    "    <h3>Minimum Transaction Size</h3>\n" +
    "    <h5>0.001 BTC is the minimum transaction amount. Lesser amounts will not be processed or returned!</h5>\n" +
    "    <h5>0.00105460 BTC is the minimum transaction amount for confirmation-enabled transactions.</h5>    \n" +
    "\n" +
    "    <h3>Tickets cost 0.001 BTC each. The main jackpot is 82%</h3>\n" +
    " \n" +
    "    <p>The main jackpot is comprised of 82% of ticket purchases, plus the jackpot seed.</p>\n" +
    "    <h3>Jackpot Seed: Free BTC Every Day</h3>\n" +
    "   <p>Each day, 0.1 BTC is sent to the jackpot address for every lottery. The Jackpot Seed is rewarded to the winner of each lottery. For example, the 15-day Diamond Prize Jackpot Seed is a total of 0.1 BTC * 15 days or 1.5 BTC. The 3-day Bronze Prize Jackpot Seed is 0.1 BTC * 3 days or 0.3 BTC.</p>\n" +
    "\n" +
    "    <h3>Leaderboard Bonus</h3>\n" +
    "    <p>3% of the jackpot for every lottery prize drawing is distributed among the 100 players who bought the most tickets. If there are fewer than 100 players, the 3% is equally distributed amongst all the players who bought tickets for each drawing.</p>\n" +
    "\n" +
    "\n" +
    "    <h3>How to Play</h3>\n" +
    "    <ul><li>Select a prize: 1-day Bronze, 3-day Silver, 7-day Gold, 9-day Platinum, or 15-day Diamond</li>\n" +
    "    <li>Buy any number of tickets by sending Bitcoin to the addresses below in increments of 0.001 BTC, plus any amount above 0.00005460 to receive a confirmation transaction</li>\n" +
    "    <li>Wait for your prize to be drawn, watch the jackpot grow. Your winnings will be automatically sent to your wallet</li>\n" +
    "    <li>New to Bitcoin? Check out <a href='http://wiki.betcoin.tm'>BetCoin ™ Wiki</a> and <a href='http://connect.betcoin.tm'>BetCoin ™ Connect</a></li></ul>\n" +
    "\n" +
    "    <h4>Buy Multiple Tickets</h4>\n" +
    "    <p>Multiple tickets can be purchased with one transaction. For example, to buy 10 tickets for the 1 day lottery, send 0.01 BTC to 1Prize1WfNVLyQFF3rmwFGkrmBMrgtBZYo. <em≥Any amount below 0.001 BTC will not be returned.</em></p>\n" +
    "    <h4>How to Receive a Confirmation Transaction</h4>\n" +
    "    <p>If you would like to recieve confirmation of your tickets being processed, send an additional amount of at least 0.00005460 with your ticket purchase, and it will be retuned to you during ticket processing. <em≥Any amount below 0.00005460 will not be returned.</em></p>\n" +
    "    <h4>Prizes are drawn at Midnight GMT</h4>\n" +
    "    <p>When the prize drawing occurs, the game winner is selected by creating an hmac hash of the transaction IDs from all of the transactions which were used to purchase tickets, hashed with the game ID. The smallest hex value that will allow selection from all purchased tickets is used from the front of the resulting hash. This \"lucky number\" is used to select an index from among the purchased tickets.</p>    \n" +
    "\n" +
    "\n" +
    "    <h4>Ticket Processing</h4>\n" +
    "    <p>We process tickets as soon as it's possible to do so using a standard Bitcoin transaction. When ticket processing occurs, a confirmation transaction is sent to the jackpot address.</p>\n" +
    "\n" +
    "    <h4>Cut-Off Time</h4>\n" +
    "    <p><b><em>Buy your tickets at least 12 hours before the end of a lottery to ensure it is processed!</em></b> Once your ticket purchase has reached 4 confirmations, it will be added to the currently active lottery <em>at the time of processing.</em> If your tickets are processed after the cut-off time for your lottery drawing, they will be applied to the next lottery drawing.</p> \n" +
    "\n" +
    "    <h4>Jackpot vs. Ticket Addresses</h4>\n" +
    "    <p>The ticket address for a game is listed on the home page, and this is the address used to buy tickets for that lottery. The link to the jackpot address directs to the blockchain.info page for the address being used by the running lottery to payout the winning ticket holder. <b>Do <em>NOT</em> send BTC to the jackpot address, it will not be processed!</b>.</p>\n" +
    "\n" +
    "    <h4>Consolidation and Payouts</h4>\n" +
    "    <p>Periodically throughout the game period, the transactions sent to the jackpot will be consolidated so that the winner can be paid in a single transaction. The fees used for this come out of the house rake.</p>\n" +
    "    <p>In some cases, when a consolidation transaction is made, the balance on the blockchain.info page for the jackpot address may appear to be different than the listed jackpot on our home page. The discrepency should only last until the consolidation transaction (and the transactions it consolidated) have been confirmed</p>\n" +
    "    <h4>How to Prove the Winner Was Selected at Random</h4>\n" +
    "    <p>The following node.js script can be used to validate prize drawing data:</p>\n" +
    "    <pre>\n" +
    "var getWinner = function(gameData) {\n" +
    "    var ticketBin = [];\n" +
    "    var hmac = crypto.createHmac('sha512', gameData._id);\n" +
    "    gameData.bets.forEach(function(bet) {\n" +
    "        for(var i = 0; i < bet.tickets; i++) {\n" +
    "            ticketBin.push(bet.playerAddress);\n" +
    "        }\n" +
    "        hmac.update(bet.txid);\n" +
    "    });\n" +
    "    logger.log('info', '%d tickets', ticketBin.length);\n" +
    "    var gameHash = hmac.digest('hex');\n" +
    "    var lucky = NaN;\n" +
    "    var partial = \"\";\n" +
    "    var winIndex = -1;\n" +
    "    var powerFound = false;\n" +
    "    for (var power = 1; powerFound === false; power++) {\n" +
    "        var maxroll = Math.pow(16, power);\n" +
    "        if (maxroll >= ticketBin.length) {\n" +
    "            partial = gameHash.substring(0, power);\n" +
    "            lucky = parseInt(partial, 16);\n" +
    "            winIndex = Math.floor((ticketBin.length / maxroll) * lucky);\n" +
    "            powerFound = true;\n" +
    "        }\n" +
    "    }\n" +
    "    logger.log('info', 'power: %d, partial: %s', power - 1, partial);\n" +
    "    return {\n" +
    "        player: ticketBin[winIndex],\n" +
    "        hash: gameHash,\n" +
    "        partial: partial,\n" +
    "        index: winIndex\n" +
    "    };\n" +
    "};\n" +
    "    </pre>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/search.html',
    "<div class=\"tab-content\">\n" +
    "    <div style=\"margin-bottom:20px;\">\n" +
    "        <form class=\"form-inline\" role=\"form\" ng-submit=\"executeSearch()\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"sr-only\" for=\"search-query\">Search Query</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"search-query\" ng-model=\"search\" placeholder=\"Enter Search\" required />\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <select name=\"searchType\" class=\"form-control\" ng-model=\"searchType\">\n" +
    "                    <option value=\"address\">Address</option>\n" +
    "                    <option value=\"txid\">TXID</option>\n" +
    "                    <option value=\"gameid\">Game ID </option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-show=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n" +
    "    <div ng-show=\"message\" class=\"alert alert-info\">{{ message }}</div>\n" +
    "    <div ng-show=\"searchType == 'address' && results.address.length\">\n" +
    "        <historytable games=\"results.address\"></historytable>\n" +
    "    </div>\n" +
    "    <div ng-show=\"searchType == 'txid' && results.txid.length\">\n" +
    "        <historytable games=\"results.txid\"></historytable>\n" +
    "    </div>\n" +
    "    <div ng-show=\"searchType == 'gameid' && results.gameid._id\">\n" +
    "        <gamedetail gamedata=\"results.gameid\"></gamedetail>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/superbitad.html',
    "<div style=\"margin:20px auto;width:300px;z-index:3\">\n" +
    "\n" +
    "    <a target=\"_blank\" href=\"https://superbit.hk/setlang.php?l=en\" rel=\"nofollow\" title=\"Superbit.HK\" style=\"display: inline-block; text-align:left; height: 40px; width: 298px; overflow: hidden; position: relative; border: 1px solid #ffd479; text-decoration: none; font-family: Arial; letter-spacing: 1.1\">\n" +
    "        <span style=\"display:block;background: #330000; height: 40px; width: 298px; color: #ff0000; text-transform: normal;\">\n" +
    "      <span style=\"font-size: 15px; line-height: 40px; margin-left: 5px;\"><strong style=\"text-transform:capitalize\">GET BTC INSTANTLY</strong></span>\n" +
    "        </span>\n" +
    "        <span style=\"display:block;background: #ff0000; position: absolute; right: 0; top: 0; height: 40px; width: 100px;\">\n" +
    "      <span style=\"display:block;border-bottom: 40px solid #ffd479;    border-left: 42px solid transparent; width: 0; height: 0; position: absolute; left: -42px; top: 0;\"></span>\n" +
    "        <span style=\"font-size: 16px; color: #ffd479; line-height: 40px; margin-left: 5px; font-family: Georgia;\">SuperBit.HK</span>\n" +
    "        </span>\n" +
    "    </a>\n" +
    "</div>"
  );


  $templateCache.put('tpl/terms-cn.html',
    "<div id=\"terms\" class=\"modal fade\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">Terms &amp; Conditions</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <h5>0.001 Minimum Transaction. Lesser amounts will be kept by our system, and not returned!</h5>\n" +
    "\n" +
    "        <h3>Warning!</h3>\n" +
    "        <p>Only use wallets that allow you to receive Bitcoin from the same address you sent from. If you're not sure, test by sending a transaction for the minimum amount. If you get nothing back, then your wallet is not compatible. Note that some bets may require one confirmation before the win/loss value is sent back.</p>\n" +
    "\n" +
    "        <h3>Terms &amp; Conditions</h3>\n" +
    "            <p>By accessing BetCoin.tm or its service, you:</p>\n" +
    "            <ul><li>\n" +
    "                Acknowledge that you have read and agree to the website's Terms & Conditions available below;</a></li><li>\n" +
    "                Attest that you are 18 years old or older;</li><li>\n" +
    "                Affirm that you are in a jurisdiction where the BetCoin.tm service is legal.</li></ul>\n" +
    "        <br /><br />\n" +
    "      <p>END USER AGREEMENT\n" +
    "        </p><p>\n" +
    "        This end user agreement (the \"Agreement\") should be read by you (the \"User\" or \"you\") in its entirety prior to your use of the BetCoin ™ Dice service or products. Please note that the Agreement constitutes a legally binding agreement between you and BetCoin ™ Dice (referred to herein as \"BetCoin ™ Dice\", \"us\" or \"we\") which owns and operates the Internet site found and games described at <a href=\"http://BetCoin.tm\">BetCoin.tm</a> (the \"Service\"). By clicking the \"I Agree\" button if and where provided and/or using the Service, you consent to the terms and conditions set forth in this Agreement.\n" +
    "         </p><br /><p>1. GRANT OF LICENSE\n" +
    "        </p><p>\n" +
    "        1.1. Subject to the terms and conditions contained herein, BetCoin ™ Dice grants the User a non-exclusive, personal, non-transferable right to use the Service on your personal computer or other device that accesses the Internet in order to access the games available and described on the <a href=\"http://BetCoin.tm\">BetCoin.tm</a> website (the website and games together being the \"Service\").\n" +
    "        </p><p>\n" +
    "        1.2.  The Service is not for use by (i) individuals under 18 years of age, (ii) individuals under the legal age of majority in their jurisdiction and (iii) individuals accessing the Service from jurisdictions from which it is illegal to do so. BetCoin ™ Dice is not able to verify the legality of the Service in each jurisdiction and it is the User's responsibility to ensure that their use of the Service is lawful.\n" +
    "        </p><p>\n" +
    "        1.3.  BetCoin ™ Dice and its licensors are the sole holders of all rights in and to the Service and code, structure and organization, including copyright, trade secrets, intellectual property and other rights. You may not, within the limits prescribed by applicable laws: (a) copy, distribute, publish, reverse engineer, decompile, disassemble, modify, or translate the website; or (b) use the Service in a manner prohibited by applicable laws or regulations (each of the above is an \"Unauthorized Use\"). BetCoin ™ Dice reserves any and all rights implied or otherwise, which are not expressly granted to the User hereunder and retain all rights, title and interest in and to the Service. You agree that you will be solely liable for any damage, costs or expenses arising out of or in connection with the commission by you of any Unauthorized Use. You shall notify BetCoin ™ Dice immediately upon becoming aware of the commission by any person of any Unauthorized Use and shall provide BetCoin ™ Dice with reasonable assistance with any investigations it conducts in light of the information provided by you in this respect.\n" +
    "        </p><p>\n" +
    "        1.4. The term \"BetCoin ™ Dice\", its domain names and any other trade marks, or service marks used by BetCoin ™ Dice as part of the Service (the \"Trade Marks\"), are solely owned by BetCoin ™ Dice. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio and text (the \"Site Content\") belongs to BetCoin ™ Dice and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trade Marks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without BetCoin ™ Dice’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of BetCoin ™ Dice.\n" +
    "         </p><br /><p>\n" +
    "        2. NO WARRANTIES.</p><p>\n" +
    "        2.1. BetCoin ™ Dice DISCLAIMS ANY AND ALL WARRANTIES, EXPRESSED OR IMPLIED, IN CONNECTION WITH THE SERVICE WHICH IS PROVIDED TO YOU \"AS IS\" AND WE PROVIDE YOU WITH NO WARRANTY OR REPRESENTATION WHATSOEVER REGARDING ITS QUALITY, FITNESS FOR PURPOSE, COMPLETENESS OR ACCURACY.\n" +
    "        </p><p>2.2. REGARDLESS OF OUR EFFORTS, WE MAKE NO WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.\n" +
    "         </p><br /><p>\n" +
    "        3. AUTHORITY/TERMS OF SERVICE\n" +
    "        </p><p>You agree to the game rules described on the <a href=\"http://BetCoin.tm\">BetCoin.tm</a> website. BetCoin ™ Dice retains authority over the issuing, maintenance, and closing of the Service. The decision of  BetCoin ™ Dice’s management, as regards any use of the Service, or dispute resolution, is final and shall not be open to review or appeal.\n" +
    "         </p><br /><p>\n" +
    "        4. YOUR REPRESENTATIONS AND WARRANTIES\n" +
    "        </p><p>Prior to your use of the Service and on an ongoing basis you represent, warrant, covenant and agree that:\n" +
    "        </p><p>4.1. there is a risk of losing bitcoins when using the Service and that BetCoin ™ Dice has no responsibility to you for any such loss;\n" +
    "        </p><p>4.2. your use of the Service is at your sole option, discretion and risk;\n" +
    "        </p><p>4.3. you are solely responsible for any applicable taxes which may be payable on bitcoins awarded to you through your using the Service;\n" +
    "        </p><p>4.5. the telecommunications networks and Internet access services required for you to access and use the Service are entirely beyond the control of BetCoin ™ Dice and  BetCoin ™ Dice shall have no liability whatsoever for any outages, slowness, capacity constraints or other deficiencies affecting the same; and\n" +
    "        </p><p>4.6. you are aged 18 or over and that you are not currently self-excluded from any gambling site or gambling premises and that you will inform us immediately if you enter into a self-exclusion agreement with any gambling provider.\n" +
    "\n" +
    "         </p><br /><p>5. PROHIBITED USES\n" +
    "        </p><p>5.1. PERSONAL USE. The Service is intended solely for the User's personal use. The User is only allowed to wager for his/her personal entertainment.\n" +
    "        </p><p>5.2. NO SHARED WALLET. The User will not transmit Bitcoins to the address indicated on the website from a shared wallet or any other address not solely controlled by the User as any amounts sent back to the initiating address may not be properly credited to the User.\n" +
    "        </p><p>5.3 JURISDICTIONS. Persons located in or residents of the United States and the United States Territories (the “Prohibited Jurisdictions”) are not permitted make use of the Service.  For the avoidance of doubt, the foregoing restrictions on engaging in real-money play from Prohibited Jurisdictions applies equally to residents and citizens of other nations while located in a Prohibited Jurisdiction. Any attempt to circumvent the restrictions on play by any persons located in a Prohibited Jurisdiction or Restricted Jurisdiction, is a breach of this Agreement.  An attempt at circumvention includes, but is not limited to, manipulating the information used by BetCoin ™ Dice to identify your location and providing BetCoin ™ Dice with false or misleading information regarding your location or place of residence.\n" +
    "        </p><p>5.4. NO AUTOMATED GAMEPLAY. The User will not employ automated methods to interact with The Service. Deposits made by Users breaching this policy are subject to confiscation following a permanent account ban.\n" +
    "        </p><p>5.5. NO SYSTEM ABUSE. Users attempting to abuse The Service will be banned without a warning.\n" +
    "        </p>\n" +
    "\n" +
    "         </p><br /><p>6. BREACH\n" +
    "        </p><p>6.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained herein,  BetCoin ™ Dice reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User.\n" +
    "\n" +
    "        </p><p>6.2. You agree to fully indemnify, defend and hold harmless BetCoin ™ Dice and its shareholders, directors, agents and employees from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever, howsoever caused, that may arise as a result of: (i) your breach of this Agreement, in whole or in part; (ii) violation by you of any law or any third party rights; and (iii) use by you of the Service.\n" +
    "\n" +
    "         </p><br /><p>7. LIMITATION OF LIABILITY.\n" +
    "        </p><p>7.1. Under no circumstances, including negligence, shall BetCoin ™ Dice be liable for any special, incidental, direct, indirect or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use (or misuse) of the Service even if BetCoin ™ Dice had prior knowledge of the possibility of such damages.\n" +
    "        </p><p>7.2. Nothing in this Agreement shall exclude or limit BetCoin ™ Dice’s liability for death or personal injury resulting from its negligence.\n" +
    "\n" +
    "         </p><br /><p>8. DISPUTES\n" +
    "        </p><p>If a User wishes to make a complaint, please contact our customer service team at <a href=\"mailto:support@BetCoin.tm\">support@BetCoin.tm</a>. Should any dispute not be resolved to your satisfaction you may pursue remedies in the governing law jurisdiction set forth below.\n" +
    "\n" +
    "        </p><p>9. AMENDMENT\n" +
    "        </p><p>BetCoin ™ Dice reserves the right to update or modify this Agreement or any part thereof at any time or otherwise change the Service without notice and you will be bound by such amended Agreement upon posting. Therefore, we encourage you check the terms and conditions contained in the version of the Agreement in force at such time. Your continued use of the Service shall be deemed to attest to your agreement to any amendments to the Agreement.\n" +
    "\n" +
    "        </p><p>10. GOVERNING LAW\n" +
    "        </p><p>The Agreement and any matters relating hereto shall be governed by, and construed in accordance with, the laws of Costa Rica. You irrevocably agree that, subject as provided below, the courts of Costa Rica shall have exclusive jurisdiction in relation to any claim, dispute or difference concerning the Agreement and any matter arising therefrom and irrevocably waive any right that it may have to object to an action being brought in those courts, or to claim that the action has been brought in an inconvenient forum, or that those courts do not have jurisdiction. Nothing in this clause shall limit the right of BetCoin ™ Dice to take proceedings against you in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.\n" +
    "\n" +
    "         </p><br /><p>11. SEVERABILITY\n" +
    "        </p><p>If a provision of this Agreement is or becomes illegal, invalid or unenforceable in any jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other provision hereof or the validity or enforceability in other jurisdictions of that or any other provision hereof.\n" +
    "\n" +
    "         </p><br /><p>12. ASSIGNMENT\n" +
    "        </p><p>BetCoin ™ Dice reserves the right to assign this agreement, in whole or in part, at any time without notice. The User may not assign any of his/her rights or obligations under this Agreement.\n" +
    "\n" +
    "        </p><br /><p>13. MISCELLANEOUS\n" +
    "        </p><p>13.1. No waiver by BetCoin ™ Dice of any breach of any provision of this Agreement (including the failure of BetCoin ™ Dice to require strict and literal performance of or compliance with any provision of this Agreement) shall in any way be construed as a waiver of any subsequent breach of such provision or of any breach of any other provision of this Agreement.\n" +
    "        </p><p>13.2. Nothing in this Agreement shall create or confer any rights or other benefits in favor of any third parties not party to this Agreement other than with an affiliate of BetCoin ™ Dice.\n" +
    "        </p><p>13.3. Nothing in this Agreement shall create or be deemed to create a partnership, agency, trust arrangement, fiduciary relationship or joint venture between you and us.\n" +
    "        </p><p>13.4. This Agreement constitutes the entire understanding and agreement between you and us regarding the Service and supersedes any prior agreement, understanding, or arrangement between you and us.\n" +
    "        </p>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/terms.html',
    "<div id=\"terms\" class=\"modal fade\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">Terms &amp; Conditions</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <h5>0.001 Minimum Transaction. Lesser amounts will be kept by our system, and not returned!</h5>\n" +
    "\n" +
    "        <h3>Warning!</h3>\n" +
    "        <p>Only use wallets that allow you to receive Bitcoin from the same address you sent from. If you're not sure, test by purchasing a confirmation-enabled ticket. If you get nothing back, then your wallet is not compatible. Note that tickets require confirmations before processing.</p>\n" +
    "\n" +
    "        <h3>Terms &amp; Conditions</h3>\n" +
    "            <p>By accessing BetCoin.tm or its service, you:</p>\n" +
    "            <ul><li>\n" +
    "                Acknowledge that you have read and agree to the website's Terms & Conditions available below;</a></li><li>\n" +
    "                Attest that you are 18 years old or older;</li><li>\n" +
    "                Affirm that you are in a jurisdiction where the BetCoin.tm service is legal.</li></ul>\n" +
    "        <br /><br />\n" +
    "      <p>END USER AGREEMENT\n" +
    "        </p><p>\n" +
    "        This end user agreement (the \"Agreement\") should be read by you (the \"User\" or \"you\") in its entirety prior to your use of the BetCoin ™ Prize service or products. Please note that the Agreement constitutes a legally binding agreement between you and BetCoin ™ Prize (referred to herein as \"BetCoin ™ Prize\", \"us\" or \"we\") which owns and operates the Internet site found and games described at <a href=\"http://BetCoin.tm\">BetCoin.tm</a> (the \"Service\"). By clicking the \"I Agree\" button if and where provided and/or using the Service, you consent to the terms and conditions set forth in this Agreement.\n" +
    "         </p><br /><p>1. GRANT OF LICENSE\n" +
    "        </p><p>\n" +
    "        1.1. Subject to the terms and conditions contained herein, BetCoin ™ Prize grants the User a non-exclusive, personal, non-transferable right to use the Service on your personal computer or other device that accesses the Internet in order to access the games available and described on the <a href=\"http://BetCoin.tm\">BetCoin.tm</a> website (the website and games together being the \"Service\").\n" +
    "        </p><p>\n" +
    "        1.2.  The Service is not for use by (i) individuals under 18 years of age, (ii) individuals under the legal age of majority in their jurisdiction and (iii) individuals accessing the Service from jurisdictions from which it is illegal to do so. BetCoin ™ Prize is not able to verify the legality of the Service in each jurisdiction and it is the User's responsibility to ensure that their use of the Service is lawful.\n" +
    "        </p><p>\n" +
    "        1.3.  BetCoin ™ Prize and its licensors are the sole holders of all rights in and to the Service and code, structure and organization, including copyright, trade secrets, intellectual property and other rights. You may not, within the limits prescribed by applicable laws: (a) copy, distribute, publish, reverse engineer, decompile, disassemble, modify, or translate the website; or (b) use the Service in a manner prohibited by applicable laws or regulations (each of the above is an \"Unauthorized Use\"). BetCoin ™ Prize reserves any and all rights implied or otherwise, which are not expressly granted to the User hereunder and retain all rights, title and interest in and to the Service. You agree that you will be solely liable for any damage, costs or expenses arising out of or in connection with the commission by you of any Unauthorized Use. You shall notify BetCoin ™ Prize immediately upon becoming aware of the commission by any person of any Unauthorized Use and shall provide BetCoin ™ Prize with reasonable assistance with any investigations it conducts in light of the information provided by you in this respect.\n" +
    "        </p><p>\n" +
    "        1.4. The term \"BetCoin ™ Prize\", its domain names and any other trade marks, or service marks used by BetCoin ™ Prize as part of the Service (the \"Trade Marks\"), are solely owned by BetCoin ™ Prize. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio and text (the \"Site Content\") belongs to BetCoin ™ Prize and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trade Marks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without BetCoin ™ Prize’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of BetCoin ™ Prize.\n" +
    "         </p><br /><p>\n" +
    "        2. NO WARRANTIES.</p><p>\n" +
    "        2.1. BetCoin ™ Prize DISCLAIMS ANY AND ALL WARRANTIES, EXPRESSED OR IMPLIED, IN CONNECTION WITH THE SERVICE WHICH IS PROVIDED TO YOU \"AS IS\" AND WE PROVIDE YOU WITH NO WARRANTY OR REPRESENTATION WHATSOEVER REGARDING ITS QUALITY, FITNESS FOR PURPOSE, COMPLETENESS OR ACCURACY.\n" +
    "        </p><p>2.2. REGARDLESS OF OUR EFFORTS, WE MAKE NO WARRANTY THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.\n" +
    "         </p><br /><p>\n" +
    "        3. AUTHORITY/TERMS OF SERVICE\n" +
    "        </p><p>You agree to the game rules described on the <a href=\"http://BetCoin.tm\">BetCoin.tm</a> website. BetCoin ™ Prize retains authority over the issuing, maintenance, and closing of the Service. The decision of  BetCoin ™ Prize’s management, as regards any use of the Service, or dispute resolution, is final and shall not be open to review or appeal.\n" +
    "         </p><br /><p>\n" +
    "        4. YOUR REPRESENTATIONS AND WARRANTIES\n" +
    "        </p><p>Prior to your use of the Service and on an ongoing basis you represent, warrant, covenant and agree that:\n" +
    "        </p><p>4.1. there is a risk of losing bitcoins when using the Service and that BetCoin ™ Prize has no responsibility to you for any such loss;\n" +
    "        </p><p>4.2. your use of the Service is at your sole option, discretion and risk;\n" +
    "        </p><p>4.3. you are solely responsible for any applicable taxes which may be payable on bitcoins awarded to you through your using the Service;\n" +
    "        </p><p>4.5. the telecommunications networks and Internet access services required for you to access and use the Service are entirely beyond the control of BetCoin ™ Prize and  BetCoin ™ Prize shall have no liability whatsoever for any outages, slowness, capacity constraints or other deficiencies affecting the same; and\n" +
    "        </p><p>4.6. you are aged 18 or over and that you are not currently self-excluded from any gambling site or gambling premises and that you will inform us immediately if you enter into a self-exclusion agreement with any gambling provider.\n" +
    "\n" +
    "         </p><br /><p>5. PROHIBITED USES\n" +
    "        </p><p>5.1. PERSONAL USE. The Service is intended solely for the User's personal use. The User is only allowed to wager for his/her personal entertainment.\n" +
    "        </p><p>5.2. NO SHARED WALLET. The User will not transmit Bitcoins to the address indicated on the website from a shared wallet or any other address not solely controlled by the User as any amounts sent back to the initiating address may not be properly credited to the User.\n" +
    "        </p><p>5.3 JURISDICTIONS. Persons located in or residents of the United States and the United States Territories (the “Prohibited Jurisdictions”) are not permitted make use of the Service.  For the avoidance of doubt, the foregoing restrictions on engaging in real-money play from Prohibited Jurisdictions applies equally to residents and citizens of other nations while located in a Prohibited Jurisdiction. Any attempt to circumvent the restrictions on play by any persons located in a Prohibited Jurisdiction or Restricted Jurisdiction, is a breach of this Agreement.  An attempt at circumvention includes, but is not limited to, manipulating the information used by BetCoin ™ Prize to identify your location and providing BetCoin ™ Prize with false or misleading information regarding your location or place of residence.\n" +
    "        </p><p>5.4. NO AUTOMATED GAMEPLAY. The User will not employ automated methods to interact with The Service. Deposits made by Users breaching this policy are subject to confiscation following a permanent account ban.\n" +
    "        </p><p>5.5. NO SYSTEM ABUSE. Users attempting to abuse The Service will be banned without a warning.\n" +
    "        </p>\n" +
    "\n" +
    "         </p><br /><p>6. BREACH\n" +
    "        </p><p>6.1. Without prejuPrize to any other rights, if a User breaches in whole or in part any provision contained herein,  BetCoin ™ Prize reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User.\n" +
    "\n" +
    "        </p><p>6.2. You agree to fully indemnify, defend and hold harmless BetCoin ™ Prize and its shareholders, directors, agents and employees from and against all claims, demands, liabilities, damages, losses, costs and expenses, including legal fees and any other charges whatsoever, howsoever caused, that may arise as a result of: (i) your breach of this Agreement, in whole or in part; (ii) violation by you of any law or any third party rights; and (iii) use by you of the Service.\n" +
    "\n" +
    "         </p><br /><p>7. LIMITATION OF LIABILITY.\n" +
    "        </p><p>7.1. Under no circumstances, including negligence, shall BetCoin ™ Prize be liable for any special, incidental, direct, indirect or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use (or misuse) of the Service even if BetCoin ™ Prize had prior knowledge of the possibility of such damages.\n" +
    "        </p><p>7.2. Nothing in this Agreement shall exclude or limit BetCoin ™ Prize’s liability for death or personal injury resulting from its negligence.\n" +
    "\n" +
    "         </p><br /><p>8. DISPUTES\n" +
    "        </p><p>If a User wishes to make a complaint, please contact our customer service team at <a href=\"mailto:support@BetCoin.tm\">support@BetCoin.tm</a>. Should any dispute not be resolved to your satisfaction you may pursue remedies in the governing law jurisdiction set forth below.\n" +
    "\n" +
    "        </p><p>9. AMENDMENT\n" +
    "        </p><p>BetCoin ™ Prize reserves the right to update or modify this Agreement or any part thereof at any time or otherwise change the Service without notice and you will be bound by such amended Agreement upon posting. Therefore, we encourage you check the terms and conditions contained in the version of the Agreement in force at such time. Your continued use of the Service shall be deemed to attest to your agreement to any amendments to the Agreement.\n" +
    "\n" +
    "        </p><p>10. GOVERNING LAW\n" +
    "        </p><p>The Agreement and any matters relating hereto shall be governed by, and construed in accordance with, the laws of Costa Rica. You irrevocably agree that, subject as provided below, the courts of Costa Rica shall have exclusive jurisdiction in relation to any claim, dispute or difference concerning the Agreement and any matter arising therefrom and irrevocably waive any right that it may have to object to an action being brought in those courts, or to claim that the action has been brought in an inconvenient forum, or that those courts do not have jurisdiction. Nothing in this clause shall limit the right of BetCoin ™ Prize to take proceedings against you in any other court of competent jurisdiction, nor shall the taking of proceedings in any one or more jurisdictions preclude the taking of proceedings in any other jurisdictions, whether concurrently or not, to the extent permitted by the law of such other jurisdiction.\n" +
    "\n" +
    "         </p><br /><p>11. SEVERABILITY\n" +
    "        </p><p>If a provision of this Agreement is or becomes illegal, invalid or unenforceable in any jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other provision hereof or the validity or enforceability in other jurisdictions of that or any other provision hereof.\n" +
    "\n" +
    "         </p><br /><p>12. ASSIGNMENT\n" +
    "        </p><p>BetCoin ™ Prize reserves the right to assign this agreement, in whole or in part, at any time without notice. The User may not assign any of his/her rights or obligations under this Agreement.\n" +
    "\n" +
    "        </p><br /><p>13. MISCELLANEOUS\n" +
    "        </p><p>13.1. No waiver by BetCoin ™ Prize of any breach of any provision of this Agreement (including the failure of BetCoin ™ Prize to require strict and literal performance of or compliance with any provision of this Agreement) shall in any way be construed as a waiver of any subsequent breach of such provision or of any breach of any other provision of this Agreement.\n" +
    "        </p><p>13.2. Nothing in this Agreement shall create or confer any rights or other benefits in favor of any third parties not party to this Agreement other than with an affiliate of BetCoin ™ Prize.\n" +
    "        </p><p>13.3. Nothing in this Agreement shall create or be deemed to create a partnership, agency, trust arrangement, fiduciary relationship or joint venture between you and us.\n" +
    "        </p><p>13.4. This Agreement constitutes the entire understanding and agreement between you and us regarding the Service and supersedes any prior agreement, understanding, or arrangement between you and us.\n" +
    "        </p>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/whatisbitcoin-cn.html',
    "<div id=\"whatisbitcoin-cn\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">What is Bitcoin?</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <ol>\n" +
    "          <li><a target=\"_blank\" href=\"http://btcchina.org\">比特币百科网站</a></li>\n" +
    "          <li><a target=\"_blank\" href=\"http://baike.baidu.com/view/5784548.htm\">百度百科--比特币</a></li>\n" +
    "\n" +
    "          <li> <a target=\"_blank\" href=\"http://www.hxtop.com\">海峡比特币网</a></li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/whatisbitcoin-en.html',
    "<div id=\"whatisbitcoin-en\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">What is Bitcoin?</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "  <p>To answer that best, we recommend <a target=\"_blank\" href=\"http://www.weusecoins.com\">www.weusecoins.com</a> and <a target=\"_blank\" href=\"http://www.bitcoin.org\">www.bitcoin.org</a> or <a target=\"_blank\" href=\"http://en.wikipedia.org/wiki/Bitcoin\">the wikipedia article</a>.</p>\n" +
    "  <p> Put simply, Bitcoin is a decentralized digital currency that uses cryptographic techniques to enforce scarcity, ensure security, and defend against problems such as double spending. Unlike most currencies, Bitcoin has no need for a centralized server to coordinate financial operations. Instead, there is a network of peer-to-peer (P2P) nodes, all run by users of the currency, that track transactions and enforce security through standardized industrial-strength cryptographic procedures.</p>\n" +
    "  <p><a target=\"_blank\" href=\"https://www.youtube.com/watch?feature=player_embedded&v=Um63OQz3bjo\">Try watching this YouTube video</a></p>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/whatisbitcoin-page.html',
    "<div class=\"panel panel-default main-container\">\n" +
    "\t<div class=\"panel-body\">\n" +
    "\t\t<h3>How to use Bitcoin</h4>\n" +
    "\t\t<hr>\n" +
    "\t\t<p>\n" +
    "\t\tBitcoin is truly the currency of the future: it is not controlled by any government or interest group and is fully controlled by the community of users. Bitcoin has become a worldwide phenomenon and hundreds of businesses start accepting the currency every day. Now is the right time to start using the currency yourself.\n" +
    "\t\tIn this short guide we will explain what you need to know to start using bitcoin today!\n" +
    "\t\t</p>\n" +
    "\t\t<br>\n" +
    "\t\t<h3>Your Bitcoin Wallet</h3>\n" +
    "\t\t<hr>\n" +
    "\t\t<p>The first thing you need to do is open a wallet. Wallet are used to store bitcoin that you have bought or mined.\n" +
    "\t\tThere are many wallet providers, some that will require that you install a software on your computer (your bitcoin are then physically stored in your hard drive) and some that based entirely on the web.\n" +
    "\t\tThe web wallets are very convenient and it only take a few minutes to open your account. Conversely, downloading wallet software, using “cold storage” addresses and/or printed copies of the wallet are all options for storage of Bitcoin.\n" +
    "\t\tWeb-based wallets and downloadable wallets each have pros and cons. It is always recommended to store large amounts of Bitcoin in cold storage.\n" +
    "\t\t</p>\n" +
    "\n" +
    "\t\t<p>\n" +
    "\t\tIn any case, these wallet providers are trusted in the community and offer a high level of security:\n" +
    "\t\t</p>\n" +
    "\t\t<ul> \n" +
    "\t\t<li>Blockchain (web based)</li>\n" +
    "\t\t<li>Coinbase (web based)</li>\n" +
    "\t\t<li>BitcoinQT (software)</li>\n" +
    "\t\t<li>Armory (software)</li>\n" +
    "\t\t<li>Multibit (software)</li>\n" +
    "\t\t</ul>\n" +
    "\t\t<br>\n" +
    "\t\t<h3>Obtaining Bitcoin</h3>\n" +
    "\t\t<hr>\n" +
    "\t\t<p>\n" +
    "\t\tNow that you have created your wallet, you need to obtain some bitcoin. there are three ways that you can do that:\n" +
    "\t\t</p>\n" +
    "\n" +
    "\t\t<ul>\n" +
    "\t\t<li>Mining bitcoin</li>\n" +
    "\t\t<li>Purchasing bitcoin</li>\n" +
    "\t\t<li>Getting free bitcoin</li>\n" +
    "\t\t<li>Mining bitcoin</li>\n" +
    "\t\t</ul>\n" +
    "\n" +
    "\t\t<p>\n" +
    "\t\tMining is the original way to obtain bitcoin. The bitcoins are mined by resolving increasingly difficult mathematical problems. to resolve the problem you have to dedicate computational power and if you are the first to resolve the problem you obtain the bitcoin reward.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tThe problems have become extremely difficult to resolve and now require enormous computational power. You can buy specialized mining equipment (computers designed especially to mine bitcoin) but to have a decent chance of solving problems you will probably need very advanced material which can be very costly.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tIf you are not interested in purchasing expensive equipment you can also join a mining pool which is the association of multiple people to work together to solve problem and then the reward is split equitably between the participants.\n" +
    "\t\tIn any case, mining bitcoin may take a lot of time so many people actually purchase their bitcoin.\n" +
    "\t\t</p>\n" +
    "\t\t<br>\n" +
    "\t\t<h3>Purchasing Bitcoin</h3>\n" +
    "\t\t<hr>\n" +
    "\t\t<p>\n" +
    "\t\tPeople who have bitcoin can sell them on bitcoin exchanges such as Mt. Gox or BitStamp. these exchanges will let you register a bank account and wire fiat currency to the exchange so that you can purchase bitcoin from sellers. The price of bitcoin is somewhat volatile but is stabilizing as many people are now starting to use it to purchase goods and services rather than just speculating with it.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tIf you prefer buying the bitcoin in person, you can do so in many cities and directories such as <a href=\"http://localbitcoins.com/\" target=\"_blank\">localbitcoins.com</a> will let you find people who want to sell bitcoin directly.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tFinally, there are businesses such as <a href=\"http://superbit.hk/\" target=\"_blank\">Superbit.hk</a> who offer bitcoin as a bonus for a product purchase. <a href=\"http://superbit.hk/\" target=\"_blank\">Superbit.hk</a> will for instance send you the full value of your purchase as a bitcoin bonus. A small commission is taken in the process but with services such as this one you can purchase bitcoin rapidly and with your credit card.\n" +
    "\t\t</p>\n" +
    "\t\t<br>\n" +
    "\t\t<h3>Getting free Bitcoin</h3>\n" +
    "\t\t<hr>\t\t\n" +
    "\t\t<p>\n" +
    "\t\tOn the web you can find many companies willing to offer bitcoins as a reward to complete tasks such as watching a video or advertisement. A quick search on Google will uncover a lot of these sites but the bitcoin you will receive as a bonus is generally a tiny amount so you might need to complete many tasks before having a meaningful amount of bitcoin.\n" +
    "\t\t</p>\n" +
    "\t\t<br>\n" +
    "\t\t<h3>Using Bitcoin</h3>\n" +
    "\t\t<hr>\t\t\n" +
    "\t\t<p>\n" +
    "\t\tUsing bitcoin is incredibly easy and works almost like cash, only in an electronic form.\n" +
    "\t\tIf you want to transfer bitcoin to a person or business you need to go to your wallet and \"send\" bitcoin to the wallet address of the recipient. The person or business will give you the address to send the bitcoin to and you can add a message along with your bitcoin so that the recipient know exactly why he has received the bitcoin.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tBusinesses may require that you also send an email with the transaction ID or your own wallet address so that they can identify you as the buyer and send you your goods or services.\n" +
    "\t\tBitcoin transaction are nearly instant and cannot be reversed, so make sure that you are sending your bitcoin to the right address.\n" +
    "\t\t</p>\n" +
    "\t\t<p>\n" +
    "\t\tAfter a few bitcoin operations, the process will become second nature and it will feel as easy as paying in cash and easier than paying with your credit card!\n" +
    "\t\t</p>\n" +
    "\n" +
    "\t\t<br>\t\t\n" +
    "\t\t<h3>What is Bitcoin</h3>\n" +
    "\t\t<hr>\n" +
    "\t\t<p>\n" +
    "\t\tBitcoin is a digital currency that can be used on the web or in the real world to complete financial transactions such as purchasing goods and services or transferring money to someone.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tThe digital money can be sent instantly over the web and is a secure and trustworthy way to transfer value from one person to another or company. the transaction fees are minimal and the transaction nearly instant. Transactions cannot be reversed.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\t\n" +
    "\t\tThe digital money is transferred to the recipient and the proof of the transaction is kept in a public ledger (named the “block chain”) which records all transactions made with bitcoin.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tThe ledger cannot be altered as it is stored on every network participants' computers so the digital money can only be transferred to one person. Double spending is impossible, because the ledger proves what account sent bitcoin to which account and this bitcoin can now only be spent or sent from the account that received it.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tBitcoin transactions are almost instantaneous and are completed when the network of user (automatically) validates the transfer and acknowledges that the bitcoin have been transferred and were transferable (not already spent).\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tBitcoin wallets that can be web based or downloaded on ones computer are used for sending and receiving bitcoin.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tTo obtain bitcoin, the original method is to mine them which is done by dedicating computational power to the validation and tracking of bitcoin transactions in the ledger.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t\t<p>\n" +
    "\t\tTo validate and record the transactions, the network needs to resolve problems generated by an algorithm and the first miner to resolve the problem gets rewarded with new bitcoin that he can then spend or sell. The problems to solve are increasingly difficult so more and more computational power will be needed to resolve them.\n" +
    "\t\t</p>\n" +
    "\n" +
    "\t\t<p>\n" +
    "\t\tA simpler way to obtain bitcoin is to exchange fiat currency for them which can be done in bitcoin exchanges.\n" +
    "\t\tThe value of the bitcoin has varied immensely in its history as it was mostly a medium for speculation at first but the crypto-currency is now used by many people around the world to purchase goods and services. Therefore the value of the currency has stabilized somewhat and should stabilize further as more and more businesses and people start accepting it for payment.\n" +
    "\t\t</p>\n" +
    "\t\t\n" +
    "\t</div>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/whatisbitcoin.html',
    "<div class=\"container\">\n" +
    "    <h3>What is Bitcoin?</h3>\n" +
    "\n" +
    "    <h4>How to use Bitcoin</h4>\n" +
    "\n" +
    "    <p>\n" +
    "        Bitcoin is truly the currency of the future: it is not controlled by any government or interest group and is fully controlled by the community of users. Bitcoin has become a worldwide phenomenon and hundreds of businesses start accepting the currency every day. Now is the right time to start using the currency yourself.\n" +
    "        In this short guide we will explain what you need to know to start using bitcoin today!\n" +
    "    </p>\n" +
    "\n" +
    "    <h4>Your Bitcoin Wallet</h4>\n" +
    "\n" +
    "    <p>The first thing you need to do is open a wallet. Wallet are used to store bitcoin that you have bought or mined.\n" +
    "        There are many wallet providers, some that will require that you install a software on your computer (your bitcoin are then physically stored in your hard drive) and some that based entirely on the web.\n" +
    "        The web wallets are very convenient and it only take a few minutes to open your account. Conversely, downloading wallet software, using “cold storage” addresses and/or printed copies of the wallet are all options for storage of Bitcoin.\n" +
    "        Web-based wallets and downloadable wallets each have pros and cons. It is always recommended to store large amounts of Bitcoin in cold storage.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        In any case, these wallet providers are trusted in the community and offer a high level of security:\n" +
    "    </p>\n" +
    "    <ul> \n" +
    "        <li>Blockchain (web based)</li>\n" +
    "        <li>Coinbase (web based)</li>\n" +
    "        <li>BitcoinQT (software)</li>\n" +
    "        <li>Armory (software)</li>\n" +
    "        <li>Multibit (software)</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <h4>Obtaining Bitcoin</h4>\n" +
    "\n" +
    "    <p>\n" +
    "        Now that you have created your wallet, you need to obtain some bitcoin. there are three ways that you can do that:\n" +
    "    </p>\n" +
    "\n" +
    "    <ul>\n" +
    "        <li>Mining bitcoin</li>\n" +
    "        <li>Purchasing bitcoin</li>\n" +
    "        <li>Getting free bitcoin</li>\n" +
    "        <li>Mining bitcoin</li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <p>\n" +
    "        Mining is the original way to obtain bitcoin. The bitcoins are mined by resolving increasingly difficult mathematical problems. to resolve the problem you have to dedicate computational power and if you are the first to resolve the problem you obtain the bitcoin reward.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        The problems have become extremely difficult to resolve and now require enormous computational power. You can buy specialized mining equipment (computers designed especially to mine bitcoin) but to have a decent chance of solving problems you will probably need very advanced material which can be very costly.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        If you are not interested in purchasing expensive equipment you can also join a mining pool which is the association of multiple people to work together to solve problem and then the reward is split equitably between the participants.\n" +
    "        In any case, mining bitcoin may take a lot of time so many people actually purchase their bitcoin.\n" +
    "    </p>\n" +
    "\n" +
    "    <h4>Purchasing Bitcoin</h4>\n" +
    "\n" +
    "    <p>\n" +
    "        People who have bitcoin can sell them on bitcoin exchanges such as Mt. Gox or BitStamp. these exchanges will let you register a bank account and wire fiat currency to the exchange so that you can purchase bitcoin from sellers. The price of bitcoin is somewhat volatile but is stabilizing as many people are now starting to use it to purchase goods and services rather than just speculating with it.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        If you prefer buying the bitcoin in person, you can do so in many cities and directories such as <a href=\"http://localbitcoins.com/\" target=\"_blank\">localbitcoins.com</a> will let you find people who want to sell bitcoin directly.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        Finally, there are businesses such as <a href=\"http://superbit.hk/\" target=\"_blank\">Superbit.hk</a> who offer bitcoin as a bonus for a product purchase. <a href=\"http://superbit.hk/\" target=\"_blank\">Superbit.hk</a> will for instance send you the full value of your purchase as a bitcoin bonus. A small commission is taken in the process but with services such as this one you can purchase bitcoin rapidly and with your credit card.\n" +
    "    </p>\n" +
    "\n" +
    "    <h4>Getting free Bitcoin</h4>\n" +
    "    <p>\n" +
    "        On the web you can find many companies willing to offer bitcoins as a reward to complete tasks such as watching a video or advertisement. A quick search on Google will uncover a lot of these sites but the bitcoin you will receive as a bonus is generally a tiny amount so you might need to complete many tasks before having a meaningful amount of bitcoin.\n" +
    "    </p>\n" +
    "\n" +
    "    <h4>Using Bitcoin</h4>\n" +
    "    <p>\n" +
    "        Using bitcoin is incredibly easy and works almost like cash, only in an electronic form.\n" +
    "        If you want to transfer bitcoin to a person or business you need to go to your wallet and \"send\" bitcoin to the wallet address of the recipient. The person or business will give you the address to send the bitcoin to and you can add a message along with your bitcoin so that the recipient know exactly why he has received the bitcoin.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        Businesses may require that you also send an email with the transaction ID or your own wallet address so that they can identify you as the buyer and send you your goods or services.\n" +
    "        Bitcoin transaction are nearly instant and cannot be reversed, so make sure that you are sending your bitcoin to the right address.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        After a few bitcoin operations, the process will become second nature and it will feel as easy as paying in cash and easier than paying with your credit card!\n" +
    "    </p>\n" +
    "\n" +
    "\n" +
    "    <h4>What is Bitcoin</h4>\n" +
    "\n" +
    "    <p>\n" +
    "        Bitcoin is a digital currency that can be used on the web or in the real world to complete financial transactions such as purchasing goods and services or transferring money to someone.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        The digital money can be sent instantly over the web and is a secure and trustworthy way to transfer value from one person to another or company. the transaction fees are minimal and the transaction nearly instant. Transactions cannot be reversed.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>     \n" +
    "        The digital money is transferred to the recipient and the proof of the transaction is kept in a public ledger (named the “block chain”) which records all transactions made with bitcoin.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        The ledger cannot be altered as it is stored on every network participants' computers so the digital money can only be transferred to one person. Double spending is impossible, because the ledger proves what account sent bitcoin to which account and this bitcoin can now only be spent or sent from the account that received it.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        Bitcoin transactions are almost instantaneous and are completed when the network of user (automatically) validates the transfer and acknowledges that the bitcoin have been transferred and were transferable (not already spent).\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        Bitcoin wallets that can be web based or downloaded on ones computer are used for sending and receiving bitcoin.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        To obtain bitcoin, the original method is to mine them which is done by dedicating computational power to the validation and tracking of bitcoin transactions in the ledger.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        To validate and record the transactions, the network needs to resolve problems generated by an algorithm and the first miner to resolve the problem gets rewarded with new bitcoin that he can then spend or sell. The problems to solve are increasingly difficult so more and more computational power will be needed to resolve them.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "        A simpler way to obtain bitcoin is to exchange fiat currency for them which can be done in bitcoin exchanges.\n" +
    "        The value of the bitcoin has varied immensely in its history as it was mostly a medium for speculation at first but the crypto-currency is now used by many people around the world to purchase goods and services. Therefore the value of the currency has stabilized somewhat and should stabilize further as more and more businesses and people start accepting it for payment.\n" +
    "    </p>\n" +
    "</div>\n"
  );


  $templateCache.put('tpl/wheretogetbitcoin-cn.html',
    "<div id=\"wherebitcoin-en\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">Where to Get Bitcoins</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <h5>Using credit cards:</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"https://www.meetpays.com/\">MeetPays</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"https://btcquick.com/\">btcQuick</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://www.buybitcoins.com\">BuyBitcoins</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://money2btc.com\">Money2BTC</a>\n" +
    "\n" +
    "        </ul>\n" +
    "        <h5>Using wire transfers:</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://bitstamp.net\">BITSTAMP</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://mtgox.com\">Mt. Gox</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://btc-e.com\">BTC-E</a></li>\n" +
    "        </ul>\n" +
    "        <h5>Buy locally using cash or wire</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://localbitcoins.com\">LocalBitcoins</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/wheretogetbitcoin-en.html',
    "<div id=\"wherebitcoin-en\" class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "        <h3 id=\"myModalLabel\">Where to Get Bitcoins</h3>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <h5>Using credit cards:</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"https://www.meetpays.com/\">MeetPays</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"https://btcquick.com/\">btcQuick</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://www.buybitcoins.com\">BuyBitcoins</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://money2btc.com\">Money2BTC</a>\n" +
    "\n" +
    "        </ul>\n" +
    "        <h5>Using wire transfers:</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://bitstamp.net\">BITSTAMP</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://mtgox.com\">Mt. Gox</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://btc-e.com\">BTC-E</a></li>\n" +
    "        </ul>\n" +
    "        <h5>Buy locally using cash or wire</h5>\n" +
    "        <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://localbitcoins.com\">LocalBitcoins</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('tpl/wheretogetbitcoin.html',
    "<div class=\"container\">\n" +
    "    <h3>Where to Get BitCoin</h3>\n" +
    "    <h4>Using Credit Card</h4>\n" +
    "    <ul>\n" +
    "        <li><a target=\"_blank\" href=\"https://www.meetpays.com/\">MeetPays</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"https://btcquick.com/\">btcQuick</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://www.buybitcoins.com\">BuyBitcoins</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://money2btc.com\">Money2BTC</a></li>\n" +
    "    </ul>\n" +
    "    <h4>Using wire transfers</h4>\n" +
    "    <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://bitstamp.net\">BITSTAMP</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://mtgox.com\">Mt. Gox</a></li>\n" +
    "        <li><a target=\"_blank\" href=\"http://btc-e.com\">BTC-E</a></li>\n" +
    "    </ul>\n" +
    "    <h4>Buy locally using cash or wire</h4>\n" +
    "    <ul>\n" +
    "        <li><a target=\"_blank\" href=\"http://localbitcoins.com\">LocalBitcoins</a></li>\n" +
    "    </ul>\n" +
    "</div>\n"
  );

}]);

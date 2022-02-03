(self.webpackChunkscriptcat_org=self.webpackChunkscriptcat_org||[]).push([[919],{5010:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>c});const c={key:"v-cee4e4b6",path:"/dev/cloudcat.html",title:"云端执行",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"CloudCat附加描述",slug:"cloudcat附加描述",children:[{level:3,title:"cloudCat",slug:"cloudcat",children:[]},{level:3,title:"cloudServer",slug:"cloudserver",children:[]},{level:3,title:"exportValue",slug:"exportvalue",children:[]},{level:3,title:"exportCookie",slug:"exportcookie",children:[]}]},{level:2,title:"API支持变化",slug:"api支持变化",children:[{level:3,title:"GM_xmlhttpRequest",slug:"gm-xmlhttprequest",children:[]},{level:3,title:"GM_notification",slug:"gm-notification",children:[]},{level:3,title:"GM_log",slug:"gm-log",children:[]}]},{level:2,title:"运行环境",slug:"运行环境",children:[{level:3,title:"本地",slug:"本地",children:[]},{level:3,title:"腾讯云",slug:"腾讯云",children:[]}]}],filePathRelative:"dev/cloudcat.md",git:{updatedTime:1643900502e3,contributors:[]}}},4133:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>y});var c=n(6252);const t=(0,c.Wm)("h1",{id:"云端执行",tabindex:"-1"},[(0,c.Wm)("a",{class:"header-anchor",href:"#云端执行","aria-hidden":"true"},"#"),(0,c.Uk)(" 云端执行")],-1),l=(0,c.Uk)("提供了多种云端的运行方式，详情请看"),o=(0,c.Wm)("a",{href:"#%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83"},"运行环境",-1),r=(0,c.Uk)("。另外"),s={href:"https://github.com/scriptscat/cloudcat",target:"_blank",rel:"noopener noreferrer"},i=(0,c.Uk)("CloudCat"),d=(0,c.Uk)("是用于云端执行后台脚本的服务，是一个FAAS平台，还在开发中。"),p=(0,c.uE)('<p>⚠请注意⚠,上传到云端后,定时脚本表达式中的<code>once</code>语义会进行改变,将<code>once</code>之前的时间替换成最小值运行.</p><p>例如:</p><ul><li><code>* * once * *</code>=&gt;<code>0 0 * * *</code> 每天运行一次 转化为 每天的00:00分运行</li><li><code>* 1-23 once * *</code>=&gt;<code>0 1 * * *</code> 每天的1-23点中运行一次 转化为 每天的01:00分运行</li><li><code>* 1,3,5 once * *</code>=&gt;<code>0 1 * * *</code> 每天1点3点5点中运行一次 转化为 每天的01:00分运行</li><li><code>* */4 once * *</code>=&gt;<code>0 0 * * *</code> 每天每隔4小时运行一次 转化为 每天的00:00分运行</li><li><code>* 1-23/4 once * *</code>=&gt;<code>0 1 * * *</code> 每天的1-23点中每隔4小时运行一次 转化为 每天的01:00分运行</li><li><code>* 10 once * *</code>=&gt;<code>0 10 * * *</code> 每天的10点运行一次 转化为 每天10时的00分运行</li><li><code>* * * once *</code>=&gt;<code>0 0 1 * *</code> 每月运行一次 转化 每月的1号00:00分运行</li></ul><h2 id="cloudcat附加描述" tabindex="-1"><a class="header-anchor" href="#cloudcat附加描述" aria-hidden="true">#</a> CloudCat附加描述</h2>',4),u=(0,c.Uk)("一个参考的脚本："),h={href:"https://scriptcat.org/script-show-page/48",target:"_blank",rel:"noopener noreferrer"},m=(0,c.Uk)("bilibili自动签到"),g=(0,c.uE)('<h3 id="cloudcat" tabindex="-1"><a class="header-anchor" href="#cloudcat" aria-hidden="true">#</a> cloudCat</h3><p>声明此属性脚本可以使用<code>CloudCat</code>方式运行，当脚本有此选项后在脚本列表中会显示一个云端执行的按钮，点击后可以选择执行方式，执行方式请看<a href="#%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83">运行环境</a></p><p><img src="cloudcat.assets\\image-20220203225847694.png" alt="image-20220203225847694"></p><h3 id="cloudserver" tabindex="-1"><a class="header-anchor" href="#cloudserver" aria-hidden="true">#</a> cloudServer</h3><blockquote><p>与cloudcat相关,还未实现</p></blockquote><p>默认的cloudcat服务器地址</p><h3 id="exportvalue" tabindex="-1"><a class="header-anchor" href="#exportvalue" aria-hidden="true">#</a> exportValue</h3><p>描述要导出到云端的Value,可以存在多个描述.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// @exportValue key1,key2,key3</span>\n<span class="token comment">// @exportValue key4,key5,key6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="exportcookie" tabindex="-1"><a class="header-anchor" href="#exportcookie" aria-hidden="true">#</a> exportCookie</h3><p>描述要导出到云端的cookie,可以存在多个描述.参数使用<code>GM_cookie</code>的<code>CookieDetails</code>进行描述,例如:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// 如下将导出https://docs.scriptcat.org/use/中name为cookie1的cookie</span>\n<span class="token comment">// @exportCookie url=https://docs.scriptcat.org/use;name=cookie1</span>\n\n<span class="token comment">// 将导出scriptcat.org域所有的cookie</span>\n<span class="token comment">// @exportCookie domain=scriptcat.org</span>\n\n<span class="token comment">// 所有可用参数如下:</span>\n<span class="token comment">// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/use;name=cookie1;path=/use;secure=true;session=true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api支持变化" tabindex="-1"><a class="header-anchor" href="#api支持变化" aria-hidden="true">#</a> API支持变化</h2><blockquote><p>暂时只支持以下API,若无特殊说明,表示与原API一样.</p></blockquote><h3 id="gm-xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#gm-xmlhttprequest" aria-hidden="true">#</a> GM_xmlhttpRequest</h3><h3 id="gm-notification" tabindex="-1"><a class="header-anchor" href="#gm-notification" aria-hidden="true">#</a> GM_notification</h3><h3 id="gm-log" tabindex="-1"><a class="header-anchor" href="#gm-log" aria-hidden="true">#</a> GM_log</h3><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><h3 id="本地" tabindex="-1"><a class="header-anchor" href="#本地" aria-hidden="true">#</a> 本地</h3><p>将导出一个zip包,解压进入文件夹后执行如下命令,可在本地执行,需要本地有nodejs的环境</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i\nnode index.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="腾讯云" tabindex="-1"><a class="header-anchor" href="#腾讯云" aria-hidden="true">#</a> 腾讯云</h3>',22),b=(0,c.Uk)("请先在"),k={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},x=(0,c.Wm)("strong",null,"访问密钥",-1),v=(0,c.Uk)("创建腾讯云的密钥，如果是子账号请注意需要给子账号分配云函数的权限；然后在"),f={href:"https://console.cloud.tencent.com/scf/list",target:"_blank",rel:"noopener noreferrer"},C=(0,c.Wm)("strong",null,"函数服务",-1),W=(0,c.Uk)("开通函数服务，每个月有一定的免费额度；地域默认为上海，如有特殊需求可自行调整，点击上传后会自动根据"),_=(0,c.Wm)("code",null,"@crontab",-1),A=(0,c.Uk)("创建定时触发器，定时运行函数。"),E=(0,c.Wm)("p",null,[(0,c.Wm)("img",{src:"cloudcat.assets\\image-20220203224956248.png",alt:"image-20220203224956248"})],-1),y={render:function(e,a){const n=(0,c.up)("OutboundLink");return(0,c.wg)(),(0,c.j4)(c.HY,null,[t,(0,c.Wm)("blockquote",null,[(0,c.Wm)("p",null,[l,o,r,(0,c.Wm)("a",s,[i,(0,c.Wm)(n)]),d])]),p,(0,c.Wm)("p",null,[u,(0,c.Wm)("a",h,[m,(0,c.Wm)(n)])]),g,(0,c.Wm)("p",null,[b,(0,c.Wm)("a",k,[x,(0,c.Wm)(n)]),v,(0,c.Wm)("a",f,[C,(0,c.Wm)(n)]),W,_,A]),E],64)}}}}]);
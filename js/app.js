var routes = [
  {
    path:'/',
    component:{
      template:`
      <div class="p2">
          <div class="title">
              <router-link to="#" class="tx-a"><div class="tx-b"></div></router-link>
            <div class="name"><p>LY</p><p id="lyzf1">.</p><p>Z</p><p id="lyzf2">.</p><p>F</p><p id="lyzf3">.</p></div>
            <p class="i">stay hungry,stay foolish.</P>
          <div class="clear-both"></div>
          </div>
          <div class="divider yincang"></div>
          <div class="text">
            <div class="text-a">
              <a href="text/text3.html" class="text-h">高中毕业设计—震中心APP</a>
              <p class="text-meta">2018 / 5/ 04, 23:12</p>
              <div class="text-box">
                <p class="im">一年前的野路子，手法非常青涩</p>
                <div class="dengmian"><img class="fengmian" src="img/1206060.jpg"></div>
              </div>
              <a href="text/text3.html" class="more">more</a>
            </div>
          <div class="divider"></div>
            <div class="text-a">
              <a href="text/text2.html" class="text-h">多重梦境</a>
              <p class="text-meta">2018 / 4/ 21, 08:44</p>
              <div class="text-box">
                <p class="im">他做了好几重梦，在最后一层，天空下着小雨，我饿的浑身无力，一个女孩抓着我的手，努力的爬着山间的小路。</p>
              </div>
              <a href="text/text2.html" class="more">more</a>
            </div>
            <div class="divider"></div>
            <div class="text-a">
              <a href="text/text1.html" class="text-h">无聊的人</a>
              <p class="text-meta">2018 / 3/ 21, 01:11</p>
              <div class="text-box">
                <p class="im">他们不会让你太无聊的。
                因为无聊的人会摆脱群体，而独立的个体必定比群体明智。</p>
              </div>
              <a href="text/text1.html" class="more">more</a>
            </div>
            <div class="text-button">
            <button class="button" ><span>Next</span></button>
            </div>
          </div>
      </div>
      </div>
      `
    }
  },
  {
    path:'/write',
    component:{
      template:`
      <div class="write">
      <div class="p2">
        <div class="title">
          <h1 class="biaoti">Write</h1>
          <ul class="breadcrumb">
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/write">Write</router-link></li>
            </ul>
            <div class="clear-both"></div>
          </div>
          <div class="divider yincang"></div>
          <div class="text">
            <div class="text-a">
              <a href="text/text2.html" class="text-h">多重梦境</a>
              <p class="text-meta">2018 / 4/ 21, 08:44</p>
              <div class="text-box">
                <p class="im">他做了好几重梦，在最后一层，天空下着小雨，我饿的浑身无力，一个女孩抓着我的手，努力的爬着山间的小路。</p>
              </div>
              <a href="text/text2.html" class="more">more</a>
            </div>
            <div class="divider"></div>
            <div class="text-a">
              <a href="text/text1.html" class="text-h">无聊的人</a>
              <p class="text-meta">2018 / 3/ 21, 01:11</p>
              <div class="text-box">
                <p class="im">他们不会让你太无聊的。
                因为无聊的人会摆脱群体，而独立的个体必定比群体明智。</p>
              </div>
              <a href="text/text1.html" class="more">more</a>
            </div>
            <div class="text-button">
            <button class="button" ><span>Next</span></button>
            </div>
          </div>
      </div>
      `
    }
  },
  {
    path:'/design',
    component:{
      template:`
      <div class="write">
      <div class="p2">
        <div class="title">
          <h1 class="biaoti">Design</h1>
          <ul class="breadcrumb">
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/design">Design</router-link></li>
            </ul>
            <div class="clear-both"></div>
          </div>
          <div class="divider yincang"></div>
          <div class="text">
          <div class="text-a">
            <a href="text/text3.html" class="text-h">高中毕业设计—震中心APP</a>
            <p class="text-meta">2018 / 5/ 04, 23:12</p>
            <div class="text-box">
              <p class="im">一年前的野路子，手法非常青涩</p>
              <div class="dengmian"><img class="fengmian" src="img/1206060.jpg"></div>
            </div>
            <a href="text/text3.html" class="more">more</a>
          </div>
          </div>
      </div>
      </div>
      `
    }
  },
  {
    path:'/silly',
    component:{
      template:`
      <div class="write">
      <div class="p2">
        <div class="title">
          <h1 class="biaoti">Silly</h1>
          <ul class="breadcrumb">
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/silly">Silly</router-link></li>
            </ul>
            <div class="clear-both"></div>
          </div>
          <div class="divider yincang"></div>
          <div class="text">
            <div class="text-a">
              <div class="text-box">
              </div>
            </div>
          </div>
      </div>
      </div>
      `
    }
  }
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  el:'#app',
  router:router,
});

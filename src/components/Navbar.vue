<template>
  <div id="navigation" class="ma-12 pa-12">
    <v-card class="v-card">
      <v-navigation-drawer permanent expand-on-hover>
        <v-list>
          <v-list-item class="px-2" id="avatar">
            <v-list-item-avatar>
              <v-img
                src="https://lh3.google.com/u/0/d/12dqXvxsV9w66-dfH59UKFDfIYC_HpFFz=w2000-h2830-iv1"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <router-link to="/">
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title" id="author-name">
                  Shelly Chen
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <router-link to="/stockPerYear" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="fas fa-chart-line nav-icon"></i>
              </v-list-item-icon>
              <div class="title">年度國際主要股價指數</div>
            </v-list-item>
          </router-link>
          <router-link to="/stockPerMonth" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="fas fa-chart-line nav-icon"></i>
              </v-list-item-icon>
              <div class="title">近月國際主要股價指數</div>
            </v-list-item>
          </router-link>
          <router-link to="/" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="far fa-laugh nav-icon"></i>
              </v-list-item-icon>
              <div class="title">專案介紹</div>
            </v-list-item>
          </router-link>
          <router-link to="*" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="far fa-laugh nav-icon"></i>
              </v-list-item-icon>
              <div class="title">站長背景</div>
            </v-list-item>
          </router-link>
          <router-link to="*" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="fas fa-book nav-icon"></i>
              </v-list-item-icon>
              <div class="title">推薦書單</div>
            </v-list-item>
          </router-link>
          <router-link to="*" class="link">
            <v-list-item link>
              <v-list-item-icon>
                <i class="fas fa-star nav-icon"></i>
              </v-list-item-icon>
              <div class="title">未來規劃</div>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.v-card {
  height: 100vh;
  #avatar {
    display: flex;
    justify-content: center;
  }
  .link {
    text-decoration: none;
  }
  .nav-icon {
    line-height: 20px;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }
}
</style>
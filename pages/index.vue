<template>
  <section class="section">
    <div id="bar-chart" class="columns is-multiline charts-row">
      <div class="column">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons insert_chart">&#xe24b;</i>
              GRAPHICS
            </p>
          </header>
          <BarChart
            :data="barChartData"
            :options="{ maintainAspectRatio: false }"
          />
        </div>
      </div>
    </div>

    <div id="donut-chart" class="columns is-multiline charts-row">
      <div class="column is-half">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons pie_chart">&#xe6c4;</i>
              INCOME
            </p>
          </header>
          <div class="doughnut-chart">
            <DoughnutChart
              :data="doughnutChartData"
              :options="{
                legend: { display: true },
                maintainAspectRatio: false
              }"
            />
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons pie_chart_outlined">&#xe6c5;</i>
              OUTCOME
            </p>
          </header>
          <div class="doughnut-chart">
            <LineChart
              :data="lineChartData"
              :options="{
                legend: { display: true },
                maintainAspectRatio: false
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <div id="sliders" class="columns is-multiline charts-row">
      <div class="column is-one-third">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons pie_chart_outlined">&#xe6c5;</i>
              SLIDERS
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-field label="Primary">
                <b-slider type="is-primary" :value="60"></b-slider>
              </b-field>

              <b-field label="Success">
                <b-slider type="is-success" :value="93"></b-slider>
              </b-field>

              <b-field label="Error">
                <b-slider type="is-danger" :value="3"></b-slider>
              </b-field>

              <b-field label="Info">
                <b-slider type="is-info" :value="74"></b-slider>
              </b-field>

              <b-field label="Warning">
                <b-slider type="is-warning" :value="13"></b-slider>
              </b-field>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons pie_chart_outlined">&#xe6c5;</i>
              Switch & Checkbox
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="double-content-row">
                <div class="double-content">
                  <div class="field">
                    <b-switch :value="true">
                      Default
                    </b-switch>
                  </div>
                  <div class="field">
                    <b-switch :value="true" type="is-info">
                      Info
                    </b-switch>
                  </div>
                  <div class="field">
                    <b-switch :value="true" type="is-success">
                      Success
                    </b-switch>
                  </div>
                  <div class="field">
                    <b-switch :value="true" type="is-danger">
                      Danger
                    </b-switch>
                  </div>
                  <div class="field">
                    <b-switch :value="true" type="is-warning">
                      Warning
                    </b-switch>
                  </div>
                </div>

                <div class="double-content">
                  <div class="field">
                    <b-checkbox :value="true">
                      Default
                    </b-checkbox>
                  </div>
                  <div class="field">
                    <b-checkbox :value="true" type="is-info">
                      Info
                    </b-checkbox>
                  </div>
                  <div class="field">
                    <b-checkbox :value="true" type="is-success">
                      Success
                    </b-checkbox>
                  </div>
                  <div class="field">
                    <b-checkbox :value="true" type="is-danger">
                      Danger
                    </b-checkbox>
                  </div>
                  <div class="field">
                    <b-checkbox :value="true" type="is-warning">
                      Warning
                    </b-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="dashboard-card card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              <i class="material-icons pie_chart_outlined">&#xe6c5;</i>
              Notifications
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-notification
                type="is-danger"
                aria-close-label="Close notification"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </b-notification>

              <b-notification
                type="is-info"
                aria-close-label="Close notification"
              >
                Fusce id fermentum quam. Proin sagittis
              </b-notification>

              <b-notification
                type="is-success"
                aria-close-label="Close notification"
              >
                nibh id hendrerit imperdiet, elit sapien laoreet elit
              </b-notification>

              <b-notification
                type="is-warning"
                aria-close-label="Close notification"
                role="alert"
              >
                nibh id hendrerit imperdiet, elit sapien laoreet elit
              </b-notification>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline cards-container">
      <dashboard-card title="PAGES" pack="fa" icon="address-card">
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 1</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 2</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 3</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 4</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 5</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 6</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 7</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 8</span>
            </nuxt-link>
          </li>
        </ul>
      </dashboard-card>

      <dashboard-card title="PAGES 2" pack="fa" icon="plane">
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 1</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 2</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 3</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 4</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 5</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 6</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 7</span>
            </nuxt-link>
          </li>
        </ul>
      </dashboard-card>

      <dashboard-card title="PAGES 3" pack="fa" icon="ship">
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 1</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 2</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 3</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 4</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 5</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 6</span>
            </nuxt-link>
          </li>
        </ul>
      </dashboard-card>

      <dashboard-card title="SETTINGS" pack="fa" icon="truck">
        <ul>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 1</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 2</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 3</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 4</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 5</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">
              <i class="material-icons keyboard_tab">&#xe31c;</i>
              <span class="text">Page 6</span>
            </nuxt-link>
          </li>
        </ul>
      </dashboard-card>
    </div>

    <b-modal
      :active="isDocVisible"
      full-screen
      can-cancel
      @close="closeDocument"
      :class="{ modalTop: navbarPos }"
    >
      <p class="image">
        <img
          src="https://miro.medium.com/max/1200/1*EWDEUt0fqsmRgpYGFOOMew.png"
        />
      </p>
    </b-modal>
  </section>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import '../components/scss/cards.scss'
import '../components/dashboard/dashboard.scss'
import BarChart from '~/components/dashboard/bar-chart'
import DoughnutChart from '~/components/dashboard/doughnut-chart'
import LineChart from '~/components/dashboard/line-chart'
import DashboardCard from '~/components/dashboard/DashboardCard'

export default {
  name: 'HomePage',

  components: {
    BarChart,
    DashboardCard,
    DoughnutChart,
    LineChart
  },

  computed: {
    isDocVisible() {
      return this.$store.state.isDocVisible
    },

    navbarPos() {
      return this.$store.state.navbarPos
    }
  },

  async asyncData({ env }) {
    const res = await axios.get(
      `https://api.github.com/repos/nuxt/nuxt.js/stats/commit_activity?access_token=42cdf9fd55abf41d24f34c0f8a4d9ada5f9e9b93`
    )
    return {
      barChartData: {
        labels: res.data.map(stat =>
          moment(stat.week * 1000).format('GGGG[-W]WW')
        ),
        datasets: [
          {
            label: 'Nuxt.js Commit Activity',
            backgroundColor: '#2b7a78',
            data: res.data.map(stat => stat.total)
          }
        ]
      },
      doughnutChartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Overview',
            backgroundColor: [
              '#3aafa9',
              '#2b7a78',
              '#17252a',
              '#def2f1',
              '#0070d2',
              '#0070d2'
            ],
            data: [1, 2, 3, 4, 5]
          }
        ]
      },
      lineChartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Dolar',
            backgroundColor: '#2b7a78',
            data: [70, 23, 30, 40, 100]
          }
        ]
      }
    }
  },

  methods: {
    closeDocument() {
      this.$store.dispatch('showDocument', false)
    }
  }
}
</script>

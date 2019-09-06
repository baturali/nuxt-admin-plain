<template>
  <section class="section">
    <div class="columns is-multiline cards-container form-view">
      <div class="column is-one-third">
        <card :datas="groups.userInfo" />
      </div>

      <div class="column is-one-third">
        <card :datas="groups.businessInfo" />
      </div>

      <div class="column is-one-third multi-row">
        <div class="card">
          <header class="card-header">
            <b-tooltip
              label="Tarihler ve Süreçler ile ilgili bilgiler bu kısımdan girilecektir"
              position="is-bottom"
              size="is-large"
              multilined
            >
              <p class="card-header-title has-text-grey">
                Dates
                <i class="material-icons" icon="date_range">
                  &#xe916;
                </i>
              </p>
            </b-tooltip>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="double-content-row">
                <div class="double-content">
                  <b-field label="Begin Date" type="">
                    <b-datepicker
                      placeholder="Choose a date..."
                      icon="calendar-today"
                    >
                    </b-datepicker>
                  </b-field>
                </div>

                <div class="double-content">
                  <b-field label="End Date">
                    <b-datepicker
                      placeholder="Choose a date..."
                      icon="calendar-today"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>

              <div class="double-content-row">
                <div class="double-content">
                  <b-field label="Insurance Begin" type="">
                    <b-datepicker
                      placeholder="Choose a date..."
                      icon="calendar-today"
                    >
                    </b-datepicker>
                  </b-field>
                </div>

                <div class="double-content">
                  <b-field label="Insurance End">
                    <b-datepicker
                      placeholder="Choose a date..."
                      icon="calendar-today"
                    >
                    </b-datepicker>
                  </b-field>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <header class="card-header">
            <b-tooltip
              label="Salary info section..."
              position="is-bottom"
              size="is-large"
              multilined
              always
            >
              <p class="card-header-title has-text-grey">
                Salary
                <i class="material-icons" icon="attach_money">&#xe227;</i>
              </p>
            </b-tooltip>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="mdc-text-field">
                <label class="pure-material-textfield-outlined">
                  <input placeholder=" " type="number" />
                  <span>Income</span>
                </label>
              </div>

              <div class="mdc-text-field">
                <label class="pure-material-textfield-outlined">
                  <input placeholder=" " type="number" />
                  <span>Outcome</span>
                </label>
              </div>

              <div class="mdc-text-field">
                <label class="pure-material-textfield-outlined">
                  <input placeholder=" " type="number" />
                  <span>Vacation</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column one-column is-12">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey">
              Konteyner - Yüklenici - Mal Bilgileri
              <i class="material-icons" icon="import_export">&#xe0c3;</i>
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="table-header">
                <b-field grouped group-multiline>
                  <b-select v-model="defaultSortDirection">
                    <option value="asc">Default sort direction: ASC</option>
                    <option value="desc">Default sort direction: DESC</option>
                  </b-select>
                  <b-select v-model="perPage" :disabled="!isPaginated">
                    <option value="5">5 per page</option>
                    <option value="10">10 per page</option>
                    <option value="15">15 per page</option>
                    <option value="20">20 per page</option>
                  </b-select>
                  <!--
                    <div class="control">
                      <button
                        class="button"
                        @click="currentPage = 2"
                        :disabled="!isPaginated"
                      >
                        Set page to 2
                      </button>
                    </div>
                  -->
                  <div class="control is-flex">
                    <b-switch v-model="isPaginated">Paginated</b-switch>
                  </div>
                  <div class="control is-flex">
                    <b-switch
                      v-model="isPaginationSimple"
                      :disabled="!isPaginated"
                    >
                      Simple pagination
                    </b-switch>
                  </div>
                  <b-select
                    v-model="paginationPosition"
                    :disabled="!isPaginated"
                  >
                    <option value="bottom">bottom pagination</option>
                    <option value="top">top pagination</option>
                    <option value="both">both</option>
                  </b-select>
                </b-field>
              </div>

              <b-table
                :data="table"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :pagination-simple="isPaginationSimple"
                :pagination-position="paginationPosition"
                :default-sort-direction="defaultSortDirection"
                default-sort="user.first_name"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
                draggable
              >
                <template slot-scope="props">
                  <b-table-column
                    field="id"
                    label="Age"
                    width="150"
                    sortable
                    numeric
                    centered
                  >
                    {{ props.row.id }}
                  </b-table-column>

                  <b-table-column
                    field="user.first_name"
                    label="First Name"
                    sortable
                    centered
                  >
                    {{ props.row.user.first_name }}
                  </b-table-column>

                  <b-table-column
                    field="user.last_name"
                    label="Last Name"
                    sortable
                    centered
                  >
                    {{ props.row.user.last_name }}
                  </b-table-column>

                  <b-table-column field="Tarih" label="Date" sortable centered>
                    <span class="tag is-success">
                      {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                  </b-table-column>

                  <b-table-column label="Gender" centered>
                    {{ props.row.gender }}
                  </b-table-column>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered buttons">
      <div class="column"></div>
      <div class="column">
        <div class="buttons-wrapper">
          <a href="#" class="btn" data-wipe="Save" @click="save">
            Save
          </a>
          <a href="#" class="btn" data-wipe="Cancel" @click="cancel">
            Cancel
          </a>
        </div>
      </div>
      <div class="column"></div>
    </div>

    <b-modal
      :active="isDocVisible"
      full-screen
      can-cancel
      @close="closeDocument"
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
import Card from '~/components/Card'
import '../components/forms/formsTable.scss'
import formsTable from '~/components/forms/formsTable.json'

export default {
  components: {
    Card
  },

  data: () => ({
    groups: {
      userInfo: {
        title: 'User Information',
        tooltip: 'Must be filled.',
        pack: '&#xe8a3;',
        icon: 'perm_contact_calendar',
        inputs: {
          name: {
            data: '',
            label: 'Name Surname'
          },
          email: {
            data: '',
            label: 'Email'
          },
          phone: {
            data: '',
            label: 'Phone'
          },
          address: {
            data: '',
            label: 'Address'
          },
          age: {
            data: '',
            label: 'Age'
          },
          gender: {
            data: '',
            label: 'Gender'
          },
          birthDate: {
            data: '',
            label: 'Birth Date'
          },
          birthPlace: {
            data: '',
            label: 'Birth Place'
          }
        }
      },
      businessInfo: {
        title: 'Business Information',
        tooltip: 'Business information section',
        pack: '&#xe89b;',
        icon: 'markunread_mailbox',
        inputs: {
          personalId: {
            data: '',
            label: 'Personal Id'
          },
          label: {
            data: '',
            label: 'Label'
          },
          title: {
            data: '',
            label: 'Title'
          },
          position: {
            data: '',
            label: 'Position'
          },
          manager: {
            data: '',
            label: 'Manager'
          },
          department: {
            data: '',
            label: 'Department'
          },
          businessPhone: {
            data: '',
            label: 'Business Phone'
          },
          businessMail: {
            data: '',
            label: 'Business Mail'
          },
          office: {
            data: '',
            label: 'Office Location'
          },
          partner: {
            data: '',
            label: 'Partner'
          }
        }
      }
    },
    table: formsTable,
    isPaginated: true,
    isPaginationSimple: false,
    paginationPosition: 'bottom',
    defaultSortDirection: 'asc',
    currentPage: 1,
    perPage: 10
  }),

  computed: {
    isDocVisible() {
      return this.$store.state.isDocVisible
    }
  },

  methods: {
    save() {
      this.$buefy.dialog.confirm({
        cancelText: 'Cancel',
        confirmText: 'Save',
        type: 'is-warning',
        hasIcon: true,
        message: 'All data will be saved',
        onConfirm: () => this.$buefy.toast.open('Saved.')
      })
    },

    cancel() {
      this.$buefy.dialog.confirm({
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        type: 'is-warning',
        hasIcon: true,
        message: 'All data will be erased',
        onConfirm: () => this.$buefy.toast.open('Cancelled.')
      })
    },

    closeDocument() {
      this.$store.dispatch('showDocument', false)
    }
  }
}
</script>

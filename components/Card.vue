<template>
  <div>
    <div class="card">
      <header class="card-header">
        <b-tooltip
          v-if="datas.tooltip"
          :label="datas.tooltip"
          position="is-bottom"
          size="is-large"
          multilined
        >
          <p class="card-header-title has-text-grey">
            {{ datas.title }}
            <i
              class="material-icons"
              :class="datas.icon"
              v-html="datas.pack"
            ></i>
          </p>
        </b-tooltip>
      </header>
      <div class="card-content">
        <div class="content">
          <div
            v-for="row of datas.inputs"
            :key="row.label"
            class="mdc-text-field"
          >
            <label class="pure-material-textfield-outlined">
              <input placeholder=" " />
              <span>{{ row.label }}</span>
            </label>
          </div>
        </div>
      </div>
      <!--
        <footer class="card-footer">
          <div class="card-footer-item">
            <span>
              <slot />
            </span>
          </div>
        </footer>
      -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      required: true
    }
  }
}
</script>

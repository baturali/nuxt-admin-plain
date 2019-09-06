<template>
  <div class="column is-one-quarter">
    <div class="dashboard-card card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
          <font-awesome-icon
            :icon="{ prefix: pack, iconName: icon }"
            type="is-primary"
          />
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <slot />
        </div>
      </div>
      <!--
        <footer class="card-footer">
          <div class="card-footer-item">
            <span>Dashboard footer</span>
          </div>
        </footer>
      -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    pack: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <DataBrowserNavbar />
    <h1>
      {{ $t('dataDashboards.sectors.label') }}
    </h1>
    <p class="lead">{{ $t('dataDashboards.sectors.select') }}</p>
    <template v-if="fields.recipient_country_or_region.length >0 ">
      <b-card-group columns>
        <b-card
          v-for="sector_category in fields.sector_category"
          v-bind:key="sector_category.code">
          <nuxt-link
          :to="localePath({
            name: `data-sector-category-code`, params: { code: sector_category.code }
          })">{{ sector_category.code }} - {{ sector_category.name }}</nuxt-link>
        </b-card>
      </b-card-group>
    </template>
    <template v-else>
      <div class="text-center">
        <b-spinner variant="secondary" />
      </div>
    </template>
    <DataBrowserSource />
  </div>
</template>
<script>

import { mapState } from 'vuex'
import DataBrowserNavbar from '~/components/DataBrowserNavbar'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['fields'])
  },
  mounted: function() {
    this.$store.dispatch('getCodelists')
  },
  head() {
    return {
      title: `${this.$t('dataDashboards.sectors.by')} - ${this.$t('dataDashboards.label')} - ${this.$t('title')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description')
        }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  watch: {
    '$i18n.locale'() {
      this.$store.dispatch('getCodelists')
    }
  }
}
</script>

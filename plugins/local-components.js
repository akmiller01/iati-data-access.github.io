import Vue from 'vue'
import CountriesCurrencies from '~/components/CountriesCurrencies.vue'
import DataGapsYear from '~/components/DataGapsYear.vue'
import DownloadFile from '~/components/DownloadFile.vue'
import AccessAnalyse from '~/components/AccessAnalyse.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
    
const components = { CountriesCurrencies, DataGapsYear, DownloadFile, AccessAnalyse, vSelect }
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})
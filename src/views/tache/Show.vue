<template>
  <div>
    <Toolbar :handle-delete="del">
      <template slot="left">
        <v-toolbar-title v-if="item">{{
          `${$options.servicePrefix} ${item['@id']}`
        }}</v-toolbar-title>
      </template>
    </Toolbar>

    <br />

    <div v-if="item" class="table-tache-show">
      <v-simple-table>
        <template slot="default">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>

              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{{ $t('name') }}</strong></td>
              <td>
                                    {{ item['name'] }}
              </td>
            
              <td><strong>{{ $t('description') }}</strong></td>
              <td>
                                    {{ item['description'] }}
              </td>
            </tr>
            
            <tr>
              <td><strong>{{ $t('dateCreation') }}</strong></td>
              <td>
                {{ formatDateTime(item['dateCreation'], 'long') }}              </td>
            
              <td><strong>{{ $t('userTaches') }}</strong></td>
              <td>
                                    {{ item['userTaches'].name }}
              </td>
            </tr>
            
          </tbody>
        </template>
      </v-simple-table>
    </div>

    <Loading :visible="isLoading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import Loading from '../../components/Loading';
import ShowMixin from '../../mixins/ShowMixin';
import Toolbar from '../../components/Toolbar';

const servicePrefix = 'Tache';

export default {
  name: 'TacheShow',
  servicePrefix,
  components: {
      Loading,
      Toolbar
  },
  mixins: [ShowMixin],
  computed: {
    ...mapFields('tache', {
      isLoading: 'isLoading'
    }),
    ...mapGetters('tache', ['find'])
  },
  methods: {
    ...mapActions('tache', {
      deleteItem: 'del',
      reset: 'reset',
      retrieve: 'load'
    })
  }
};
</script>

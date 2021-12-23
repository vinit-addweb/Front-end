<template>
  <ul>
    <li>
      <learning-resource
        v-for="res in StoredResources"
        :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      >
      </learning-resource>
    </li>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';
export default {
  components: {
    LearningResource: LearningResource,
  },
  data() {
    return {
      StoredResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The offical Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'Google',
          title: 'Official Guide',
          description: 'Learn to Google.',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

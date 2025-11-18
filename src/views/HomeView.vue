<template>
  <HeroSection />
  <About />
  <Services />
  <ContactForm />
  <WhyUs />
  <OffshoreMap />
</template>
<script>
export const prerender = true
</script>
<script setup>
import HeroSection from '@/components/HeroSection.vue'
import Services from '@/components/Services.vue'
import WhyUs from '@/components/WhyUs.vue'
import OffshoreMap from '@/components/OffshoreMap.vue'
import ContactForm from '@/components/ContactForm.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { onMounted, nextTick } from 'vue'
import About from '@/components/About.vue' 

const route = useRoute()
onMounted(async () => {
  if (route.hash) {
    await nextTick()
    setTimeout(() => {
      const el = document.querySelector(route.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
})

useHead({
  title: 'GLOBAL Onshore – rozwiązania elektryczne i serwis dla sektora morskiego',
  meta: [
    {
      name: 'description',
      content:
        'GLOBAL Onshore dostarcza specjalistyczne rozwiązania elektryczne i serwisowe dla sektora morskiego i przemysłowego. Doświadczeni inżynierowie realizują projekty z użyciem nowoczesnych technologii.'
    },
    {
      name: 'keywords',
      content:
        'GLOBAL Onshore, rozwiązania elektryczne, serwis elektryczny, sektor morski, offshore, onshore, instalacje przemysłowe, projekty elektryczne'
    },
    {
      property: 'og:title',
      content: 'GLOBAL Onshore – rozwiązania elektryczne i serwis przemysłowy'
    },
    {
      property: 'og:description',
      content:
        'Specjalistyczne usługi elektryczne i serwisowe dla sektora morskiego i przemysłowego. Zespół doświadczonych inżynierów i nowoczesne technologie.'
    },
    {
      property: 'og:url',
      content: 'https://globalonshore.pl/'
    }
  ]
})
</script>

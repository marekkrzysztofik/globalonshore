<template>
    <section class="career-section">
        <h2 class="section-title">{{ langState.t.main.careers.sectionTitle }}</h2>
        <div class="career-layout">
        
            <div class="job-list">
                <div v-for="(job, index) in jobs" :key="index" class="job-tile"
                    :class="{ active: selectedIndex === index }" @click="selectJob(index)">
                    <component :is="iconComponents[job.icon]" class="job-icon" />
                    <h3>{{ job.title }}</h3>
                </div>
                <RouterLink to="/aplikuj" class="apply-button">{{ langState.t.main.careers.apply
                    }}</RouterLink>
            </div>

         
            <transition name="fade-slide" mode="out-in">
                <div class="job-description" :key="selectedJob.title">
                    <div>
                        <h4>{{ langState.t.main.careers.duties }}</h4>
                        <ul>
                            <li v-for="duty in selectedJob.duties" :key="duty">{{ duty }}</li>
                        </ul>
                        <h4>{{ langState.t.main.careers.requirements }}</h4>
                        <ul>
                            <li v-for="req in selectedJob.requirements" :key="req">{{ req }}</li>
                        </ul>
                        <h4>{{ langState.t.main.careers.offer }}</h4>
                        <ul>
                            <li v-for="offer in selectedJob.offer" :key="offer">{{ offer }}</li>
                        </ul>
                    </div>

                </div>
            </transition>
        </div>
    </section>
</template>


<script setup>
import { ref, computed } from 'vue'
import langState from '@/lang/langState'
import { HardHat, Wrench, Zap, Settings } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Oferty Pracy | GLOBAL Onshore',
  meta: [
    {
      name: 'description',
      content: 'Zobacz aktualne oferty pracy w GLOBAL Onshore i aplikuj online. Poszukujemy specjalistów w zakresie instalacji elektrycznych i serwisu.',
    },
    {
      property: 'og:title',
      content: 'Oferty pracy | GLOBAL Onshore',
    },
    {
      property: 'og:description',
      content: 'Dołącz do GLOBAL Onshore. Praca przy instalacjach elektrycznych, serwisie i projektach onshore/offshore.',
    }
  ]
})

const selectedIndex = ref(0)

const selectJob = (index) => {
    selectedIndex.value = index
}

const iconComponents = {
    HardHat,
    Wrench,
    Zap,
    Settings
}

const jobs = computed(() => langState.t.main.careers.jobs)
const selectedJob = computed(() => jobs.value[selectedIndex.value])
</script>

<style scoped>
.career-section {
    background: #f8f9fb;
    padding: 2rem;
    min-height: 110vh;
}

.career-layout {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.job-list {
    flex: 1;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.job-tile {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border: 1px solid #eee;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    transition: background 0.3s;
}

.job-tile:hover,
.job-tile.active {
    background: #e9e9e9;
    border-color: var(--primary);
}

.job-icon {
    color: var(--primary);
    width: 28px;
    height: 28px;
}

.job-description {
    flex: 2;
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid #eee;
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 50vw;
}

.job-description h4 {
    color: var(--primary);
    font-size: 1.3rem;
}

.job-description ul {
    margin: 0 0 1.2rem 2rem;
    list-style-type: disc;
    color: #555;
}

.apply-button {
    font-size: 1rem;
    width: 100%;
    background-color: var(--primary);
    text-align: center;
    cursor: pointer;
    border: none;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s;
}

.apply-button:hover {
    background-color: var(--primary);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>

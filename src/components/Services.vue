<template>
  <section id="services" class="offer-section">
    <div class="bg-overlay"></div>
    <div class="container">
      <h2 class="title">{{ langState.t.main.ourOffer.title }}</h2>
      <p class="subtitle">{{ langState.t.main.ourOffer.subtitle }}</p>

      <div class="groups">
        <div v-for="group in groupedServices" :key="group.name" class="group">
          <div class="image" :style="{ backgroundImage: 'url(' + group.src + ')' }">
            <div class="overlay">
              <h3 class="group-title">{{ group.name }}</h3>
            </div>
          </div>
          <ul class="services">
            <li v-for="service in group.services" :key="service.title" class="service">
              <component :is="service.icon" class="icon-circle" />
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import langState from '@/lang/langState'
import { computed } from 'vue'
import {
  CircuitBoard, Cable, Cpu,
  Search, Wrench, ShieldCheck,
  Package, Hammer, Settings
} from 'lucide-vue-next'

const iconMatrix = [
  [CircuitBoard, Cable, Cpu],
  [Search, Wrench, ShieldCheck],
  [Package, Hammer, Settings]
]
const groupedServices = computed(() =>
  langState.t.main.ourOffer.groups.map((group, groupIndex) => ({
    name: group.name,
    src: group.src,
    services: group.services.map((service, serviceIndex) => ({
      ...service,
      icon: iconMatrix[groupIndex][serviceIndex]
    }))
  }))
)


</script>

<style scoped>
.bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 49, 88, 0.7);
  z-index: 1;
}

.icon-circle {
  height: 28px;
  width: 28px;
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.offer-section {
  width: 100%;
  background: url('/images/ser.jpg') center center / cover no-repeat;
  position: relative;
  padding: 4rem 1rem;

}

.container {
  position: relative;
  z-index: 4;
  max-width: 1200px;
  margin: 3rem auto 0;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  color: var(--white);
  z-index: 4;
}

.subtitle {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--white);
}

.groups {
  display: grid;
  gap: 2rem;

}

.group {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
  padding: 1rem;
}

.group-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.services {
  padding: 1.5rem;
}

.services li {
  list-style: none;
}

.service {
  min-height: 130px;
  margin-bottom: 1rem;
}

.service:last-child {
  margin-bottom: 0;
}

.service h4 {
  margin: 0 0 0.3rem;
  color: var(--title);
}

.service p {
  margin: 0;
  color: #333;
}

@media (max-width: 1024px) {
  .container {
    width: 80%;
  }
}


@media (min-width: 768px) {
  .groups {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .groups {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<template>
    <section class="hero">
        <div class="overlay"></div>
        <div class="content">
            <p class="welcome">{{ langState.t.main.heroTitle }}</p>
            <h1 class="title">GLOBAL ONSHORE</h1>
            <p class="description">
                {{ langState.t.main.heroDesc }}
            </p>
            <RouterLink to="/kontakt" class="contact-button"> {{ langState.t.main.navbar.contact }}</RouterLink>
        </div>
    </section>
</template>
<script setup>
import langState from '@/lang/langState'
</script>
<style scoped>
.hero {
    margin-top: -80px;
    width: 100%;
    position: relative;
    height: 90vh;
    background: url('/images/hero.jpg');
    background-position: center -100px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    color: white;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(26, 49, 88, 0.7);
    z-index: 1;
}

.content {
    position: relative;
    left: 50px;
    top: 150px;
    max-width: 600px;
    z-index: 2;
}

.welcome {
    color: var(--primary);
    font-weight: 600;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    backdrop-filter: blur(2px);
}

.contact-button {
    background-color: var(--primary);
    color: white;
    border: none;
    text-decoration: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-button:hover {
    background-color: var(--primary);
}

@media (max-width: 768px) {
    .content {
        width: 80%;
    }

    .wave-divider {
        display: none;
    }

    .overlay {
        height: 87%;
    }

}
</style>

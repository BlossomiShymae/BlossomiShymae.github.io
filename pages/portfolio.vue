<template>
  <div>
    <h1>Portfolio</h1>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-duration="1000">
          <img src="/img/grrrlcu.png" class="img-fluid border border-2 border-dark rounded-2" style="box-shadow: 16px 16px black; width: 350px;" />
        </div>
      </div>
      <div class="col-lg-8">
        <div class="d-flex gap-1 flex-column align-content-start justify-items-stretch">
          <div v-for="repository in selectedRepositories"
            data-aos="fade-left" data-aos-duration="1000"
            class="border-bottom">
            <a :id="'{{ repository.id }}'" :href="repository.html_url" class="text-decoration-none fg-color">
              <div class="d-flex gap-1 justify-content-between align-items-center">
                <div class="d-flex">
                <div><h4 class="m-0">{{ repository.name }}</h4></div>
                </div>
                <div class="d-flex gap-2 flex-grow">
                  <div>{{ repository.language }}</div>
                  <div><FontAwesomeIcon :style="{color: 'black'}" :icon="faStar"/> {{ repository.stargazers_count }}</div>
                  <div><FontAwesomeIcon :style="{color: 'black'}" :icon="faGitAlt"/> {{ repository.forks_count }}</div>
                </div>
              </div>
              <div class="d-flex ms-4">
                {{ repository.description }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import ls from 'localstorage-slim';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

interface GithubLicense {
  name: string;
}

interface GithubRepository {
  id: number;
  name: string;
  description: string;
  private: boolean;
  fork: boolean;
  html_url: string;
  language: string;
  forks_count: number;
  license: GithubLicense | null;
  stargazers_count: number;
}

useHead({
  title: "Portfolio - blossomishymae.github.io"
});

var repositories = ls.get("repositories") as GithubRepository[] | null;
if (repositories == null) {
  const res = await axios.get<GithubRepository[]>("https://api.github.com/users/BlossomiShymae/repos?per_page=100");
  repositories = res.data;
  ls.set("repositories", repositories, { ttl: 60 * 60}); // Set cache for an hour
}

const selectedRepositories = repositories
  .filter(p => p.private == false)
  .filter(p => p.fork == false)
  .sort((a, b) => b.stargazers_count - a.stargazers_count)
  .slice(0, Math.min(repositories.length - 1, 10));
</script>
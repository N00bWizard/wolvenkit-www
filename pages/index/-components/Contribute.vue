<template>
  <div class="contribute">
    <PageContainer>
      <div class="contribute__info">
        <h2 class="contribute__title">
          Contribute
        </h2>
        <p>Submit your PRs to the various projects we have ongoing in our repos, we are always keen on welcoming new developers to help and contribute to the projects.</p>
        <a
          href="https://github.com/WolvenKit"
          class="contribute__button"
        >
          View Repositories
        </a>
      </div>
      <div class="contribute__image">
        <img src="octocat.png">
      </div>
    </PageContainer>
  </div>
</template>

<style lang="scss" scoped>
.contribute {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(45deg, var(--color-bg), var(--color-bg-alt));

  ::v-deep .container {
    display: flex;
    align-items: center;
  }

  &__icon {
    font-size: 30vmin;

    ::v-deep svg {
      width: 1em;
      height: 1em;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2));
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  &__image {
    flex: 1;

    img {
      width: 100%;
    }

    @media (max-width: 660px) {
      display: none;
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1em;
    flex: 1;
  }

  &__title {
    font-size: 3em;
    margin-bottom: 0.5em;
  }

  &__button {
    width: max-content;
    margin-top: 1em;
    padding: 0.85em 2em;
    color: inherit;
    border-radius: 0.25em;
    border: 2px solid #fff;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: #fff;
      color: #000;
      box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

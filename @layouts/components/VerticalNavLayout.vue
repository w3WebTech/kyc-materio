<script lang="ts">
import { useDisplay } from 'vuetify'
import VerticalNav from '@layouts/components/VerticalNav.vue'
import { useTheme } from 'vuetify'
export default defineComponent({
  setup(props, { slots }) {
    const isOverlayNavActive = ref(false)
    const isLayoutOverlayVisible = ref(false)
    const toggleIsOverlayNavActive = useToggle(isOverlayNavActive)
    const vuetifyTheme = useTheme()
    const isDarkTheme = computed(() => {
      return vuetifyTheme.global.name.value === 'dark'
    })
    const route = useRoute()
    const { mdAndDown } = useDisplay()

    // ℹ️ This is alternative to below two commented watcher
    // We want to show overlay if overlay nav is visible and want to hide overlay if overlay is hidden and vice versa.
    syncRef(isOverlayNavActive, isLayoutOverlayVisible)

    return () => {
      // 👉 Vertical nav
      const verticalNav = h(
        VerticalNav,
        { isOverlayNavActive: isOverlayNavActive.value, toggleIsOverlayNavActive },
        {
          'nav-header': () => slots['vertical-nav-header']?.({ toggleIsOverlayNavActive }),
          'before-nav-items': () => slots['before-vertical-nav-items']?.(),
          default: () => slots['vertical-nav-content']?.(),
          'after-nav-items': () => slots['after-vertical-nav-items']?.(),
        },
      )

      // 👉 Navbar
      const navbar = h('header', { class: ['layout-navbar navbar-blur'] }, [
        h(
          'div',
          { class: 'navbar-content-container' },
          slots.navbar?.({
            toggleVerticalOverlayNavActive: toggleIsOverlayNavActive,
          }),
        ),
      ])

      const main = h(
        'main',
        { class: isDarkTheme.value == true ? 'layout-page-content bg-[#312D4B] ' : 'layout-page-content bg-white' },
        slots.default?.(),
      )

      // 👉 Footer
      const footer = h('footer', { class: 'layout-footer ' }, [
        h('div', { class: 'footer-content-container' }, slots.footer?.()),
      ])

      // 👉 Overlay
      const layoutOverlay = h('div', {
        class: ['layout-overlay', { visible: isLayoutOverlayVisible.value }],
        onClick: () => {
          isLayoutOverlayVisible.value = !isLayoutOverlayVisible.value
        },
      })

      return h(
        'div',
        {
          class: ['layout-wrapper', mdAndDown.value && 'layout-overlay-nav', route.meta.layoutWrapperClasses],
        },
        [navbar, main, footer, layoutOverlay],
      )
    }
  },
})
</script>

<style lang="scss">
@use '@configured-variables' as variables;
@use '@layouts/styles/placeholders';
@use '@layouts/styles/mixins';

.layout-wrapper {
  // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
  block-size: 100%;
  overflow: hidden;
  height: 100vh;
  .layout-page-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    min-block-size: 100dvh;
    transition: padding-inline-start 0.2s ease-in-out;
    will-change: padding-inline-start;

    @media screen and (min-width: 1280px) {
      padding-inline-start: 0;
    }
  }

  .layout-navbar {
    z-index: variables.$layout-vertical-nav-layout-navbar-z-index;

    .navbar-content-container {
      block-size: variables.$layout-vertical-nav-navbar-height;
    }

    @at-root {
      .layout-wrapper {
        .layout-navbar {
          @if variables.$layout-vertical-nav-navbar-is-contained {
            @include mixins.boxed-content;
          } @else {
            .navbar-content-container {
              @include mixins.boxed-content;
            }
          }
        }
      }
    }
  }

  &.layout-navbar-sticky .layout-navbar {
    @extend %layout-navbar-sticky;
  }

  &.layout-navbar-hidden .layout-navbar {
    @extend %layout-navbar-hidden;
  }

  // 👉 Footer
  .layout-footer {
    @include mixins.boxed-content;
  }

  // 👉 Layout overlay
  .layout-overlay {
    position: fixed;
    z-index: variables.$layout-overlay-z-index;
    background-color: rgb(0 0 0 / 60%);
    cursor: pointer;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease-in-out;
    will-change: transform;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }

  // 👉 Content height fixed
  &.layout-content-height-fixed {
    .layout-page-content {
      display: flex;
      overflow: hidden;

      > :first-child {
        max-block-size: 100%;
        overflow-y: auto;
      }
    }
  }
}
</style>

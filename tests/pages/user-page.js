import { attribute, collection, text, triggerable, visitable } from 'ember-cli-page-object';
import createPage from 'codecrafters-frontend/tests/support/create-page';
import CourseProgressListItem from 'codecrafters-frontend/tests/pages/components/course-progress-list-item';
import helpscoutBeacon from 'codecrafters-frontend/tests/pages/components/helpscout-beacon';
export default createPage({
  adminProfileButton: {
    scope: '[data-test-admin-profile-button]',
  },

  avatar: {
    scope: 'img[alt="avatar"]',
    src: attribute('src'),
  },

  courseProgressListItems: collection('[data-test-course-progress-list-item]', CourseProgressListItem),

  githubDetails: {
    scope: '[data-test-github-profile-link]',
    username: text(),
    link: attribute('href'),
  },

  githubName: {
    scope: '[data-test-github-name]',
    text: text(),
  },

  helpscoutBeacon: helpscoutBeacon,

  profileCustomizationNotice: { scope: '[data-test-profile-customization-notice]' },

  profileDescriptionMarkdown: {
    scope: '[data-test-profile-description-markdown]',
  },

  userLabel: {
    scope: '[data-test-user-label]',
    hover: triggerable('mouseenter'),
  },

  visit: visitable('/users/:username'),
});

const routes = [
  {
    name: 'Getting Started',
    path: '/documentation/quick-start',
    routes: [
      {
        path: '/documentation/quick-start',
        name: 'Quick Start',
      },
    ],
  },
  {
    name: 'React.js Components',
    path: '/documentation/react/alerts',
    routes: [
      {
        path: '/documentation/react/alerts',
        name: 'Alerts',
      },
      {
        name: 'Buttons',
        state: 'reactButtonsState',
        subRoutes: [
          {
            path: '/documentation/react/buttons/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/buttons/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/buttons/link',
            name: 'Link',
          },
        ],
      },
      {
        path: '/documentation/react/cards',
        name: 'Cards',
      },
      {
        name: 'Dropdowns',
        state: 'reactDropdownsState',
        subRoutes: [
          {
            path: '/documentation/react/dropdowns/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/dropdowns/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/dropdowns/link',
            name: 'Link',
          },
        ],
      },
      {
        name: 'Dropups',
        state: 'reactDropupsState',
        subRoutes: [
          {
            path: '/documentation/react/dropups/filled',
            name: 'Filled',
          },
          {
            path: '/documentation/react/dropups/outline',
            name: 'Outline',
          },
          {
            path: '/documentation/react/dropups/link',
            name: 'Link',
          },
        ],
      },
      {
        path: '/documentation/react/images',
        name: 'Images',
      },
      {
        path: '/documentation/react/inputs',
        name: 'Inputs',
      },
      {
        path: '/documentation/react/labels',
        name: 'Labels',
      },
      {
        path: '/documentation/react/menus',
        name: 'Menus',
      },
      {
        path: '/documentation/react/modals',
        name: 'Modals',
      },
      {
        path: '/documentation/react/navbars',
        name: 'Navbars',
      },
      {
        path: '/documentation/react/paginations',
        name: 'Paginations',
      },
      {
        path: '/documentation/react/popovers',
        name: 'Popovers',
      },
      {
        path: '/documentation/react/progressbars',
        name: 'Progressbars',
      },
      {
        name: 'Tabs',
        state: 'reactTabsState',
        subRoutes: [
          {
            path: '/documentation/react/tabs/text',
            name: 'Text',
          },
          {
            path: '/documentation/react/tabs/icons',
            name: 'Icons',
          },
        ],
      },
      {
        path: '/documentation/react/tooltips',
        name: 'Tooltips',
      },
      {
        name: 'Typography',
        state: 'reactTypographyState',
        subRoutes: [
          {
            path: '/documentation/react/typography/headings',
            name: 'Headings',
          },
          {
            path: '/documentation/react/typography/paragraph',
            name: 'Paragraph',
          },
          {
            path: '/documentation/react/typography/leadText',
            name: 'Lead Text',
          },
          {
            path: '/documentation/react/typography/quote',
            name: 'Quote',
          },
          {
            path: '/documentation/react/typography/small',
            name: 'Small',
          },
        ],
      },
    ],
  },
];

export default routes;

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dccbd494f06914521c600e',
                  title: 'Sanity Studio',
                  name: 'sanity-landing-page-studio-qaetm23t',
                  apiId: '2a96ce10-4aab-4c49-a0ea-5de83173ed12'
                },
                {
                  buildHookId: '60dccbd46bf5bb10744fc4f1',
                  title: 'Landing pages Website',
                  name: 'sanity-landing-page-web',
                  apiId: 'c4c47990-2c40-4a9a-aa09-27e5e99cbbed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smorris1709/sanity-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-landing-page-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

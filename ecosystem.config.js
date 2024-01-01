module.exports = {
    apps: [
        {
            name: 'my-nuxt-app-rph',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}

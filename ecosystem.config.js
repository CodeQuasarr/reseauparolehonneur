module.exports = {
    apps: [
        {
            name: 'reseauparolehonneur',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}

module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "uri": "mongodb://admin:root@strapi-test-shard-00-00.bdyot.mongodb.net:27017,strapi-test-shard-00-01.bdyot.mongodb.net:27017,strapi-test-shard-00-02.bdyot.mongodb.net:27017/strapi-test?ssl=true&replicaSet=atlas-r9kbzy-shard-0&authSource=admin&retryWrites=true&w=majority",
        "database":"strapi-test"
      },
      "options": {
        "ssl": true
      }
    }
  }
});


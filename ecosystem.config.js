module.exports = {
  apps: [
    {
      name: "email-test", // Adding a name to your app for better identification in PM2
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "email-test-2.pem",
      user: "ubuntu",
      host: "35.154.222.230",
      ref: "origin/main",
      repo: "https://github.com/chimt4chi/email-test.git",
      path: "/home/ubuntu/email-test", // Specifying a more precise path
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && nvm use 16.17.0 && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      "ssh-options": "ForwardAgent=yes",
    },
  },
};

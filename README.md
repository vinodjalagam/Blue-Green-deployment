# Blue-Green-deployment


I developed a basic backend API with a single route, /sayHello, using Node.js. The code was written in VS Code and pushed to a private GitHub repository.

For deployment, I used GitHub Actions, implementing Blue-Green Deployment to minimize downtime and reduce risk during the release of new versions. PM2 was utilized to manage and monitor the backend API, ensuring continuous operation with automatic restarts and process management. Nginx was configured as a reverse proxy and load balancer to efficiently handle and distribute traffic.

No sensitive information (such as API keys, hostnames, usernames, SSH keys, passwords, or other secrets) was stored or managed directly on the virtual machine (VM). Instead, secure methods like environment variables, secret management tools, or CI/CD pipeline mechanisms were used to handle sensitive data.

The GitHub repository was not cloned directly on the VM. All code was fetched and deployed through automated CI/CD pipelines to ensure consistency, security, and automation in the deployment process.

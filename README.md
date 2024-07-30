# Blue-Green-deployment


Challenge: Create a Simple Backend API with Port 80 and Set Up GitHub Actions for Deployment 

Firstly, I created a basic backend API with a single route, /sayHello, using Node.js. I wrote the code in VS Code and pushed it to a private GitHub repository.

Using GitHub Actions, I deployed the backend API employing Blue-Green Deployment to minimize downtime and reduce risk during the release of new application versions. I also used PM2 and Nginx in the project. PM2 was used to manage and monitor the backend API, ensuring continuous operation with automatic restarts and process management. Nginx served as a reverse proxy and load balancer, efficiently handling and distributing traffic.

No sensitive information (such as API keys, hostnames, usernames, SSH keys, passwords, or other secrets) is stored or managed directly on the virtual machine (VM). Instead, secure methods like environment variables, secret management tools, or CI/CD pipeline mechanisms are used to handle sensitive data.

I did not clone the GitHub repository directly on the VM. All code is fetched and deployed through automated CI/CD pipelines to ensure consistency, security, and automation in the deployment process.


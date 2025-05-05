# Micro-frontend-webpeck

# Vite Federation Plugin Example

This project demonstrates the usage of the **Vite Federation Plugin** to load remote components dynamically from a **Remote App** into a **Host App**. The **Host App** consumes a component exposed by the **Remote App**.

# Explanation of the Project Content:

1. **Prerequisites**: Ensure the user has **Node.js** and **npm** installed.
   
2. **Clone Repositories**: The user is instructed to clone both the **Host** and **Remote** repositories to separate directories.

3. **Install Dependencies**: A simple `npm install` command is given to install dependencies in both projects.

4. **Build and Serve**:
   - The **Remote App** is built and served using the `serve` command on port `3001`.
   - The **Host App** is built and served using the `serve` command on port `3000`.

5. **Test the Integration**: The user can test the dynamic loading of the remote component by clicking the button in the **Host App**.

6. **Stopping the Apps**: Instructions for stopping both apps with `Ctrl + C`.

---

### Additional Notes:
- **Vite Federation Plugin** in the **Remote App** exposes a component (`RemoteComponentWithCentering`) to be consumed by the **Host App**.
- **React** and **Suspense** are used in the **Host App** to load the remote component dynamically.
  
### Run the Projects:
1. Start the **Remote App** on port `3001` and **Host App** on port `3000`.
2. The **Host App** will dynamically fetch the **Remote App**'s component when triggered.

Let me know if you need more help or if anything is unclear!

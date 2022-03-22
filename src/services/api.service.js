class ApiService {
  constructor(baseURL) {
    this.url = baseURL;
  }

  async createPost(post) {
    try {
      const request = new Request(this.url + "/posts.json", {
        method: "POST",
        body: JSON.stringify(post)
      });
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}

export const apiService = new ApiService(
  "https://blog-system-92d04-default-rtdb.firebaseio.com"
);

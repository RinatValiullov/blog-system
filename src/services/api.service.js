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
      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: "GET"
      });

      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchPostById(id) {
    try {
      const request = new Request(`${this.url}/posts/${id}.json`, {
        method: "GET"
      });

      return useRequest(request);
    } catch (error) {
      console.error(error);
    }
  }
}

async function useRequest(request) {
  const response = await fetch(request);
  return await response.json();
}

export const apiService = new ApiService(
  "https://blog-system-92d04-default-rtdb.firebaseio.com"
);
